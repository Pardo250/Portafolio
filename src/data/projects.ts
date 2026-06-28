export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enerlex',
    description: 'App móvil que conecta a toma corrientes inteligentes para encender o apagar dispositivos y ahorrar energía.',
    longDescription: 'Aplicación móvil desarrollada en Flutter conectada a toma corrientes inteligentes mediante Supabase. Permite controlar dispositivos del hogar de forma remota, monitorear el consumo energético y automatizar el encendido/apagado para promover el ahorro de energía.',
    tags: ['Flutter', 'Supabase'],
    github: 'https://github.com/Enerlex-Project/Enerlex-flutter',
    demo: '',
    image: '/Projects/enerlex/logo.png',
    featured: true,
  },
  {
    id: 2,
    title: 'CondorApp',
    description: 'Red social de viajes: reseñas, destinos turísticos, fotos, seguidores y mapa interactivo de ubicación en tiempo real.',
    longDescription: 'Aplicación móvil Android tipo red social enfocada en viajes. Los usuarios pueden crear reseñas de sus viajes, explorar destinos turísticos, publicar fotos asociadas a sus reseñas, seguir a otros viajeros y ser seguidos. Incluye un mapa interactivo que muestra la ubicación actual del usuario. Backend desarrollado con Node.js y Express, base de datos con Firebase y frontend nativo en Kotlin con Android Studio.',
    tags: ['Kotlin', 'Firebase', 'Node.js', 'Express'],
    github: 'https://github.com/Movil-Condorapp/Movil',
    demo: '',
    image: '/Projects/condorapp/logo.png',
    featured: true,
  },
  {
    id: 3,
    title: 'Pacman',
    description: 'Recreación del clásico juego Pacman desarrollada en Python con Pygame.',
    longDescription: 'Juego Pacman clásico implementado en Python utilizando la librería Pygame. Incluye mecánicas de movimiento del personaje, fantasmas con comportamiento de persecución, recolección de puntos, niveles y sistema de puntuación.',
    tags: ['Python', 'Pygame'],
    github: 'https://github.com/Pardo250/Pacman',
    demo: '',
    image: '/Projects/Pacman/Screenshot 2026-06-28 121343.png',
    featured: true,
  },
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))];
