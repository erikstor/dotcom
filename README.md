# DotcomIA - Portfolio de Erik Stor

Portfolio profesional de Erik Stor, desarrollador web backend con experiencia en tecnologías modernas.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama `master`.

### Configuración Automática

1. **GitHub Actions**: El proyecto incluye un workflow automático en `.github/workflows/deploy.yml`
2. **Configuración de Next.js**: Optimizado para exportación estática con `basePath` y `assetPrefix`
3. **Rutas de Assets**: Todas las imágenes y recursos usan rutas relativas correctas para GitHub Pages

### Configuración Manual en GitHub

1. Ve a **Settings** > **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push a `master`

### Estructura del Proyecto

```
dotcomIA/
├── app/                    # Páginas de Next.js App Router
├── components/             # Componentes React
│   ├── sections/          # Secciones del portfolio
│   └── ...
├── public/                # Assets estáticos
│   └── assets/img/        # Imágenes
├── utils/                 # Utilidades
│   └── paths.js          # Helper para rutas de assets
├── .github/workflows/     # GitHub Actions
└── out/                   # Build estático (generado)
```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting del código

### Tecnologías Utilizadas

- **Frontend**: Next.js 14, React 18, Material-UI
- **Estilos**: Emotion, CSS-in-JS
- **Despliegue**: GitHub Pages, GitHub Actions
- **Build**: Next.js Static Export

### Solución de Problemas

#### Imágenes no se cargan
- Verifica que las rutas usen `getImagePath()` de `utils/paths.js`
- Asegúrate de que el `basePath` en `next.config.js` sea correcto

#### Estilos no se aplican
- Verifica que el `assetPrefix` en `next.config.js` esté configurado
- Asegúrate de que el archivo `.nojekyll` esté presente en `public/`

#### Build falla
- Ejecuta `npm install` para instalar dependencias
- Verifica que Node.js sea versión 18 o superior

## 📝 Notas de Desarrollo

Este portfolio fue desarrollado utilizando técnicas de **Prompt Engineering** y demuestra las habilidades de desarrollo backend y frontend de Erik Stor.

### Características

- ✅ Diseño responsive y moderno
- ✅ Optimización para SEO
- ✅ Carga rápida con imágenes optimizadas
- ✅ Navegación fluida entre secciones
- ✅ Despliegue automático en GitHub Pages

## 🔗 Enlaces

- **Sitio Web**: https://erikstor.github.io/dotcomIA
- **Repositorio**: https://github.com/erikstor/dotcomIA

---

Desarrollado con ❤️ por Erik Stor
