/**
 * @fileoverview Label Atom - Componente de etiquetas de texto
 * 
 * ATOMIC DESIGN - ATOM
 * Elemento básico para mostrar etiquetas de texto consistentes.
 * Usado principalmente en navegación y formularios.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props del componente Label
 * 
 * @interface LabelProps
 */
interface LabelProps {
  /** Contenido de la etiqueta (texto o elementos) */
  children: React.ReactNode;
  /** Clases CSS para styling de la etiqueta */
  className?: string;
  /** ID del elemento asociado (para accesibilidad) */
  htmlFor?: string;
}

/**
 * Label Atom
 * 
 * Componente básico para mostrar etiquetas de texto. Proporciona una base
 * consistente para todos los textos de etiquetas en el sistema. Es especialmente
 * útil en navegación donde se combinan iconos con texto descriptivo.
 * 
 * @example
 * // Etiqueta básica
 * <Label>Modelos</Label>
 * 
 * @example
 * // Etiqueta con clase personalizada
 * <Label className="custom-label">Ubicación</Label>
 * 
 * @example
 * // Etiqueta asociada a un input
 * <Label htmlFor="search-input">Buscar</Label>
 * 
 * @param {LabelProps} props - Las props del componente
 * @returns {JSX.Element} Elemento div con el texto de la etiqueta
 */
const Label: React.FC<LabelProps> = ({ 
  children, 
  className = "thumb-label", 
  htmlFor 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Label;