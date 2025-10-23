/**
 * @fileoverview Next.js Document Component
 * Componente que define la estructura HTML base de toda la aplicación.
 * Maneja metadatos, fuentes, favicon y configuración del documento HTML.
 * 
 * Next.js Document Configuration:
 * - Estructura HTML personalizada para toda la aplicación
 * - Configuración de metadatos y recursos externos
 * - Soporte para assets versionados
 * - Optimizaciones de rendimiento y SEO
 * 
 * @author
 * @version 1.0.0
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Next.js Document Component
 * 
 * Extiende el Document por defecto de Next.js para personalizar la estructura
 * HTML base de toda la aplicación. Incluye metadatos esenciales, fuentes,
 * favicon y configuración de assets versionados.
 * 
 * Key Features:
 * - HTML lang attribute para accesibilidad
 * - Meta tags esenciales (charset, viewport)
 * - Favicon con soporte para versionado de assets
 * - Google Fonts integration optimizada
 * - Environment-based asset path handling
 * 
 * Asset Versioning:
 * - NEXT_PUBLIC_BASE_PATH: Ruta base para deployment
 * - NEXT_PUBLIC_ASSET_VERSION: Versión para cache busting
 * - Aplicado automáticamente a todos los assets estáticos
 * 
 * Performance Optimizations:
 * - Google Fonts con display=swap para evitar FOIT
 * - Proper meta viewport para responsive design
 * - Favicon cacheado con versionado
 * 
 * SEO & Accessibility:
 * - Lang attribute en HTML para screen readers
 * - Proper charset specification
 * - Viewport meta for mobile optimization
 * 
 * Font Configuration:
 * - Roboto font family (400, 700 weights)
 * - Optimized loading with swap display
 * - Consistent typography across application
 * 
 * @returns JSX.Element representing the HTML document structure
 * 
 * @example
 * This Document is automatically used by Next.js for all pages:
 * ```html
 * <!DOCTYPE html>
 * <html lang="en">
 *   <head>
 *     <!-- Meta tags, favicon, fonts -->
 *   </head>
 *   <body>
 *     <!-- App content -->
 *   </body>
 * </html>
 * ```
 */
class MyDocument extends Document {
  render() {
    // Environment-based asset configuration
    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const v = process.env.NEXT_PUBLIC_ASSET_VERSION || '';
    const ver = v ? `?v=${encodeURIComponent(v)}` : '';
    
    return (
      <Html lang="en">
        <Head>
          {/* Essential meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* Favicon with versioning support */}
          <link rel="icon" href={`${base}/favicon.ico${ver}`} />
          
          {/* Google Fonts with display optimization */}
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;