/**
 * @fileoverview Home Page - Tour Virtual Murano Veneto
 * Página principal que implementa el tour virtual 360° completo usando TourTemplate.
 * Maneja la navegación entre panoramas, modales informativos y acciones del usuario.
 * 
 * Next.js Page Implementation:
 * - Página raíz de la aplicación (/)
 * - Gestión completa de estado del tour virtual
 * - Integración con WhatsApp para contacto
 * - Soporte para múltiples modalidades de información
 * 
 * @author
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { TourTemplate } from '../components/templates';
import HOTSPOTS_MAP from '../data/hotspots';

/**
 * Type definition for modal keys
 * Define los tipos de modales disponibles en la aplicación
 */
type ModalKey = 'modelos' | 'info' | 'plantas' | 'ubicacion' | 'caracteristicas' | null;

/**
 * Modal configuration mapping
 * Configuración de todos los modales disponibles con títulos y rutas de imágenes
 * 
 * @const MODAL_MAP
 * @type {Record<Exclude<ModalKey, null>, { title: string; src: string }>}
 */
const MODAL_MAP: Record<Exclude<ModalKey, null>, { title: string; src: string }> = {
  modelos: { title: 'Modelos', src: '/modals/modelos.png' },
  info: { title: 'Información', src: '/modals/caracteristicas.png' },
  plantas: { title: 'Plantas', src: '/modals/plantas.png' },
  ubicacion: { title: 'Ubicación', src: '/modals/ubicacion.png' },
  caracteristicas: { title: 'Características', src: '/modals/caracteristicas.png' },
};

/**
 * Home Page Component - Tour Virtual Murano Veneto
 * 
 * Página principal que implementa la experiencia completa del tour virtual.
 * Gestiona la navegación entre diferentes panoramas a través de hotspots,
 * el sistema de modales informativos, y las acciones del usuario como
 * contacto vía WhatsApp.
 * 
 * Key Features:
 * - Tour virtual 360° con navegación entre panoramas
 * - Sistema de hotspots interactivos para navegación
 * - Modales informativos (modelos, plantas, ubicación, características)
 * - Integración con WhatsApp para contacto directo
 * - Gestión de estado de UI (modales, opciones, navegación)
 * - Soporte responsive para desktop y mobile
 * 
 * State Management:
 * - current: Panorama actualmente mostrado
 * - openModal: Modal actualmente abierto (si existe)
 * - openOptionsModal: Estado del acordeón de opciones (mobile)
 * 
 * Navigation Logic:
 * - Hotspots definidos en data/hotspots.ts por panorama
 * - Click en hotspot actualiza panorama actual
 * - Transiciones suaves manejadas por TourViewer
 * 
 * Modal System:
 * - Configuración centralizada en MODAL_MAP
 * - Body class 'modal-open' para prevenir scroll
 * - Soporte para cierre por overlay o botón
 * 
 * External Integration:
 * - WhatsApp Business API para contacto directo
 * - Mensaje predefinido para facilitar comunicación
 * - Apertura en nueva ventana con configuración segura
 * 
 * @returns JSX.Element representing the home page with complete tour
 * 
 * @example
 * URL: https://yoursite.com/
 * Renders: Complete virtual tour with navigation and contact options
 */
export default function Home() {
  const [current, setCurrent] = useState('/panoramas/INICIO.png');
  const hotspots = HOTSPOTS_MAP[current] ?? [];
  const [openModal, setOpenModal] = useState<ModalKey>(null);
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  
  const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=526623619110&text=Hola%2C+estoy+interesado%2Fa+en+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0';
  
  const handleVisitClick = () => {
    if (typeof window !== 'undefined') {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  // Add global class while any modal is open
  useEffect(() => {
    const anyOpen = !!openModal || openOptionsModal;
    if (anyOpen) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
    return () => { document.body.classList.remove('modal-open'); };
  }, [openModal, openOptionsModal]);

  const handleHotspotClick = (id: string) => {
    const h = hotspots.find(x => x.id === id);
    if (!h) return;
    if (h.target) setCurrent(h.target);
  };

  const handleModalOpen = (modalKey: string) => {
    setOpenModal(modalKey as ModalKey);
  };

  return (
    <TourTemplate
      currentPanorama={current}
      hotspots={hotspots}
      onHotspotClick={handleHotspotClick}
      onModalOpen={handleModalOpen}
      onVisitClick={handleVisitClick}
      isOptionsOpen={openOptionsModal}
      onOptionsToggle={() => setOpenOptionsModal(v => !v)}
      openModal={openModal}
      onModalClose={() => setOpenModal(null)}
      modalConfig={MODAL_MAP}
      onOptionsClose={() => setOpenOptionsModal(false)}
    />
  );
}