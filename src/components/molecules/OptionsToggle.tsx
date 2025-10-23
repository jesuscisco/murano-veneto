/**
 * @fileoverview OptionsToggle Molecule - Toggle para menú de opciones móvil
 * 
 * ATOMIC DESIGN - MOLECULE
 * Combina Button + Icon para crear un toggle de menú hamburguesa.
 * Usado exclusivamente en la navegación móvil.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';
import { Button, Icon } from '../atoms';

/**
 * Props del componente OptionsToggle
 * 
 * @interface OptionsToggleProps
 */
interface OptionsToggleProps {
  /** Estado actual del toggle (abierto/cerrado) */
  isOpen: boolean;
  /** Función que se ejecuta al hacer click */
  onClick: () => void;
  /** Clases CSS adicionales */
  className?: string;
  /** Estado expandido para accesibilidad (se calcula automáticamente) */
  'aria-expanded'?: boolean;
  /** Etiqueta accesible para lectores de pantalla */
  'aria-label'?: string;
}

/**
 * OptionsToggle Molecule
 * 
 * Toggle especializado para abrir/cerrar el menú de opciones en dispositivos móviles.
 * Combina un botón base con el icono de menú hamburguesa, e incluye estados
 * visuales y de accesibilidad apropiados.
 * 
 * Composición:
 * - Button (Atom): Contenedor clickeable con estados
 * - Icon (Atom): Icono de menú hamburguesa
 * 
 * Características:
 * - Estados visuales (normal/activo)
 * - Accesibilidad completa con aria-expanded
 * - Animaciones CSS automáticas
 * - Solo visible en móvil
 * 
 * Estados:
 * - Cerrado: Apariencia normal
 * - Abierto: Clase "is-open" para animaciones
 * 
 * @example
 * // Toggle básico
 * <OptionsToggle
 *   isOpen={menuOpen}
 *   onClick={() => setMenuOpen(!menuOpen)}
 *   aria-label="Abrir menú de opciones"
 * />
 * 
 * @param {OptionsToggleProps} props - Las props del componente
 * @returns {JSX.Element} Button con Icon de menú
 */
const OptionsToggle: React.FC<OptionsToggleProps> = ({
  isOpen,
  onClick,
  className = "footer-btn options",
  ...props
}) => {
  // Clase dinámica basada en el estado
  const toggleClass = isOpen ? `${className} is-open` : className;

  return (
    <Button 
      className={toggleClass}
      onClick={onClick}
      aria-expanded={isOpen}
      {...props}
    >
      <Icon name="menu" alt="Opciones" className="menu-icon small" />
    </Button>
  );
};

export default OptionsToggle;