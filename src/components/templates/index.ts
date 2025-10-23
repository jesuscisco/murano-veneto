/**
 * @fileoverview Templates Layer - Atomic Design Export Module
 * 
 * Templates are page-level objects that place components into a layout and
 * articulate the design's underlying content structure.
 * 
 * Los templates son objetos a nivel de página que ubican componentes en un layout
 * y articulan la estructura de contenido subyacente del diseño.
 * 
 * Template Characteristics:
 * - Page-level layout orchestration
 * - Combine organisms, molecules, and atoms into complete interfaces
 * - Define content structure and component relationships
 * - Handle application-level state management
 * - Provide responsive behavior across devices
 * - Serve as blueprint for actual pages
 * 
 * Available Templates:
 * 
 * @example TourTemplate - Template principal para tour virtual 360°
 * ```tsx
 * <TourTemplate 
 *   currentPanorama="/panoramas/sala-principal.jpg"
 *   hotspots={currentHotspots}
 *   onHotspotClick={(id) => navigateToRoom(id)}
 *   onModalOpen={(key) => setActiveModal(key)}
 *   onVisitClick={() => scheduleVisit()}
 *   isOptionsOpen={showOptions}
 *   onOptionsToggle={() => setShowOptions(!showOptions)}
 *   openModal={activeModal}
 *   onModalClose={() => setActiveModal(null)}
 *   modalConfig={modalConfiguration}
 *   onOptionsClose={() => setShowOptions(false)}
 * />
 * ```
 * 
 * Template Features:
 * - Layout responsivo para desktop y mobile
 * - Orquestación completa de organisms y molecules
 * - Gestión centralizada de estado de aplicación
 * - Estructura consistente para toda la experiencia
 * - Integración con sistema de assets y configuración
 * 
 * Layout Architecture:
 * - Desktop: Sidebar + TourViewer + Desktop CTA
 * - Mobile: FooterBar + OptionsAccordion + TourViewer
 * - Universal: Logo + Modal system
 * 
 * Design Principles:
 * - Single responsibility for layout orchestration
 * - Clear separation between template and page logic
 * - Reusable across similar page types
 * - Comprehensive prop interfaces for customization
 * - Full documentation with usage examples
 * 
 * @author
 * @version 1.0.0
 */

// Atomic Design - Templates Layer
// Los templates son layouts de página que ubican componentes en un layout y articulan el diseño subyacente

export { default as TourTemplate } from './TourTemplate';