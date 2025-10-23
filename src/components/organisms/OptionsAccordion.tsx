/**
 * @fileoverview OptionsAccordion organism component
 * Organismo de acordeón expandible que muestra opciones de navegación rápida
 * como alternativa al sidebar principal. Incluye backdrop y gestión de estado.
 * 
 * Implements Atomic Design Organisms pattern:
 * - Combina múltiples NavigationItem molecules
 * - Maneja estado complejo de visibilidad y backdrop
 * - Proporciona interfaz alternativa de navegación
 * 
 * @author
 * @version 1.0.0
 */

import React from 'react';
import { NavigationItem } from '../molecules';

/**
 * Props interface for OptionsAccordion organism component
 * @interface OptionsAccordionProps
 */
interface OptionsAccordionProps {
  /**
   * Boolean state controlling accordion visibility
   * Controla si el acordeón está desplegado o contraído
   */
  isOpen: boolean;
  /**
   * Callback function to close the accordion
   * Función para cerrar el acordeón (por backdrop o después de selección)
   */
  onClose: () => void;
  /**
   * Callback function to open specific modals
   * Recibe la clave del modal a abrir tras seleccionar opción
   * @param modalKey - Key identifier for the modal to open
   */
  onModalOpen: (modalKey: string) => void;
}

/**
 * OptionsAccordion Organism Component
 * 
 * Acordeón expandible que proporciona acceso rápido a las principales secciones
 * del tour virtual. Se despliega desde la parte inferior y incluye backdrop
 * semi-transparente para focus modal y cierre intuitivo.
 * 
 * Key Features:
 * - Expandible desde footer con animación suave
 * - Backdrop semi-transparente para focus modal  
 * - Auto-cierre después de seleccionar opción
 * - Prevención de propagación de eventos
 * - Accesibilidad completa con roles y estados ARIA
 * - Interfaz compacta con NavigationItems estilo thumbnail
 * 
 * User Experience:
 * - Click en backdrop cierra el acordeón
 * - Seleccionar opción abre modal y cierra acordeón
 * - Transiciones suaves para entrada/salida
 * - Organización clara de opciones principales
 * 
 * Design Pattern: Atomic Design Organism
 * - Combina múltiples NavigationItem molecules
 * - Maneja comportamiento modal complejo
 * - Interfaz alternativa para acceso rápido
 * 
 * @param props - OptionsAccordionProps interface
 * @returns JSX.Element representing the expandable options accordion
 * 
 * @example
 * ```tsx
 * <OptionsAccordion 
 *   isOpen={showOptions}
 *   onClose={() => setShowOptions(false)}
 *   onModalOpen={(key) => openModal(key)}
 * />
 * ```
 */
const OptionsAccordion: React.FC<OptionsAccordionProps> = ({
  isOpen,
  onClose,
  onModalOpen
}) => {
  const handleOptionClick = (modalKey: string) => {
    onModalOpen(modalKey);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="options-backdrop"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Accordion */}
      <div
        aria-hidden={!isOpen}
        className={`options-accordion ${isOpen ? 'open' : ''}`}
        role="region"
        aria-label="Opciones rápidas"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="options-inner">
          <NavigationItem
            iconName="info"
            label="Características"
            onClick={() => handleOptionClick('caracteristicas')}
            className="thumb"
          />

          <NavigationItem
            iconName="plantas"
            label="Plantas"
            onClick={() => handleOptionClick('plantas')}
            className="thumb"
          />

          <NavigationItem
            iconName="location"
            label="Ubicación"
            onClick={() => handleOptionClick('ubicacion')}
            className="thumb"
          />

          <NavigationItem
            iconName="houses"
            label="Otros Modelos"
            onClick={() => handleOptionClick('modelos')}
            className="thumb"
          />
        </div>
      </div>
    </>
  );
};

export default OptionsAccordion;