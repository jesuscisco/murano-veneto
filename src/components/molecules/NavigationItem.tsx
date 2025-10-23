/**
 * @fileoverview NavigationItem Molecule - Ítem de navegación completo
 * 
 * ATOMIC DESIGN - MOLECULE
 * Combina Button + Icon + Label para crear un elemento de navegación cohesivo.
 * Usado en sidebar desktop y accordion móvil.
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';
import { Button, Icon, Label } from '../atoms';

/**
 * Props del componente NavigationItem
 * 
 * @interface NavigationItemProps
 */
interface NavigationItemProps {
  /** Nombre del icono a mostrar (debe existir en public/icons/) */
  iconName: string;
  /** Texto de la etiqueta */
  label: string;
  /** Función que se ejecuta al hacer click */
  onClick: () => void;
  /** Clases CSS adicionales */
  className?: string;
  /** Etiqueta accesible para lectores de pantalla */
  'aria-label'?: string;
  /** Tooltip que aparece al hacer hover */
  title?: string;
}

/**
 * NavigationItem Molecule
 * 
 * Elemento de navegación que combina un icono con una etiqueta de texto en un botón
 * clickeable. Es la unidad básica de navegación utilizada tanto en el sidebar de
 * desktop como en el menú acordeón móvil.
 * 
 * Composición:
 * - Button (Atom): Contenedor clickeable con accesibilidad
 * - Icon (Atom): Icono visual representativo
 * - Label (Atom): Texto descriptivo
 * 
 * Casos de uso:
 * - Elementos del sidebar principal
 * - Opciones del menú móvil
 * - Navegación entre secciones
 * 
 * @example
 * // Ítem de navegación básico
 * <NavigationItem
 *   iconName="info"
 *   label="Información"
 *   onClick={() => openModal('info')}
 * />
 * 
 * @example
 * // Con propiedades de accesibilidad
 * <NavigationItem
 *   iconName="location"
 *   label="Ubicación"
 *   onClick={() => openModal('ubicacion')}
 *   aria-label="Ver ubicación del proyecto"
 *   title="Mostrar mapa de ubicación"
 * />
 * 
 * @param {NavigationItemProps} props - Las props del componente
 * @returns {JSX.Element} Button conteniendo Icon y Label
 */
const NavigationItem: React.FC<NavigationItemProps> = ({
  iconName,
  label,
  onClick,
  className = "thumb",
  ...props
}) => {
  return (
    <Button 
      className={className}
      onClick={onClick}
      {...props}
    >
      <Icon name={iconName} />
      <Label>{label}</Label>
    </Button>
  );
};

export default NavigationItem;