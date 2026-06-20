# Portafolio Personal — Juan Diego Pardo Ballesteros

Portafolio web personal de **Juan Diego Pardo Ballesteros**, Ingeniero de Sistemas. Diseño oscuro, interactivo y completamente responsivo construido con React + Vite + TypeScript.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | Framework principal |
| Vite 8 | Bundler y servidor de desarrollo |
| Tailwind CSS v4 | Estilos utility-first |
| Framer Motion | Animaciones y transiciones |
| react-type-animation | Efecto typewriter en el Hero |
| react-scroll | Smooth scroll entre secciones |
| react-intersection-observer | Animaciones al hacer scroll |
| react-icons | Íconos (Simple Icons, Tabler, Font Awesome) |
| @emailjs/browser | Envío de formulario de contacto sin backend |

---

## Secciones del portafolio

### Hero
- Nombre con animación de entrada
- Efecto typewriter que rota entre: *Ingeniero de Sistemas*, *Full Stack Developer*, *Problem Solver*, *Apasionado por el código*
- Botones CTA: Ver proyectos / Contactar
- Links a GitHub, LinkedIn y Email
- Fondo con blobs animados y grid decorativo
- Scroll indicator animado

### Sobre mí
- Avatar / foto de perfil
- Descripción personal
- 4 stat cards: Proyectos, Años de experiencia, Dedicación, Cafés tomados

### Skills
Organizado en 6 categorías con íconos, barras de nivel animadas y badges:

**Lenguajes:** Python, Java, C#, C++, JavaScript, TypeScript, HTML, CSS, Kotlin, Dart, Swift

**Frameworks & Librerías:** React, Angular, Node.js, Express, Spring Boot, Flutter

**Bases de datos:** MySQL, Firebase, DBeaver, SQLite, Supabase

**DevOps & Infraestructura:** Docker, Kubernetes, GitHub Actions

**Herramientas:** Git, GitHub, Figma, Postman, Bash

**Conocimientos adicionales:** POO, Algoritmos, Estructuras de Datos, REST APIs, Scrum/Agile, CI/CD, Linux

### Proyectos
Cards interactivas con imagen, descripción, tags de tecnologías y link a GitHub. Filtros por tecnología en tiempo real.

| Proyecto | Descripción | Tecnologías |
|---|---|---|
| **Enerlex** | App móvil que conecta a toma corrientes inteligentes para encender/apagar dispositivos y ahorrar energía | Flutter, Supabase |
| **CondorApp** | Red social de viajes: reseñas, destinos turísticos, fotos, seguidores y mapa interactivo de ubicación | Kotlin, Firebase, Node.js, Express |

### Contacto
- Links a GitHub, LinkedIn y Email
- Formulario de contacto (EmailJS — sin backend)
- Botón para descargar CV en PDF

---

## Paleta de colores

| Rol | Color |
|---|---|
| Fondo principal | `#0f172a` |
| Fondo alterno | `#060d1f` |
| Tarjetas | `#1e293b` |
| Texto principal | `#f1f5f9` |
| Texto secundario | `#94a3b8` |
| Acento primario | `#a855f7` |
| Acento hover | `#c084fc` |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionTitle.tsx
│       ├── SkillBadge.tsx
│       └── ProjectCard.tsx
├── data/
│   ├── skills.ts
│   └── projects.ts
├── hooks/
│   └── useActiveSection.ts
├── App.tsx
├── main.tsx
└── index.css
public/
└── Projects/
    ├── enerlex/
    │   └── logo.png
    └── condorapp/
        └── logo.png
```

---

## Correr el proyecto localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

El servidor corre en `http://localhost:5173`

---

## Personalización

- **Proyectos:** editar `src/data/projects.ts`
- **Skills y niveles:** editar `src/data/skills.ts`
- **Imágenes de proyectos:** colocar en `public/Projects/<nombre>/`
- **CV:** colocar `cv.pdf` en `public/`
- **Formulario de contacto:** configurar EmailJS en `src/components/sections/Contact.tsx`

---

## Links

- GitHub: [github.com/Pardo250](https://github.com/Pardo250)
- LinkedIn: [Juan Diego Pardo Ballesteros](https://www.linkedin.com/in/juan-diego-pardo-ballesteros-b96a4b2b9)
