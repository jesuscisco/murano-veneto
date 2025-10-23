/**
 * @fileoverview Molecules Index - Exportaciones de componentes Molecules
 * 
 * ATOMIC DESIGN - MOLECULES LAYER
 * 
 * Las moléculas son grupos de átomos unidos que forman las unidades funcionales más pequeñas.
 * Son combinaciones relativamente simples de elementos que funcionan juntos como una unidad.
 * 
 * Características de las Molecules:
 * - Combinan 2-4 átomos para formar funcionalidades cohesivas
 * - Tienen un propósito específico y claro
 * - Son reutilizables en diferentes contextos
 * - Mantienen su funcionalidad cuando se mueven
 * - Sirven como bloques de construcción para organismos
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

/**
 * NavigationItem - Ítem de navegación completo (Button + Icon + Label)
 * Base para elementos de menú en sidebar y accordion móvil
 */
export { default as NavigationItem } from './NavigationItem';

/**
 * CallToActionButton - Botón de llamada a la acción (Button + Icon + Text)
 * Para acciones principales como "Agenda tu Visita"
 */
export { default as CallToActionButton } from './CallToActionButton';

/**
 * OptionsToggle - Toggle de menú hamburguesa (Button + Icon)
 * Control para abrir/cerrar menú de opciones móvil
 */
export { default as OptionsToggle } from './OptionsToggle';