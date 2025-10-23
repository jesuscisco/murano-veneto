# 🏛️ Virtual Tour 360° Murano-Veneto

Un tour virtual inmersivo en 360° desarrollado con **Next.js** y **Three.js**, siguiendo la metodología **Atomic Design** para una arquitectura escalable y mantenible.

## ✨ Características Principales

- **🌐 Vistas 360°**: Panoramas inmersivos de alta calidad con navegación fluida
- **🎯 Hotspots Interactivos**: Puntos clicables para navegar entre habitaciones
- **📱 Diseño Responsive**: Sidebar en desktop, footer en móvil
- **🔄 Auto-rotación**: Rotación automática cuando no hay interacción
- **⚡ Optimizado**: Carga rápida con caché de imágenes y lazy loading
- **🎨 UI/UX Moderna**: Interfaz translúcida sobre panoramas 3D
- **🏗️ Atomic Design**: Arquitectura de componentes escalable

## 🏗️ Arquitectura Atomic Design

Este proyecto implementa la metodología **Atomic Design** de Brad Frost:

```
src/components/
├── atoms/          # Elementos básicos indivisibles
├── molecules/      # Combinaciones de átomos
├── organisms/      # Secciones complejas de UI
└── templates/      # Layouts y estructura de página
```

### ⚛️ **ATOMS** - Elementos Básicos
Los componentes más pequeños e indivisibles de la UI:

- **`Button.tsx`**: Botón base reutilizable con props configurables
- **`Icon.tsx`**: Componente de iconos SVG con soporte para estilos
- **`Label.tsx`**: Etiquetas de texto reutilizables
- **`Logo.tsx`**: Logo del sitio con rutas dinámicas

### 🧬 **MOLECULES** - Combinaciones Funcionales
Grupos de átomos que forman unidades funcionales:

- **`NavigationItem.tsx`**: Botón de navegación (Icon + Label + Button)
- **`CallToActionButton.tsx`**: Botón CTA con ícono y texto
- **`OptionsToggle.tsx`**: Toggle especializado para opciones móviles

### 🦠 **ORGANISMS** - Secciones Complejas
Componentes de UI complejos que forman secciones distintivas:

- **`Sidebar.tsx`**: Navegación principal para desktop
- **`FooterBar.tsx`**: Barra de navegación móvil
- **`OptionsAccordion.tsx`**: Menú expandible para móviles
- **`Modal.tsx`**: Sistema de modales con backdrop
- **`TourViewer.tsx`**: Visor 3D principal con Three.js
- **`Hotspot.tsx`**: Puntos interactivos en el espacio 3D

### 🏗️ **TEMPLATES** - Layouts de Página
Plantillas que organizan los organismos en layouts:

- **`TourTemplate.tsx`**: Layout principal que orquesta toda la experiencia

## 📁 Estructura del Proyecto

```
virtual-tour-360-veneto/
├── src/
│   ├── components/         # Componentes siguiendo Atomic Design
│   │   ├── atoms/         # Elementos básicos (Button, Icon, Logo)
│   │   ├── molecules/     # Combinaciones (NavigationItem, CTA)
│   │   ├── organisms/     # Secciones (Sidebar, Modal, TourViewer)
│   │   └── templates/     # Layouts (TourTemplate)
│   ├── data/              # Datos de panoramas y hotspots
│   │   ├── panoramas.ts   # Configuración de panoramas 360°
│   │   └── hotspots.ts    # Definición de puntos interactivos
│   ├── pages/             # Páginas Next.js
│   │   ├── _app.tsx       # App wrapper con estilos globales
│   │   ├── _document.tsx  # Document head y estructura HTML
│   │   └── index.tsx      # Página principal del tour
│   ├── styles/            # Archivos de estilos
│   │   ├── globals.css    # Estilos globales básicos
│   │   └── layout.css     # Estilos del layout y componentes
│   └── utils/             # Utilidades
│       └── panoramaCache.ts # Caché de imágenes optimizado
├── public/                # Assets estáticos
│   ├── panoramas/         # Imágenes 360° (.png)
│   ├── icons/             # Iconos SVG
│   └── modals/            # Imágenes para modales
└── config files           # Configuración del proyecto
```

## 🎯 Funcionalidades Específicas

### **Navigation System**
- **Desktop**: Sidebar fijo en la esquina izquierda
- **Mobile**: Footer bar con botón de opciones expandible
- **Modales**: Sistema de overlays para información adicional

### **3D Tour Engine**
- **Three.js**: Renderizado de panoramas esféricos
- **OrbitControls**: Navegación fluida con mouse/touch
- **Hotspots**: Puntos 3D interactivos con animaciones
- **Auto-rotate**: Rotación automática con detección de interacción

### **Performance Optimizations**
- **Image Caching**: Sistema de caché inteligente para panoramas
- **Lazy Loading**: Carga bajo demanda de recursos
- **WebGL Optimization**: Configuración optimizada para rendimiento
- **Static Export**: Build estático para máximo rendimiento

## 🚀 Getting Started

### **Prerequisitos**
- Node.js 18+ 
- npm o yarn
- Navegador moderno con soporte WebGL

### **Instalación**

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jesuscisco/murano-veneto.git
   cd virtual-tour-360-veneto
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador:**
   ```
   http://localhost:3000
   ```

### **Scripts Disponibles**

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build optimizado para producción
npm start        # Ejecutar build de producción
npm run lint     # Linter de código
```

## 🛠️ Tecnologías Utilizadas

### **Core Technologies**
- **Next.js 15**: Framework React con SSG
- **React 18**: Biblioteca de UI con hooks
- **TypeScript**: Tipado estático
- **Three.js**: Motor 3D para WebGL

### **3D & Graphics**
- **@react-three/fiber**: React renderer para Three.js
- **@react-three/drei**: Utilidades para R3F
- **OrbitControls**: Navegación 3D
- **WebGL**: Renderizado acelerado por hardware

### **Styling & UI**
- **Tailwind CSS**: Framework de utilidades CSS
- **PostCSS**: Procesador de CSS
- **CSS Modules**: Estilos con scope

### **Development Tools**
- **ESLint**: Linting de código
- **Autoprefixer**: Prefijos CSS automáticos
- **Sharp**: Optimización de imágenes

## 📖 Guía de Desarrollo

### **Agregar Nuevos Panoramas**
1. Colocar imagen 360° en `public/panoramas/`
2. Actualizar `src/data/panoramas.ts` con configuración
3. Actualizar `src/data/hotspots.ts` con puntos interactivos

### **Crear Nuevos Componentes**
Sigue la metodología Atomic Design:
1. **Atom**: Si es un elemento básico indivisible
2. **Molecule**: Si combina varios átomos
3. **Organism**: Si es una sección compleja de UI
4. **Template**: Si es un layout completo

### **Optimización de Performance**
- Las imágenes 360° deben ser 4096x2048px máximo
- Usar formato WebP cuando sea posible
- Implementar lazy loading para recursos pesados

## 🔧 Configuración

### **Variables de Entorno**
```bash
NEXT_PUBLIC_BASE_PATH=""          # Ruta base para deployment
NEXT_PUBLIC_ASSET_VERSION=""      # Versión de assets para cache busting
```

### **Build para Producción**
```bash
npm run build
```
Genera build estático optimizado en carpeta `out/`

### **Deployment**
El proyecto está configurado para export estático, compatible con:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Cualquier hosting estático

## 🏛️ Metodología Atomic Design

### **Principios Implementados**
1. **Modularidad**: Cada componente tiene una responsabilidad específica
2. **Reutilización**: Los átomos se reutilizan en múltiples moléculas
3. **Escalabilidad**: Fácil agregar nuevas funcionalidades
4. **Mantenibilidad**: Código organizado y documentado
5. **Testing**: Componentes aislados facilitan el testing

### **Flujo de Desarrollo**
```
Atoms → Molecules → Organisms → Templates → Pages
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

### **Convenciones de Código**
- Usar TypeScript para tipado fuerte
- Seguir estructura Atomic Design
- Documentar componentes con JSDoc
- Mantener componentes pequeños y enfocados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🔗 Enlaces

- **Repositorio**: https://github.com/jesuscisco/murano-veneto
- **Demo Live**: [URL del demo]
- **Documentación Three.js**: https://threejs.org/docs/
- **Atomic Design**: https://bradfrost.com/blog/post/atomic-web-design/

---

Desarrollado con ❤️ para experiencias inmersivas en Real Estate