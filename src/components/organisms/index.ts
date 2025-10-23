/**
 * @fileoverview Organisms Layer - Atomic Design Export Module
 * 
 * Organisms are complex UI components composed of groups of molecules and/or atoms
 * that form relatively complex, distinct sections of an interface.
 * 
 * Los organismos son componentes UI complejos compuestos por grupos de moléculas
 * y/o átomos que forman secciones relativamente complejas y distintivas de una interfaz.
 * 
 * Organism Characteristics:
 * - Complex functionality with multiple interactive elements
 * - Combination of multiple molecules and atoms
 * - Distinct sections that serve specific interface purposes
 * - Often have their own internal state management
 * - Can contain business logic and data handling
 * 
 * Available Organisms:
 * 
 * @example FooterBar - Barra inferior con acciones principales y opciones
 * ```tsx
 * <FooterBar 
 *   onVisitClick={() => scheduleVisit()}
 *   isOptionsOpen={showOptions}
 *   onOptionsToggle={() => setShowOptions(!showOptions)}
 * />
 * ```
 * 
 * @example Hotspot - Punto interactivo 3D para navegación en tour virtual
 * ```tsx
 * <Hotspot 
 *   id="kitchen"
 *   position={new Vector3(150, 0, -200)}
 *   label="Ir a la Cocina"
 *   camera={camera}
 *   onClick={(id) => navigateToRoom(id)}
 * />
 * ```
 * 
 * @example Modal - Overlay modal para mostrar imágenes e información
 * ```tsx
 * <Modal 
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   title="Planos del Proyecto"
 *   imageSrc="/modals/plantas.jpg"
 * />
 * ```
 * 
 * @example OptionsAccordion - Acordeón expandible con opciones de navegación
 * ```tsx
 * <OptionsAccordion 
 *   isOpen={showOptions}
 *   onClose={() => setShowOptions(false)}
 *   onModalOpen={(key) => openModal(key)}
 * />
 * ```
 * 
 * @example Sidebar - Barra lateral de navegación principal
 * ```tsx
 * <Sidebar 
 *   onModalOpen={(modalKey) => setActiveModal(modalKey)}
 * />
 * ```
 * 
 * @example TourViewer - Visor principal de tour virtual 360°
 * ```tsx
 * <TourViewer 
 *   src="/panoramas/sala-principal.jpg"
 *   hotspots={roomHotspots}
 *   onHotspotClick={(id) => navigateTo(id)}
 *   blackoutMs={250}
 * />
 * ```
 * 
 * Design Principles:
 * - Each organism serves a distinct interface purpose
 * - Complex interactions and state management
 * - Reusable across different templates
 * - Clear separation of concerns
 * - Comprehensive documentation and examples
 * 
 * @author
 * @version 1.0.0
 */

// Atomic Design - Organisms Layer
// Los organismos son grupos de moléculas unidas que forman secciones relativamente complejas

export { default as FooterBar } from './FooterBar';
export { default as Hotspot } from './Hotspot';
export { default as Modal } from './Modal';
export { default as OptionsAccordion } from './OptionsAccordion';
export { default as Sidebar } from './Sidebar';
export { default as TourViewer } from './TourViewer';