# INTEGRACIÓN DEL TOUR VIRTUAL 360° EN WIX

## DESCRIPCIÓN DEL PROYECTO
Este es un tour virtual 360° del área de Murano-Veneto desarrollado en Next.js con funcionalidades interactivas, hotspots y navegación inmersiva.

## MÉTODOS DE INTEGRACIÓN EN WIX

### MÉTODO 1: IFRAME EMBED (RECOMENDADO)
Este es el método más sencillo y confiable para integrar el tour en Wix.

#### Paso 1: Desplegar el proyecto
1. Subir el proyecto a un servicio de hosting:
   - **Vercel** (recomendado para Next.js):
     * Conectar tu repositorio GitHub
     * Despliegue automático desde: https://github.com/jesuscisco/murano-veneto.git
   - **Netlify**:
     * Conectar repositorio y configurar build
   - **Heroku**:
     * Usar buildpack de Node.js

#### Paso 2: Configurar en Wix
1. En el editor de Wix, agregar elemento "HTML Embed" o "Custom Code"
2. Insertar el siguiente código iframe:

```html
<iframe 
    src="TU_URL_DE_DESPLIEGUE" 
    width="100%" 
    height="600" 
    frameborder="0" 
    allowfullscreen
    style="border: none; border-radius: 8px;">
</iframe>
```

#### Paso 3: Ajustar dimensiones
- Altura recomendada: 600px - 800px
- Ancho: 100% para responsive
- Configurar "Fit to container" en Wix

### MÉTODO 2: CUSTOM HTML WIDGET
Para mayor control sobre la integración.

#### Configuración:
1. En Wix, agregar "HTML Component"
2. Configurar como "External URL"
3. Apuntar a tu URL desplegada
4. Configurar parámetros de responsive

### MÉTODO 3: WIX VELO (PARA DESARROLLADORES)
Si tienes conocimientos de JavaScript en Wix.

```javascript
// En Wix Velo
$w.onReady(function () {
    $w("#htmlComponent1").src = "TU_URL_DE_DESPLIEGUE";
});
```

## CONFIGURACIONES RECOMENDADAS

### Para el proyecto Next.js:
1. **Configurar CORS** en `next.config.js`:
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}
```

2. **Optimizar para iframe**:
   - Eliminar headers que bloqueen iframes
   - Configurar viewport responsive
   - Optimizar carga de imágenes

### Para Wix:
1. **Configuración del iframe**:
   - Habilitar "Allow scripts"
   - Configurar "Sandbox permissions"
   - Establecer "Loading priority" como alta

2. **Responsive Design**:
   - Usar porcentajes en lugar de píxeles fijos
   - Configurar breakpoints móviles
   - Testear en diferentes dispositivos

## SERVICIOS DE HOSTING RECOMENDADOS

### VERCEL (Gratis - Recomendado)
- **Ventajas**: Optimizado para Next.js, SSL automático, CDN global
- **Proceso**:
  1. Crear cuenta en vercel.com
  2. Conectar repositorio GitHub
  3. Deploy automático
  4. Obtener URL: https://tu-proyecto.vercel.app

### NETLIFY (Gratis)
- **Ventajas**: Fácil configuración, funciones serverless
- **Configuración**:
  - Build command: `npm run build`
  - Publish directory: `.next`

### HEROKU (Gratis con limitaciones)
- **Configuración**:
  - Crear Procfile: `web: npm start`
  - Variables de entorno según necesidad

## OPTIMIZACIONES ESPECÍFICAS PARA WIX

### 1. Performance
```javascript
// Lazy loading de panoramas
export const panoramaConfig = {
  lazyLoad: true,
  preloadRadius: 1,
  compressionQuality: 0.8
}
```

### 2. Mobile Responsive
```css
/* CSS adicional para móviles en Wix */
@media (max-width: 768px) {
  .tour-container {
    height: 400px !important;
  }
}
```

### 3. Touch Controls
- Ya implementado en `useTouchControls.ts`
- Compatible con dispositivos táctiles
- Gestos de pan y zoom optimizados

## PASOS DETALLADOS DE IMPLEMENTACIÓN

### PASO 1: Preparar el proyecto
```bash
# Instalar dependencias
npm install

# Construir para producción
npm run build

# Testear localmente
npm start
```

### PASO 2: Desplegar
1. Hacer push al repositorio GitHub
2. Conectar con Vercel/Netlify
3. Configurar variables de entorno si es necesario
4. Obtener URL de producción

### PASO 3: Integrar en Wix
1. Abrir editor de Wix
2. Agregar elemento HTML/iframe
3. Configurar URL del tour
4. Ajustar dimensiones y estilo
5. Publicar sitio

### PASO 4: Testear
- Verificar carga en diferentes dispositivos
- Testear controles táctiles
- Comprobar responsive design
- Validar performance

## SOLUCIÓN DE PROBLEMAS COMUNES

### Error de CORS:
- Configurar headers correctos en Next.js
- Verificar políticas de iframe en Wix

### No carga en móvil:
- Verificar viewport meta tag
- Ajustar height del iframe
- Comprobar touch controls

### Performance lenta:
- Optimizar imágenes panorámicas
- Implementar lazy loading
- Usar formato WebP para imágenes

### Iframe no visible:
- Verificar X-Frame-Options
- Configurar Content Security Policy
- Revisar dimensiones del contenedor

## ESTRUCTURA DEL PROYECTO
```
src/
├── components/          # Componentes React
├── data/               # Datos de panoramas y hotspots
├── hooks/              # Hooks personalizados
├── pages/              # Páginas Next.js
├── styles/             # Estilos CSS
├── types/              # Tipos TypeScript
└── utils/              # Utilidades

public/
└── panoramas/          # Imágenes 360°
```

## CONTACTO Y SOPORTE
Para dudas específicas sobre la integración:
- Revisar documentación de Wix sobre HTML embeds
- Consultar logs de despliegue en Vercel/Netlify
- Verificar consola del navegador para errores

## URLS IMPORTANTES
- Repositorio: https://github.com/jesuscisco/murano-veneto.git
- Documentación Next.js: https://nextjs.org/docs
- Documentación Wix Velo: https://www.wix.com/velo/reference
- Vercel Deploy: https://vercel.com/docs

---
Fecha de creación: 22 de Octubre, 2025
Proyecto: Tour Virtual 360° Murano-Veneto