# Guía de Despliegue - dotcomIA

## Cambios Realizados en el Pipeline

### 1. Pipeline de GitHub Actions (`.github/workflows/deploy.yml`)

**Mejoras implementadas:**
- ✅ Soporte para ramas `master` y `main`
- ✅ Uso de `npm ci` para instalación más rápida y confiable
- ✅ Verificación de configuración de Next.js antes del build
- ✅ Verificación de archivos generados después del build
- ✅ Configuración explícita de `NODE_ENV=production`

### 2. Configuración de Next.js (`next.config.js`)

**Optimizaciones:**
- ✅ Configuración mejorada para GitHub Pages
- ✅ Manejo correcto de rutas estáticas
- ✅ Configuración de imágenes no optimizadas para despliegue estático
- ✅ Configuración de `basePath` y `assetPrefix` para el repositorio

### 3. Scripts de Package.json

**Nuevos scripts agregados:**
- `build:static`: Build optimizado para producción
- `preview`: Servidor local para previsualizar el build

### 4. Archivos de Soporte para GitHub Pages

**Archivos creados:**
- `public/404.html`: Manejo de rutas SPA para GitHub Pages
- `public/_redirects`: Configuración de redirecciones

## Verificación del Despliegue

### Pasos para verificar que todo funcione:

1. **Verificar el build local:**
   ```bash
   npm run build:static
   npm run preview
   ```

2. **Verificar archivos generados:**
   - El directorio `out/` debe contener todos los archivos estáticos
   - Debe haber archivos HTML para cada ruta
   - Los assets deben estar en las rutas correctas

3. **Verificar el pipeline en GitHub:**
   - Ir a la pestaña "Actions" en GitHub
   - Verificar que el workflow "Deploy to GitHub Pages" se ejecute correctamente
   - Revisar los logs para asegurar que no hay errores

4. **Verificar el sitio desplegado:**
   - El sitio debe estar disponible en: `https://erikstor.github.io/dotcom`
   - Todas las rutas deben funcionar correctamente
   - Las imágenes y assets deben cargar sin problemas

## Troubleshooting

### Problemas comunes y soluciones:

1. **Error 404 en rutas:**
   - Verificar que `public/404.html` esté presente
   - Asegurar que `basePath` esté configurado correctamente

2. **Imágenes no cargan:**
   - Verificar configuración de `images.unoptimized: true`
   - Asegurar que `assetPrefix` esté configurado

3. **Build falla:**
   - Verificar que todas las dependencias estén instaladas
   - Revisar logs de ESLint y Next.js

4. **Rutas no funcionan:**
   - Verificar configuración de `trailingSlash: true`
   - Asegurar que `skipTrailingSlashRedirect: true` esté configurado

## Configuración de GitHub Pages

Asegúrate de que en la configuración del repositorio:
- GitHub Pages esté habilitado
- La fuente sea "GitHub Actions"
- El dominio personalizado esté configurado si es necesario

## Notas Importantes

- El sitio se despliega en: `https://erikstor.github.io/dotcom`
- Todos los assets deben usar rutas relativas al `basePath`
- Las imágenes deben estar en `public/assets/` para ser accesibles
- El build estático se genera en el directorio `out/` 