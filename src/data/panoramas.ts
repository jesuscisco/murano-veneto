/**
 * @fileoverview Panorama Metadata Configuration
 * Configuración de metadatos para cada panorama del tour virtual.
 * Define orientación inicial, posicionamiento de cámara y parámetros de la esfera 3D.
 * 
 * Data Structure:
 * - Mapeo de rutas de panoramas a configuración de visualización
 * - Coordenadas de orientación inicial para cada panorama
 * - Parámetros de la esfera 3D para renderizado consistente
 * 
 * @author
 * @version 1.0.0
 */

/**
 * Type definition for panorama metadata
 * @interface PanoramaMeta
 */
export type PanoramaMeta = {
  /**
   * Initial longitude in degrees for camera orientation
   * Longitud inicial en grados para orientación de cámara
   * @example 0 = center, +90 = right, -90 = left
   */
  initialLon?: number;
  
  /**
   * Initial latitude in degrees for camera orientation  
   * Latitud inicial en grados para orientación de cámara
   * @example 0 = horizon, +45 = up, -45 = down
   */
  initialLat?: number;
  
  /**
   * Sphere radius for 3D rendering
   * Radio de la esfera para renderizado 3D
   * @default 500 - Should match TourViewer sphere geometry
   */
  radius?: number;
};

/**
 * Panorama Metadata Configuration
 * 
 * Configuración centralizada de metadatos para todos los panoramas del tour.
 * Cada entrada define la orientación inicial de cámara y parámetros de renderizado
 * para proporcionar una experiencia de visualización óptima y consistente.
 * 
 * Key Features:
 * - Orientación inicial personalizada por panorama
 * - Radio de esfera consistente para todos los panoramas
 * - Coordenadas optimizadas para mejor punto de vista inicial
 * - Soporte para ajustes finos de posicionamiento
 * 
 * Coordinate System:
 * - Longitude: -180 to +180 degrees (+ = right, - = left)
 * - Latitude: -90 to +90 degrees (+ = up, - = down)
 * - Radius: Distance from center (typically 480-500 units)
 * 
 * Usage in TourViewer:
 * - Automatically applied when panorama loads
 * - Prevents jarring orientation jumps
 * - Ensures optimal initial viewing angle
 * - Works with OrbitControls for smooth navigation
 * 
 * @const PANORAMA_META
 * @type {Record<string, PanoramaMeta>}
 * 
 * @example
 * ```typescript
 * const meta = PANORAMA_META['/panoramas/INICIO.png'];
 * // { initialLon: 0, initialLat: 0, radius: 480 }
 * ```
 */
const PANORAMA_META: Record<string, PanoramaMeta> = {
  '/panoramas/INICIO.png': { initialLon: 0, initialLat: 0, radius: 480 },
  '/panoramas/1.png':    { initialLon: -100, initialLat: 10, radius: 480 },
  '/panoramas/2.png':    { initialLon: 0, initialLat: 2, radius: 480 },
  '/panoramas/2b.png':   { initialLon: -30, initialLat: 2, radius: 480 },
  '/panoramas/3.png':    { initialLon: -30, initialLat: 2, radius: 480 },
  '/panoramas/4.png':    { initialLon: -30, initialLat: 2, radius: 480 },
  '/panoramas/5.png':    { initialLon: -30, initialLat: 2, radius: 480 },
  '/panoramas/6.png':    { initialLon: 150, initialLat: 2, radius: 480 },
  '/panoramas/7.png':    { initialLon: 20, initialLat: 18, radius: 480 },
  '/panoramas/8.png':    { initialLon: 0, initialLat: 2, radius: 480 },
  '/panoramas/9.png':    { initialLon: 0, initialLat: 2, radius: 480 },
  '/panoramas/10.png':   { initialLon: 0, initialLat: 2, radius: 480 },
};

export default PANORAMA_META;