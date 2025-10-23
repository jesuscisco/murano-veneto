/**
 * @fileoverview Panorama Cache Utility
 * Sistema avanzado de caché de ImageBitmap con LRU eviction y prefetch helpers.
 * Optimiza la carga de panoramas para navegación fluida y reduce la latencia inicial.
 * 
 * Key Features:
 * - ImageBitmap caching para renderizado eficiente
 * - LRU (Least Recently Used) eviction policy
 * - Prefetch inteligente de panoramas relacionados
 * - Manejo de assets versionados y rutas base
 * - Protección contra memory leaks
 * 
 * @author
 * @version 2.0.0
 */

/**
 * Cache record structure for panorama storage
 * @interface CacheRecord
 */
type CacheRecord = {
  /**
   * Promise for ongoing bitmap loading operation
   * Promise para operación de carga de bitmap en progreso
   */
  promise: Promise<ImageBitmap> | null;
  
  /**
   * Cached ImageBitmap ready for use
   * ImageBitmap cacheado listo para usar
   */
  bmp: ImageBitmap | null;
  
  /**
   * Timestamp of last access for LRU eviction
   * Timestamp del último acceso para eviction LRU
   */
  lastUsed: number;
};

/**
 * Maximum number of cached panoramas
 * Número máximo de panoramas en caché para navegación fluida
 */
const MAX_ITEMS = 5;

/**
 * Internal cache storage using Map for O(1) operations
 * Almacenamiento interno de caché usando Map para operaciones O(1)
 */
const cache = new Map<string, CacheRecord>();

/**
 * Environment configuration for asset paths
 * Configuración de entorno para rutas de assets
 */
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH || '') as string;
const ASSET_V = (process.env.NEXT_PUBLIC_ASSET_VERSION || '') as string;

/**
 * Resolves relative or absolute paths to full URLs
 * Resuelve rutas relativas o absolutas a URLs completas
 * 
 * @param src - Source path (relative, absolute, or full URL)
 * @returns Resolved full URL with base path if needed
 * 
 * @example
 * resolveUrl('/panoramas/room1.jpg') // -> '/base/panoramas/room1.jpg'  
 * resolveUrl('https://cdn.com/image.jpg') // -> 'https://cdn.com/image.jpg'
 */
function resolveUrl(src: string): string {
  try {
    // absolute URL (http/https) — leave unchanged
    if (/^https?:\/\//i.test(src)) return src;
    // absolute path from root — prefix base path
    if (src.startsWith('/')) return `${BASE}${src}`;
    // relative path — also anchor at base
    return `${BASE}/${src}`;
  } catch {
    return src;
  }
}

/**
 * Adds asset version parameter for cache busting
 * Agrega parámetro de versión de asset para cache busting
 * 
 * @param url - Base URL to add version to
 * @returns URL with version parameter appended
 * 
 * @example
 * withVersion('/panoramas/room1.jpg') // -> '/panoramas/room1.jpg?v=1.0.0'
 */
function withVersion(url: string): string {
  if (!ASSET_V) return url;
  return url + (url.includes('?') ? '&' : '?') + 'v=' + encodeURIComponent(ASSET_V);
}

/**
 * Evicts least recently used cache entries when over MAX_ITEMS
 * Desaloja entradas menos recientemente usadas cuando excede MAX_ITEMS
 * 
 * LRU Eviction Strategy:
 * - Sorts entries by lastUsed timestamp
 * - Removes oldest entries beyond MAX_ITEMS limit
 * - Properly closes ImageBitmap to free memory
 * - Maintains cache size for optimal performance
 */
function evictIfNeeded() {
  if (cache.size <= MAX_ITEMS) return;
  // evict least recently used items beyond MAX_ITEMS
  const entries = Array.from(cache.entries()).sort((a, b) => a[1].lastUsed - b[1].lastUsed);
  while (entries.length > MAX_ITEMS) {
    const [key, rec] = entries.shift()!;
    try { rec.bmp?.close?.(); } catch {}
    cache.delete(key);
  }
}

/**
 * Loads and caches panorama ImageBitmap with intelligent caching
 * Carga y cachea ImageBitmap de panorama con caché inteligente
 * 
 * Key Features:
 * - Returns cached bitmap immediately if available
 * - Deduplicates concurrent requests with promise caching
 * - Handles externally-closed bitmaps gracefully
 * - Implements LRU eviction for memory management
 * - Uses fetch with force-cache for browser optimization
 * 
 * Error Handling:
 * - Validates bitmap integrity (width/height check)
 * - Removes corrupted entries from cache
 * - Propagates fetch/decode errors appropriately
 * - Cleans up failed promises to prevent memory leaks
 * 
 * @param src - Panorama source path (relative or absolute)
 * @returns Promise<ImageBitmap> ready for Three.js texture use
 * @throws Error if not in browser environment or fetch fails
 * 
 * @example
 * ```typescript
 * const bitmap = await loadPanoramaBitmap('/panoramas/living-room.jpg');
 * const texture = new Texture(bitmap);
 * ```
 */
export async function loadPanoramaBitmap(src: string): Promise<ImageBitmap> {
  if (typeof window === 'undefined') throw new Error('Bitmap load only in browser');
  const key = withVersion(resolveUrl(src));
  let rec = cache.get(key);
  if (rec?.bmp) {
    // Guard against externally-closed bitmaps (width/height become 0)
    const isClosed = (rec.bmp.width === 0 && rec.bmp.height === 0);
    if (!isClosed) {
      rec.lastUsed = Date.now();
      return rec.bmp;
    }
    // If closed, discard and refetch
    try { rec.bmp.close?.(); } catch {}
    rec.bmp = null;
  }
  if (rec?.promise) {
    const bmp = await rec.promise;
    rec.bmp = bmp;
    rec.lastUsed = Date.now();
    return bmp;
  }
  const promise = (async () => {
    const url = key; // already includes base and version
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`Failed to fetch ${src}: ${res.status}`);
    const blob = await res.blob();
    const bmp = await createImageBitmap(blob);
    return bmp;
  })();
  rec = { promise, bmp: null, lastUsed: Date.now() };
  cache.set(key, rec);
  try {
    const bmp = await promise;
    rec.bmp = bmp;
    rec.promise = null;
    rec.lastUsed = Date.now();
    evictIfNeeded();
    return bmp;
  } catch (e) {
    cache.delete(key);
    throw e;
  }
}

/**
 * Prefetches multiple panoramas in background for smooth navigation
 * Precarga múltiples panoramas en background para navegación fluida
 * 
 * Strategy:
 * - Deduplicates source URLs to avoid redundant requests  
 * - Schedules loading with setTimeout to avoid blocking main thread
 * - Silently ignores errors to prevent disrupting user experience
 * - Only fetches panoramas not already in cache
 * 
 * Use Cases:
 * - Preload hotspot targets when user enters a room
 * - Background loading of likely next destinations
 * - Preparation for anticipated user navigation patterns
 * 
 * @param srcs - Array of panorama source paths to prefetch
 * 
 * @example
 * ```typescript
 * // Prefetch all connected rooms when user enters main area
 * const connectedRooms = ['/panoramas/kitchen.jpg', '/panoramas/bedroom.jpg'];
 * prefetchPanoramas(connectedRooms);
 * ```
 */
export function prefetchPanoramas(srcs: string[]) {
  if (typeof window === 'undefined') return;
  const unique = Array.from(new Set(srcs)).filter(Boolean);
  // schedule lightly to avoid blocking main thread
  setTimeout(() => {
    unique.forEach(src => {
      if (!cache.has(src)) {
        loadPanoramaBitmap(src).catch(() => {/* ignore */});
      }
    });
  }, 0);
}

/**
 * Checks if panorama bitmap is already cached and ready
 * Verifica si el bitmap del panorama ya está cacheado y listo
 * 
 * @param src - Panorama source path to check
 * @returns true if bitmap is cached and available, false otherwise
 * 
 * @example
 * ```typescript
 * if (hasBitmap('/panoramas/kitchen.jpg')) {
 *   // Can display immediately without loading delay
 *   showPanorama('/panoramas/kitchen.jpg');
 * }
 * ```
 */
export function hasBitmap(src: string) {
  return !!cache.get(src)?.bmp;
}

/**
 * Updates last access timestamp for LRU cache management
 * Actualiza timestamp de último acceso para gestión de caché LRU
 * 
 * Used internally to maintain accurate LRU ordering when accessing
 * cached bitmaps. Prevents eviction of recently used panoramas.
 * 
 * @param src - Panorama source path to touch
 * 
 * @example
 * ```typescript
 * // Mark as recently used when displaying panorama
 * touchBitmap('/panoramas/current-room.jpg');
 * ```
 */
export function touchBitmap(src: string) {
  const rec = cache.get(src);
  if (rec) rec.lastUsed = Date.now();
}
