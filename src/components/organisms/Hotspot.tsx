/**
 * @fileoverview Hotspot organism component
 * Organismo interactivo 3D que representa puntos de navegación dentro del tour virtual.
 * Maneja visibilidad basada en orientación de cámara, animaciones, y eventos de click.
 * 
 * Implements Atomic Design Organisms pattern:
 * - Componente 3D autónomo con lógica compleja de visibilidad
 * - Integra HTML overlay con posicionamiento 3D
 * - Maneja interacciones y estados visuales avanzados
 * 
 * @author
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { Html } from '@react-three/drei';
import { Object3D, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

/**
 * Hotspot Organism Component
 * 
 * Punto interactivo 3D que aparece dentro del panorama para permitir navegación
 * entre diferentes ubicaciones del tour. Se renderiza como overlay HTML posicionado
 * en espacio 3D con cálculos de visibilidad basados en la orientación de la cámara.
 * 
 * Key Features:
 * - Posicionamiento 3D preciso en coordenadas del mundo
 * - Cálculo dinámico de visibilidad basado en dot product cámara-hotspot
 * - Animaciones CSS suaves para aparición/desaparición
 * - Animación de pulso continua para llamar la atención
 * - Transiciones suaves de opacidad y transformación
 * - Eventos de click para navegación entre panoramas
 * 
 * Technical Implementation:
 * - useFrame hook para cálculos de visibilidad en cada frame
 * - Vector3 math para determinación de orientación relativa
 * - Html component de @react-three/drei para overlay 2D en 3D
 * - CSS keyframes para animaciones de pulso
 * - Threshold configurable para control de visibilidad
 * 
 * Visibility Logic:
 * - Calcula dirección de cámara y vector hacia hotspot
 * - Usa dot product para determinar si está en campo de visión
 * - Threshold de -0.35 permite visibilidad extendida
 * - Transiciones suaves previenen popping visual
 * 
 * Design Pattern: Atomic Design Organism
 * - Componente 3D especializado para navegación
 * - Maneja toda la lógica de visibilidad y interacción
 * - Interfaz autónoma para puntos de navegación
 * 
 * @param props - Hotspot configuration object
 * @param props.id - Unique identifier for the hotspot
 * @param props.position - 3D position Vector3 in world coordinates
 * @param props.label - Accessibility label for screen readers (default: 'Entrar')
 * @param props.camera - Three.js camera reference for visibility calculations
 * @param props.onClick - Callback function when hotspot is clicked
 * @returns JSX.Element representing the 3D hotspot
 * 
 * @example
 * ```tsx
 * <Hotspot 
 *   id="kitchen"
 *   position={new Vector3(150, 0, -200)}
 *   label="Ir a la Cocina"
 *   camera={camera}
 *   onClick={(id) => navigateToRoom(id)}
 * />
 * ```
 */
export default function Hotspot({
  id,
  position,
  label = 'Entrar',
  camera,
  onClick,
}: {
  id: string;
  position: Vector3;
  label?: string;
  camera: any;
  onClick?: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<Object3D | null>(null);
  const tempWorldPos = new Vector3();
  const threshold = -0.35; // visible más tiempo

  useFrame(() => {
    if (!camera || !ref.current || !anchorRef.current) return;
    anchorRef.current.getWorldPosition(tempWorldPos);
    const camDir = new Vector3();
    camera.getWorldDirection(camDir);
    const toHotspot = tempWorldPos.clone().sub(camera.position).normalize();
    const dot = camDir.dot(toHotspot);
    const visible = dot > threshold;
    ref.current.style.transition = 'opacity 200ms ease, transform 200ms ease';
    ref.current.style.opacity = visible ? '1' : '0';
    ref.current.style.pointerEvents = visible ? 'auto' : 'none';
    ref.current.style.transform = visible
      ? 'translateY(0px) scale(1)'
      : 'translateY(8px) scale(0.96)';
  });

  return (
    <group ref={anchorRef} position={[position.x, position.y, position.z]}>
      <Html center>
        <style>{`
          @keyframes hotspot-pulse {
            0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
            50%  { transform: scale(1.08); box-shadow: 0 10px 30px 6px rgba(0,0,0,0.18); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
          }
        `}</style>

        <div
          ref={ref}
          className="hotspot"
          onClick={() => onClick?.(id)}
          role="button"
          tabIndex={0}
          aria-label={label}
          style={{
            width: 68,
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1f1f1f',
            color: '#fff',
            borderRadius: '50%',
            border: '3px solid #fff',
            boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
            cursor: 'pointer',
            transformOrigin: 'center',
            opacity: 0,
            transition: 'opacity 180ms ease, transform 180ms ease',
            animation: 'hotspot-pulse 1600ms ease-in-out infinite',
            fontSize: 40,
            fontWeight: 700,
            userSelect: 'none',
          }}
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 24 24"
            aria-hidden
            focusable="false"
          >
            <path
              d="M6 15l6-6 6 6"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </Html>
    </group>
  );
}
