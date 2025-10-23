/**
 * @fileoverview Icon Atom - Componente de iconos SVG reutilizable
 * 
 * ATOMIC DESIGN - ATOM
 * Elemento básico para mostrar iconos SVG desde la carpeta public/icons.
 * Maneja automáticamente las rutas base y versionado de assets.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props del componente Icon
 * 
 * @interface IconProps
 */
interface IconProps {
  /** Nombre del archivo de icono (sin extensión .svg) */
  name: string;
  /** Clases CSS para styling del icono */
  className?: string;
  /** Texto alternativo para accesibilidad */
  alt?: string;
  /** Estilos CSS inline opcionales */
  style?: React.CSSProperties;
}

/**
 * Icon Atom
 * 
 * Componente básico para mostrar iconos SVG del sistema. Maneja automáticamente
 * las rutas base del proyecto y el cache busting de assets. Es la base para
 * todos los iconos utilizados en la aplicación.
 * 
 * Iconos disponibles en public/icons/:
 * - houses.svg (modelos de casas)
 * - plantas.svg (plantas/planos)
 * - location.svg (ubicación)
 * - info.svg (información)
 * - calendar.svg (agenda)
 * - menu.svg (menú hamburguesa)
 * 
 * @example
 * // Icono básico
 * <Icon name="info" alt="Information" />
 * 
 * @example
 * // Icono con estilos personalizados
 * <Icon 
 *   name="calendar" 
 *   className="menu-icon small" 
 *   style={{ marginRight: 8 }} 
 * />
 * 
 * @param {IconProps} props - Las props del componente
 * @returns {JSX.Element} Elemento img con el icono SVG
 */
const Icon: React.FC<IconProps> = ({ 
  name, 
  className = "menu-icon", 
  alt = "",
  style
}) => {
  // Manejo automático de rutas base y versionado de assets
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const v = process.env.NEXT_PUBLIC_ASSET_VERSION || '';
  const ver = v ? `?v=${encodeURIComponent(v)}` : '';

  return (
    <img 
      src={`${base}/icons/${name}.svg${ver}`} 
      alt={alt} 
      className={className} 
      style={style}
    />
  );
};

export default Icon;