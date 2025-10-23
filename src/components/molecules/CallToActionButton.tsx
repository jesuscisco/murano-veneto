/**
 * @fileoverview CallToActionButton Molecule - Botón de llamada a la acción
 * 
 * ATOMIC DESIGN - MOLECULE
 * Combina Button + Icon + Text para crear botones de acción prominentes.
 * Usado para acciones principales como "Agenda tu Visita".
 * 
 * @author Virtual Tour 360°
 * @version 1.0.0
 */

import React from 'react';
import { Button, Icon } from '../atoms';

/**
 * Props del componente CallToActionButton
 * 
 * @interface CallToActionButtonProps
 */
interface CallToActionButtonProps {
  /** Función que se ejecuta al hacer click */
  onClick: () => void;
  /** Nombre del icono opcional (por defecto "calendar") */
  iconName?: string;
  /** Texto del botón */
  text: string;
  /** Clases CSS adicionales */
  className?: string;
  /** Etiqueta accesible para lectores de pantalla */
  'aria-label'?: string;
}

/**
 * CallToActionButton Molecule
 * 
 * Botón especializado para llamadas a la acción (CTA). Combina un icono con texto
 * en un botón visualmente prominente. Es la molécula principal para acciones
 * importantes como contacto, agendado de visitas, etc.
 * 
 * Composición:
 * - Button (Atom): Contenedor clickeable base
 * - Icon (Atom): Icono representativo opcional
 * - Text (HTML): Texto descriptivo de la acción
 * 
 * Características:
 * - Styling prominente para destacar
 * - Icono opcional con margen automático
 * - Texto centrado y legible
 * - Accesibilidad completa
 * 
 * Casos de uso:
 * - Botón "Agenda tu Visita" en desktop
 * - Botón "Agenda tu Visita" en móvil
 * - Futuras CTAs importantes
 * 
 * @example
 * // CTA básico con icono por defecto
 * <CallToActionButton
 *   text="Agenda tu Visita"
 *   onClick={() => openWhatsApp()}
 * />
 * 
 * @example  
 * // CTA personalizado
 * <CallToActionButton
 *   text="Contactar"
 *   iconName="phone"
 *   onClick={() => handleContact()}
 *   className="btn-contact"
 *   aria-label="Contactar por teléfono"
 * />
 * 
 * @param {CallToActionButtonProps} props - Las props del componente
 * @returns {JSX.Element} Button con Icon y texto
 */
const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  onClick,
  iconName = "calendar",
  text,
  className = "footer-btn visit",
  ...props
}) => {
  return (
    <Button 
      className={className}
      onClick={onClick}
      {...props}
    >
      {iconName && (
        <Icon 
          name={iconName} 
          className="menu-icon small calendar-icon" 
          style={{ marginRight: 8 }} 
        />
      )}
      <span>{text}</span>
    </Button>
  );
};

export default CallToActionButton;