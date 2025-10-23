/**
 * @fileoverview TourTemplate template component
 * Template principal que orquesta todos los organisms del tour virtual
 * en un layout cohesivo con soporte para responsive design y gestión de estado.
 * 
 * Implements Atomic Design Templates pattern:
 * - Orquesta múltiples organismos en layout funcional
 * - Maneja toda la lógica de estado de la aplicación
 * - Proporciona estructura responsive para desktop y mobile
 * 
 * @author
 * @version 1.0.0
 */

import React from 'react';
import { Logo } from '../atoms';
import { CallToActionButton } from '../molecules';
import { 
  Sidebar, 
  FooterBar, 
  OptionsAccordion, 
  Modal, 
  TourViewer 
} from '../organisms';

/**
 * Props interface for TourTemplate component
 * @interface TourTemplateProps
 */
interface TourTemplateProps {
  // Logo Configuration
  /**
   * Optional props for Logo atom component
   * Configuración opcional para el componente Logo
   */
  logoProps?: {
    className?: string;
    alt?: string;
  };
  
  // Tour Viewer Configuration
  /**
   * Current panorama image source path
   * Ruta de la imagen panorámica actual
   */
  currentPanorama: string;
  /**
   * Array of hotspot definitions for current panorama
   * Array de definiciones de hotspots para el panorama actual
   */
  hotspots: any[];
  /**
   * Callback when hotspot is clicked for navigation
   * Callback cuando se hace click en un hotspot para navegación
   */
  onHotspotClick: (id: string) => void;
  
  // Sidebar Configuration
  /**
   * Callback to open specific modals from sidebar
   * Callback para abrir modales específicos desde el sidebar
   */
  onModalOpen: (modalKey: string) => void;
  
  // Footer Configuration
  /**
   * Callback when visit button is clicked
   * Callback cuando se hace click en el botón de visita
   */
  onVisitClick: () => void;
  /**
   * Boolean state for options accordion visibility
   * Estado booleano para visibilidad del acordeón de opciones
   */
  isOptionsOpen: boolean;
  /**
   * Callback to toggle options accordion
   * Callback para alternar el acordeón de opciones
   */
  onOptionsToggle: () => void;
  
  // Modal Configuration
  /**
   * Currently open modal key or null
   * Clave del modal actualmente abierto o null
   */
  openModal: string | null;
  /**
   * Callback to close currently open modal
   * Callback para cerrar el modal actualmente abierto
   */
  onModalClose: () => void;
  /**
   * Configuration object for all available modals
   * Objeto de configuración para todos los modales disponibles
   */
  modalConfig: Record<string, { title: string; src: string }>;
  
  // Options Accordion Configuration
  /**
   * Callback to close options accordion
   * Callback para cerrar el acordeón de opciones
   */
  onOptionsClose: () => void;
}

/**
 * TourTemplate Template Component
 * 
 * Template principal que orquesta todos los componentes del tour virtual
 * en un layout responsivo y funcional. Maneja la disposición de elementos
 * para desktop (sidebar + CTA) y mobile (footer + accordion).
 * 
 * Key Features:
 * - Layout responsivo para desktop y mobile
 * - Orquestación de todos los organisms principales
 * - Gestión centralizada de estado de modales y navegación
 * - Integración con sistema de assets versionados
 * - Soporte completo para funcionalidad del tour virtual
 * 
 * Layout Structure:
 * - Logo: Posicionado como marca principal
 * - Sidebar: Navegación lateral para desktop
 * - TourViewer: Contenido principal del tour 360°
 * - Desktop CTA: Botón de acción prominent para desktop
 * - FooterBar: Barra inferior para mobile
 * - OptionsAccordion: Navegación expandible para mobile
 * - Modal: Overlay para mostrar información adicional
 * 
 * Responsive Behavior:
 * - Desktop: Sidebar visible, CTA destacado
 * - Mobile: Footer con toggle para accordion de opciones
 * - Modal: Funciona consistentemente en ambas vistas
 * 
 * Design Pattern: Atomic Design Template
 * - Orquesta atoms (Logo), molecules (CallToActionButton)
 * - Integra múltiples organisms para funcionalidad completa
 * - Proporciona estructura de página cohesiva
 * 
 * @param props - TourTemplateProps interface
 * @returns JSX.Element representing the complete tour template
 * 
 * @example
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
 */
const TourTemplate: React.FC<TourTemplateProps> = ({
  logoProps,
  currentPanorama,
  hotspots,
  onHotspotClick,
  onModalOpen,
  onVisitClick,
  isOptionsOpen,
  onOptionsToggle,
  openModal,
  onModalClose,
  modalConfig,
  onOptionsClose
}) => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const v = process.env.NEXT_PUBLIC_ASSET_VERSION || '';
  const ver = v ? `?v=${encodeURIComponent(v)}` : '';

  return (
    <div className="page-root">
      {/* Site Logo */}
      <Logo {...logoProps} />

      {/* Sidebar (Desktop) */}
      <Sidebar onModalOpen={onModalOpen} />

      {/* Main Content */}
      <main className="main-content">
        <TourViewer 
          src={currentPanorama} 
          hotspots={hotspots} 
          onHotspotClick={onHotspotClick} 
        />
      </main>

      {/* Desktop CTA */}
      <div className="visit-cta-desktop">
        <CallToActionButton
          onClick={onVisitClick}
          text="Agenda tu Visita"
          aria-label="Agenda tu Visita"
        />
      </div>

      {/* Footer Bar (Mobile) */}
      <FooterBar
        onVisitClick={onVisitClick}
        isOptionsOpen={isOptionsOpen}
        onOptionsToggle={onOptionsToggle}
      />

      {/* Options Accordion (Mobile) */}
      <OptionsAccordion
        isOpen={isOptionsOpen}
        onClose={onOptionsClose}
        onModalOpen={onModalOpen}
      />

      {/* Modal */}
      {openModal && modalConfig[openModal] && (
        <Modal
          isOpen={!!openModal}
          onClose={onModalClose}
          title={modalConfig[openModal].title}
          imageSrc={`${base}${modalConfig[openModal].src}${ver}`}
        />
      )}
    </div>
  );
};

export default TourTemplate;