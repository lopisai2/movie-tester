# ECHOTECHNOLOGIES - Movie Tester

> Aplicación Web desarollada con Next.js, destinada a utilizar una API pública de OMDB para poder buscar peliculas y/o series, con filtros, ver los detalles y añadir peliculas a favoritos en una lista local.
---

## Uso de OMDB API

OMDB es una API pública de OMDB, que permite obtener datos de peliculas y series, con filtros, ver los detalles y añadir peliculas a favoritos en una lista local.

Para obtener una API KEY, se debe registrarse en el sitio web de OMDB y solicitar una clave gratuita que se envia a través de un correo electrónico.

https://www.omdbapi.com/

## Tecnologías y Herramientas Utilizadas

-**Next.js**: Framework para desarrollar aplicaciones web modernas y escalables. En la últimia versión 15.4.6.
- **TypeScript**: Tipado estático para props, componentes, hooks personalizados y manejo de respuestas de API.
- **Manejo de Estado Global**: Implementación de la libreria ligera Zustand para gestión eficiente del estado.
- **Estilizado Moderno**: Uso de Tailwind CSS, CSS Modules  con librerías de componentes como [shadcn/ui](https://ui.shadcn.com/). 
- **Sistema de Ruteo**: Ruteo nativo al usar frameworks como Next.js.
- **Consumo de API Pública**: Integración de dos APIS publicas, una para obtener datos de busqueda en general y otra para obtener los detalles de una pelicula.
- **Manejo Robusto de Errores y Estados de Carga**: Implementación pantallas de carga y manejo de errores en UI para mejorar la experiencia del usuario. Evitando romper la navegación en algun momento.
- **SEO y Accesibilidad**: Uso de etiquetas semánticas y atributos ARIA asi implementación de metadata dinamico para los detalles de cada pelicula.
- **Validación de Formularios**: Para búsquedas, filtros y evitar enviar parametros incorrectos a la API.
- **Tests Unitarios Básicos**: Uso de Jest, React Testing Library para validar custom hook .
- **Responsive Design**: Diseño hecho para dispositivos Desktop y Mobile.
- **Navegación Fluida**: Transiciones y navegación entre secciones usando motion para dar un efecto fluido de transición entre pantallas.

---

## Características Avanzadas
- **Paginación o Scroll Infinito**  
  Carga dinámica de contenido cuando se busca alguna pelicula para asi obtener nuevas peliculas al llegar al final de la lista.
- **Manejo de Caché**  
  Uso de Tanstack React Query en el lado del cliente para optimizar peticiones y evitar recargas innecesarias.
- **Optimización de Rendimiento**  
  Técnicas de memoización, lazy loading, y optimización en renderizado y búsquedas.
- **Despliegue**  
  Configuración lista para desplegar en Vercel.
- **Modo Oscuro Persistente**  
  Tema oscuro que se mantiene entre sesiones usando NextThemes, ya que se está usando ShadCN UI.
- **Animaciones**  
  Uso sencillo de Motion (libreria mas optimizada que framer-motion) que mejorar la interactividad visual.
- **CI/CD**  
  Pipelines automatizados con GitHub Actions u otras herramientas para integración continua y despliegue.
- **Configuración de Linter**  
  ESLint + Prettier configurados para mantener calidad y consistencia del código.

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/usuario/repositorio.git
   cd echotecnologies-prueba-tecnica
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Crear un archivo .env con las variables de entorno necesarias:

   ```bash
   OMDB_API_KEY=TU-API-KEY
   API_URL = URL-DE-OMDB-API
   NEXT_PUBLIC_API_URL= URL-DE-OMDB-API-PARA-CLIENTE
   ```
4. Para iniciar en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Para validar test unitarios:

   ```bash
   npm run test
   ```

6. Para iniciar en modo producción:

   ```bash
   npm run build
   npm run start
   ```