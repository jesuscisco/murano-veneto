/**
 * @fileoverview Sidebar organism component
 * Organismo de navegación lateral que agrupa múltiples NavigationItem
 * para proporcionar acceso a diferentes secciones modales del tour.
 * 
 * Implements Atomic Design Organisms pattern:
 * - Combina múltiples moléculas NavigationItem
 * - Proporciona estructura de navegación cohesiva
 * - Maneja la interfaz para abrir diferentes modales
 * 
 * @author
 * @version 1.0.0
 */

import React from 'react';
import { NavigationItem } from '../molecules';

/**
 * Props interface for Sidebar organism component
 * @interface SidebarProps
 */
interface SidebarProps {
  /**
   * Callback function to handle modal opening
   * Recibe la clave del modal a abrir ('modelos', 'plantas', 'ubicacion', 'info')
   * @param modalKey - Key identifier for the modal to open
   * @example
   * onModalOpen('modelos') // Opens models modal
   * onModalOpen('plantas') // Opens floor plans modal
   */
  onModalOpen: (modalKey: string) => void;
}

/**
 * Sidebar Organism Component
 * 
 * Barra lateral de navegación que contiene múltiples NavigationItem molecules
 * organizados verticalmente para acceder a diferentes secciones del tour virtual.
 * 
 * Key Features:
 * - Navegación vertical con items distribuidos uniformemente
 * - Accesibilidad completa con ARIA labels y roles
 * - Integración con sistema de modales del tour
 * - Estructura semántica con aside y nav
 * 
 * Design Pattern: Atomic Design Organism
 * - Combina múltiples NavigationItem molecules
 * - Proporciona comportamiento cohesivo de navegación
 * - Interfaz consistente para interacciones de usuario
 * 
 * @param props - SidebarProps interface
 * @returns JSX.Element representing the sidebar navigation
 * 
 * @example
 * ```tsx
 * <Sidebar 
 *   onModalOpen={(modalKey) => setActiveModal(modalKey)}
 * />
 * ```
 */
const Sidebar: React.FC<SidebarProps> = ({ onModalOpen }) => {
  return (
    <aside className="sidebar" role="navigation" aria-label="Opciones">
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <NavigationItem
          iconName="houses"
          label="Modelos"
          onClick={() => onModalOpen('modelos')}
          aria-label="Modelos"
          title="Modelos"
        />
        
        <NavigationItem
          iconName="plantas"
          label="Plantas"
          onClick={() => onModalOpen('plantas')}
          aria-label="Plantas"
          title="Plantas"
        />
        
        <NavigationItem
          iconName="location"
          label="Ubicación"
          onClick={() => onModalOpen('ubicacion')}
          aria-label="Ubicación"
          title="Ubicación"
        />
        
        <NavigationItem
          iconName="info"
          label="Info"
          onClick={() => onModalOpen('info')}
          aria-label="Info"
          title="Info"
        />
      </nav>
    </aside>
  );
};

export default Sidebar;