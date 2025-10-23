/**
 * @fileoverview Atoms Index - Exportaciones de componentes Atoms
 * 
 * ATOMIC DESIGN - ATOMS LAYER
 * 
 * Los átomos son los componentes UI más básicos e indivisibles del sistema de diseño.
 * Son los elementos fundamentales que no se pueden descomponer más sin perder su funcionalidad.
 * 
 * Características de los Atoms:
 * - Elementos HTML básicos aplicados con estilos (buttons, inputs, labels)
 * - No contienen otros componentes complejos
 * - Son altamente reutilizables
 * - Definen las propiedades básicas del sistema de diseño
 * - Incluyen toda la funcionalidad de accesibilidad básica
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

/**
 * Button - Componente de botón base reutilizable
 * Fundación para todos los botones del sistema
 */
export { default as Button } from './Button';

/**
 * Icon - Componente de iconos SVG con manejo de rutas automático
 * Base para todos los iconos del sistema
 */
export { default as Icon } from './Icon';

/**
 * Label - Componente de etiquetas de texto consistentes
 * Usado en navegación y formularios
 */
export { default as Label } from './Label';

/**
 * Logo - Componente del logo del sitio con responsive
 * Branding principal de la aplicación
 */
export { default as Logo } from './Logo';