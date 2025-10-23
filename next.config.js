/**
 * @fileoverview Next.js Configuration
 * Configuración de Next.js optimizada para exportación estática y deployment flexible.
 * Soporte para hosting en subdirectorios, versionado de assets y optimizaciones de producción.
 * 
 * Build Configuration:
 * - Static export para hosting en cualquier servidor web
 * - Soporte para rutas base configurables (subdirectorios)
 * - Versionado de assets para cache busting
 * - Optimizaciones para tour virtual 360°
 * 
 * @author
 * @version 1.0.0
 */

/**
 * Base path configuration for flexible deployment
 * Configuración de ruta base para deployment flexible
 * 
 * Environment Variables:
 * - BASE_PATH: Subdirectory path for deployment (e.g., "/tour", "/demo")
 * - ASSET_VERSION: Version string for cache busting
 * 
 * Usage Examples:
 * - Development: BASE_PATH="" (root deployment)
 * - Production: BASE_PATH="/murano-veneto" (subdirectory deployment)
 * - CDN: BASE_PATH="https://cdn.domain.com/tour" (external hosting)
 */
const BASE_PATH = process.env.BASE_PATH || '';

/**
 * Next.js Configuration Object
 * 
 * Key Features:
 * - Static Export: Generates static HTML/CSS/JS for any web server
 * - Flexible Base Path: Supports deployment in subdirectories
 * - Asset Versioning: Cache busting for updated assets
 * - Image Optimization: Configured for external domains
 * - Redirect Support: For legacy URL handling
 * 
 * Static Export Benefits:
 * - Deploy to any web server (Apache, Nginx, S3, etc.)
 * - No server-side rendering required
 * - Optimal performance for virtual tours
 * - Easy CDN integration
 * - Lower hosting costs
 * 
 * Configuration Details:
 * - reactStrictMode: Enhanced development warnings
 * - output: 'export' enables static generation
 * - basePath/assetPrefix: Handle subdirectory deployment
 * - env: Expose configuration to client-side code
 */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: BASE_PATH || undefined,
  assetPrefix: BASE_PATH || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
    // Bump this to force-refresh assets when filenames don't change
    NEXT_PUBLIC_ASSET_VERSION: process.env.ASSET_VERSION || '',
  },
  images: {
    domains: ['your-image-domain.com'], // Replace with your image domain if needed
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },
};