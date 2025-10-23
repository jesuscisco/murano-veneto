/**
 * @fileoverview Next.js App Component
 * Componente raíz de la aplicación Next.js que envuelve todas las páginas.
 * Maneja la configuración global, estilos CSS y propiedades compartidas.
 * 
 * Next.js App Configuration:
 * - Punto de entrada para toda la aplicación
 * - Importación de estilos globales
 * - Configuración compartida entre páginas
 * - Wrapper para proveedores globales si fuera necesario
 * 
 * @author
 * @version 1.0.0
 */

import type { AppProps } from 'next/app';
import '../styles/layout.css'; // Import global styles for entire application

/**
 * Next.js App Component
 * 
 * Componente principal que envuelve todas las páginas de la aplicación.
 * Responsible for:
 * - Loading global CSS styles
 * - Providing application-wide configuration
 * - Maintaining state that persists between page navigations
 * - Setting up global providers (if needed)
 * 
 * Key Features:
 * - Global CSS import for consistent styling
 * - Simple pass-through to page components
 * - Foundation for application-wide functionality
 * - Standard Next.js App pattern implementation
 * 
 * Global Styles:
 * - layout.css: Contains all component styles and responsive design
 * - Atomic Design CSS organization
 * - Three.js and tour-specific styling
 * - Mobile and desktop optimizations
 * 
 * Future Extensions:
 * - Global state providers (Context, Redux, etc.)
 * - Error boundaries for robust error handling
 * - Analytics integration
 * - Progressive Web App configuration
 * - Theme providers for dark/light mode
 * 
 * @param props - Standard Next.js AppProps
 * @param props.Component - The active page component
 * @param props.pageProps - Props passed to the page component
 * @returns JSX.Element representing the wrapped page component
 * 
 * @example
 * This component automatically wraps every page:
 * - /pages/index.tsx becomes <App Component={Home} pageProps={...} />
 * - /pages/about.tsx becomes <App Component={About} pageProps={...} />
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}