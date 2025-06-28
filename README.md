# Erik Stor - Portfolio Profesional

Portfolio personal modernizado con Next.js y Material-UI, diseñado para entornos profesionales como LinkedIn.

## 🚀 Características

- **Next.js 14** - Metaframework de React con App Router
- **Material-UI v5** - Componentes modernos y accesibles
- **Diseño Responsivo** - Optimizado para todos los dispositivos
- **Tema Profesional** - Colores sobrios y tipografía clara
- **SEO Optimizado** - Metadatos y estructura semántica
- **Performance** - Optimización de imágenes y carga rápida

## 📋 Secciones

- **Inicio** - Presentación personal y navegación
- **Historia** - Trayectoria profesional y experiencia
- **Habilidades** - Tecnologías y herramientas dominadas
- **Proyectos** - Portfolio de trabajos realizados

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 18
- Next.js 14
- Material-UI v5
- Emotion (CSS-in-JS)

### Desarrollo
- ESLint
- Prettier
- TypeScript (opcional)

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd dotcomia-nextjs
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.js          # Layout principal
│   └── page.js            # Página principal
├── components/            # Componentes reutilizables
│   ├── Header.js          # Navegación principal
│   ├── Footer.js          # Pie de página
│   └── sections/          # Secciones de contenido
├── public/                # Archivos estáticos
│   └── assets/           # Imágenes y recursos
└── package.json          # Dependencias y scripts
```

## 🎨 Personalización

### Tema
El tema se puede personalizar en `app/layout.js` modificando el objeto `theme`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // Color principal
    },
    // ... más configuraciones
  },
});
```

### Contenido
- **Datos personales**: Modificar en los componentes de sección
- **Proyectos**: Editar array en `components/sections/ProjectsSection.js`
- **Habilidades**: Actualizar en `components/sections/SkillsSection.js`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🔧 Configuración de Producción

### Variables de Entorno
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### Deploy
El proyecto está configurado para deploy estático:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `out/`.

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

## 👨‍💻 Autor

**Erik Stor**
- Desarrollador Full Stack
- Cali, Colombia
- [LinkedIn](https://linkedin.com/in/erikstor)
- [Email](mailto:erikstor@gmail.com)

---

*Desarrollado con ❤️ usando Next.js y Material-UI*
