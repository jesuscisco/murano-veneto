/**
 * @fileoverview FooterBar organism component
 * Organismo de barra inferior que combina CallToActionButton y OptionsToggle
 * para proporcionar acciones principales y opciones secundarias del tour.
 * 
 * Implements Atomic Design Organisms pattern:
 * - Combina múltiples moléculas para crear interfaz cohesiva
 * - Maneja interacciones principales del usuario
 * - Proporciona acceso rápido a funciones clave
 * 
 * @author
 * @version 1.0.0
 */

import React from 'react';
import { CallToActionButton, OptionsToggle } from '../molecules';

/**
 * Props interface for FooterBar organism component
 * @interface FooterBarProps
 */
interface FooterBarProps {
  /**
   * Callback function triggered when visit button is clicked
   * Maneja la acción principal de agendar visita
   * @example
   * onVisitClick={() => window.open('tel:+1234567890')}
   */
  onVisitClick: () => void;
  /**
   * Boolean state indicating if options panel is open
   * Controla la visibilidad del panel de opciones
   */
  isOptionsOpen: boolean;
  /**
   * Callback function to toggle options panel visibility
   * Alterna entre mostrar/ocultar opciones adicionales
   */
  onOptionsToggle: () => void;
}

/**
 * FooterBar Organism Component
 * 
 * Barra inferior que combina la acción principal (CallToActionButton) con
 * opciones secundarias (OptionsToggle) para crear una interfaz de acciones
 * rápidas y accesibles en la parte inferior del tour virtual.
 * 
 * Key Features:
 * - Acción principal prominente para agendar visitas
 * - Toggle para opciones adicionales del tour
 * - Diseño horizontal con distribución equilibrada
 * - Accesibilidad completa con roles y labels ARIA
 * 
 * Design Pattern: Atomic Design Organism
 * - Combina CallToActionButton y OptionsToggle molecules
 * - Crea interfaz cohesiva para acciones del usuario
 * - Maneja estado compartido entre componentes
 * 
 * @param props - FooterBarProps interface
 * @returns JSX.Element representing the footer action bar
 * 
 * @example
 * ```tsx
 * <FooterBar 
 *   onVisitClick={() => handleVisitScheduling()}
 *   isOptionsOpen={showOptions}
 *   onOptionsToggle={() => setShowOptions(!showOptions)}
 * />
 * ```
 */
const FooterBar: React.FC<FooterBarProps> = ({
  onVisitClick,
  isOptionsOpen,
  onOptionsToggle
}) => {
  return (
    <div className="footer-bar" role="toolbar" aria-label="Acciones rápidas">
      <CallToActionButton
        onClick={onVisitClick}
        text="Agenda tu Visita"
        aria-label="Agenda tu Visita"
      />

      <OptionsToggle
        isOpen={isOptionsOpen}
        onClick={onOptionsToggle}
        aria-label="Más opciones"
      />
    </div>
  );
};

export default FooterBar;