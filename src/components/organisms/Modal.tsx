/**
 * @fileoverview Modal organism component
 * Organismo de modal que muestra imágenes en overlay completo con
 * funcionalidad de cierre y manejo de eventos de teclado/click.
 * 
 * Implements Atomic Design Organisms pattern:
 * - Componente autónomo para mostrar contenido modal
 * - Maneja interacciones complejas de usuario
 * - Proporciona experiencia de visualización inmersiva
 * 
 * @author
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props interface for Modal organism component
 * @interface ModalProps
 */
interface ModalProps {
  /**
   * Boolean state controlling modal visibility
   * Controla si el modal está visible o no
   */
  isOpen: boolean;
  /**
   * Callback function to close the modal
   * Función para cerrar el modal cuando se hace click fuera o en botón cerrar
   */
  onClose: () => void;
  /**
   * Title for the modal content
   * Título descriptivo del contenido mostrado en el modal
   */
  title: string;
  /**
   * Source URL for the image to display
   * URL de la imagen que se mostrará en el modal
   */
  imageSrc: string;
}

/**
 * Modal Organism Component
 * 
 * Modal de overlay completo diseñado para mostrar imágenes de manera inmersiva.
 * Incluye funcionalidad de cierre por click fuera del contenido y manejo
 * de eventos para prevenir propagación cuando se hace click en la imagen.
 * 
 * Key Features:
 * - Overlay semi-transparente que cubre toda la pantalla
 * - Imagen centrada con tamaño responsivo
 * - Cierre por click en el overlay de fondo
 * - Prevención de cierre al hacer click en la imagen
 * - Accesibilidad completa con roles ARIA y modal
 * 
 * Design Pattern: Atomic Design Organism
 * - Componente autónomo que maneja toda la lógica modal
 * - No depende de otros átomos o moléculas
 * - Interfaz especializada para visualización de contenido
 * 
 * @param props - ModalProps interface
 * @returns JSX.Element | null - Modal component or null if not open
 * 
 * @example
 * ```tsx
 * <Modal 
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   title="Planos del Proyecto"
 *   imageSrc="/modals/plantas.jpg"
 * />
 * ```
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)',
        zIndex: 99999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default Modal;