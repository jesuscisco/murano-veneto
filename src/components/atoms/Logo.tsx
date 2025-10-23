/**
 * @fileoverview Logo Atom - Componente del logo del sitio
 * 
 * ATOMIC DESIGN - ATOM
 * Elemento básico para mostrar el logo de la marca. Maneja automáticamente
 * las rutas y versionado de assets. Responsive por defecto.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props del componente Logo
 * 
 * @interface LogoProps
 */
interface LogoProps {
  /** Clases CSS para styling del logo */
  className?: string;
  /** Texto alternativo para accesibilidad */
  alt?: string;
}

/**
 * Logo Atom
 * 
 * Componente básico para mostrar el logo del sitio. Se posiciona por defecto
 * en la esquina superior derecha y es responsive. Maneja automáticamente las
 * rutas base y cache busting de assets.
 * 
 * Características:
 * - Posicionamiento fijo en esquina superior derecha
 * - Responsive: 104px altura en desktop, 60px en móvil
 * - Z-index alto para estar siempre visible
 * - Cache busting automático
 * 
 * @example
 * // Logo básico con estilos por defecto
 * <Logo />
 * 
 * @example
 * // Logo con clases personalizadas
 * <Logo className="custom-logo" alt="Murano Veneto Logo" />
 * 
 * @param {LogoProps} props - Las props del componente
 * @returns {JSX.Element} Elemento img con el logo del sitio
 */
const Logo: React.FC<LogoProps> = ({ 
  className = "site-logo", 
  alt = "Logo" 
}) => {
  // Manejo automático de rutas base y versionado de assets
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const v = process.env.NEXT_PUBLIC_ASSET_VERSION || '';
  const ver = v ? `?v=${encodeURIComponent(v)}` : '';

  return (
    <img 
      src={`${base}/logo.png${ver}`} 
      alt={alt} 
      className={className} 
    />
  );
};

export default Logo;