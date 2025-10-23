/**
 * @fileoverview Hotspots Configuration
 * Configuración de todos los hotspots (puntos de navegación) para cada panorama.
 * Define posiciones 3D, etiquetas y destinos de navegación para el tour virtual.
 * 
 * Data Structure:
 * - Mapeo de panoramas a arrays de hotspots
 * - Coordenadas 3D precisas para cada punto de navegación
 * - Sistema de navegación bidireccional entre panoramas
 * 
 * @author
 * @version 1.0.0
 */

/**
 * Type definition for hotspot data structure
 * @interface HotspotData
 */
export type HotspotData = {
  /**
   * Unique identifier for the hotspot
   * Identificador único para el hotspot
   */
  id: string;
  
  /**
   * 3D position coordinates [x, y, z] in world space
   * Coordenadas de posición 3D [x, y, z] en espacio mundial
   * @example [800, -50, 50] - Position on the sphere surface
   */
  position: [number, number, number];
  
  /**
   * Display label for accessibility and user interface
   * Etiqueta para mostrar en interfaz y accesibilidad
   */
  label: string;
  
  /**
   * Target panorama path for navigation (optional)
   * Ruta del panorama destino para navegación (opcional)
   * @example '/panoramas/sala-principal.png'
   */
  target?: string;
};

/**
 * Hotspots Configuration Map
 * 
 * Configuración completa de todos los hotspots para cada panorama del tour.
 * Cada entrada mapea una ruta de panorama a un array de hotspots que permiten
 * la navegación hacia otros espacios del tour virtual.
 * 
 * Key Features:
 * - Navegación bidireccional entre panoramas
 * - Posicionamiento 3D preciso en la esfera
 * - Etiquetas descriptivas para cada punto de navegación
 * - Estructura escalable para agregar nuevos panoramas
 * 
 * Coordinate System:
 * - X axis: -1000 to +1000 (left to right)
 * - Y axis: -1000 to +1000 (down to up)  
 * - Z axis: -1000 to +1000 (back to front)
 * - Positions should be on or near sphere surface (radius ~500)
 * 
 * Navigation Flow:
 * - INICIO -> 1: Entry point to main tour
 * - 1 <-> 2: Bidirectional navigation between main areas
 * - 2 -> 3,4,5: Multiple options from central location
 * - 5 -> 6 -> 7,8: Sequential progression through spaces
 * - 8 -> 9,10: Final areas of the tour
 * 
 * Best Practices:
 * - Use descriptive IDs (to-kitchen, to-living-room)
 * - Position hotspots at natural transition points
 * - Ensure reciprocal navigation where logical
 * - Test positions in 3D space for optimal visibility
 * - Maintain consistent hotspot sizing and appearance
 * 
 * @const HOTSPOTS_MAP
 * @type {Record<string, HotspotData[]>}
 * 
 * @example
 * ```typescript
 * const hotspotsForRoom = HOTSPOTS_MAP['/panoramas/INICIO.png'];
 * // [{ id: 'to-1', position: [800, -50, 50], label: 'Ir a 1', target: '/panoramas/1.png' }]
 * ```
 */
const HOTSPOTS_MAP: Record<string, HotspotData[]> = {
  '/panoramas/INICIO.png': [
    { id: 'to-1', position: [800, -50, 50], label: 'Ir a 1', target: '/panoramas/1.png' },
  ],
  '/panoramas/1.png': [
    { id: 'to-inicio', position: [-900, -80, -220], label: 'Ir a inicio', target: '/panoramas/INICIO.png' },
    { id: 'to-2', position: [500, -80, 500], label: 'Ir a 2', target: '/panoramas/2.png' },
    { id: 'to-2b', position: [-7, -1.4, 10], label: 'Ir a 2b', target: '/panoramas/11.png' },
  ],
  '/panoramas/11.png': [
    { id: 'to-1-again', position: [-90, -0, 100], label: 'Ir a 1', target: '/panoramas/1.png' },
  ],
  '/panoramas/2.png': [
    { id: 'to-1', position: [-200, -10, 100], label: 'ir a 1', target: '/panoramas/1.png' },
    { id: 'to-3', position: [50, 0, -180], label: 'ir a 3', target: '/panoramas/3.png' },
    { id: 'to-4', position: [50, 0, 0], label: 'ir a 4', target: '/panoramas/4.png' },
    { id: 'to-5', position: [700, 0, 600], label: 'ir a 5', target: '/panoramas/5.png' },
    
  ],
  '/panoramas/3.png': [
    { id: 'to-2-again', position: [700, 0, 200], label: 'Ir a 1', target: '/panoramas/2.png' },
    { id: 'to-3b-again', position: [-120, 0, -200], label: 'Ir a 1', target: '/panoramas/12.png' },
  ],
  '/panoramas/12.png': [
    { id: 'to-3-again', position: [-120, -5, 75], label: 'Ir a 1', target: '/panoramas/3.png' },
  ],
  '/panoramas/4.png': [
    { id: 'to-2-again', position: [-80, -5, -3], label: 'Ir a 1', target: '/panoramas/2.png' },
  ],
  '/panoramas/5.png': [
    { id: 'to-6', position: [400, 150, -200], label: 'Ir a 1', target: '/panoramas/6.png' },
    { id: 'to-2-again', position: [500, -400, 50], label: 'Ir a 1', target: '/panoramas/2.png' },
  ],
  '/panoramas/6.png': [
    { id: 'to-5-again', position: [500, 0, 50], label: 'Ir a 1', target: '/panoramas/5.png' },
    { id: 'to-7', position: [-100, 0, -80], label: 'Ir a 1', target: '/panoramas/7.png' },
    { id: 'to-8', position: [-300, -0, 500], label: 'Ir a 1', target: '/panoramas/8.png' },
  ],
  '/panoramas/7.png': [
    { id: 'to-6', position: [-180, 0, 500], label: 'Ir a 1', target: '/panoramas/6.png' },
  ],
  '/panoramas/8.png': [
    { id: 'to-6-again', position: [-400, 20, 170], label: 'Ir a 1', target: '/panoramas/6.png' },
    { id: 'to-9', position: [-400, 20, -80], label: 'Ir a 1', target: '/panoramas/9.png' },
    { id: 'to-10', position: [70, 0, 50], label: 'Ir a 1', target: '/panoramas/10.png' },
  ],
    '/panoramas/9.png': [
    { id: 'to-8', position: [-300, 20, -80], label: 'Ir a 1', target: '/panoramas/8.png' },
  ],
  '/panoramas/10.png': [
    { id: 'to-8', position: [500, 0, 50], label: 'Ir a 1', target: '/panoramas/8.png' },
  ],
};

export default HOTSPOTS_MAP;





