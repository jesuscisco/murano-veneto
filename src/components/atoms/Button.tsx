/**
 * @fileoverview Button Atom - Componente de botón base reutilizable
 * 
 * ATOMIC DESIGN - ATOM
 * Este es el elemento más básico de botón en el sistema de diseño.
 * Proporciona una base consistente para todos los botones del proyecto.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props del componente Button
 * 
 * @interface ButtonProps
 */
interface ButtonProps {
  /** Función que se ejecuta al hacer click */
  onClick?: () => void;
  /** Contenido del botón (texto, iconos, otros componentes) */
  children: React.ReactNode;
  /** Clases CSS adicionales para styling */
  className?: string;
  /** Estado deshabilitado del botón */
  disabled?: boolean;
  /** Etiqueta accesible para lectores de pantalla */
  'aria-label'?: string;
  /** Tooltip que aparece al hacer hover */
  title?: string;
  /** Tipo de botón HTML */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button Atom
 * 
 * Componente básico de botón que sirve como fundación para todos los botones
 * del sistema. Incluye soporte completo para accesibilidad y diferentes estados.
 * 
 * @example
 * // Botón básico
 * <Button onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * 
 * @example
 * // Botón con clases personalizadas
 * <Button className="btn-primary" aria-label="Save document">
 *   Save
 * </Button>
 * 
 * @param {ButtonProps} props - Las props del componente
 * @returns {JSX.Element} Elemento button HTML con props aplicadas
 */
const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;