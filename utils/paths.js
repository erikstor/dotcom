// Función para obtener la ruta base correcta según el entorno
export function getBasePath() {
  // En desarrollo, no hay basePath
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // En producción (GitHub Pages), usar el basePath del repositorio
  return '/dotcomIA';
}

// Función para obtener la ruta correcta de un asset
export function getAssetPath(path) {
  const basePath = getBasePath();
  // Asegurarse de que la ruta comience con /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

// Función específica para imágenes
export function getImagePath(imagePath) {
  return getAssetPath(imagePath);
} 