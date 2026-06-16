# Astro Starter Kit: Minimal (Configuración Profesional)

Plantilla base de Astro optimizada y extendida con un ecosistema completo para desarrollo profesional y flujos de automatización locales: TypeScript (Modo Estricto), ESLint, Prettier (con auto-ordenado de clases de Tailwind CSS e importaciones), EditorConfig, daisyUI v5, Astro Icon y gestión de tipografías optimizadas con Fontsource.

## 📦 Instalación y Despliegue

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Preparación del proyecto
Clona este repositorio o inicializa la plantilla dentro de tu directorio de trabajo en la terminal.

### 2. Instalación de dependencias
El proyecto utiliza pnpm como gestor de paquetes exclusivo para garantizar velocidad, optimización de espacio y compatibilidad de enlaces:

```bash
pnpm install
```

### 3. Servidor de desarrollo
Inicia el entorno de desarrollo con recarga limpia en tiempo real (HMR):

```bash
pnpm dev
```

Una vez levantado, abre tu navegador en http://localhost:4321 para visualizar tu sitio.

## 🚀 Estructura del Proyecto

Dentro del espacio de trabajo encontrarás la organización avanzada de directorios y herramientas instaladas:

```plaintext
/
├── .vscode/
│   ├── extensions.json         # Extensiones unificadas sugeridas para el equipo de desarrollo
│   ├── launch.json             # Configuración del servidor de depuración de Node para VS Code
│   └── settings.json           # Formateo automatizado, linters y correcciones al guardar
├── public/                     # Archivos estáticos directos (favicons, imágenes puras, etc.)
├── src/
│   ├── components/             # Componentes modulares reutilizables de Astro (o islas de frameworks)
│   ├── layouts/                # Plantillas y armazones estructurales HTML base (Layout.astro)
│   ├── pages/
│   │   └── index.astro         # Ruta principal del sitio (localhost:4321)
│   └── styles/
│       └── global.css          # Estilos e importaciones globales de Tailwind CSS v4, daisyUI y fuentes
├── .editorconfig               # Reglas globales de codificación consistentes para editores e IDEs
├── .gitignore                  # Exclusiones de rastreo para el repositorio Git
├── .prettierrc.mjs             # Plugins y secuencias de formateo estético (Astro, Tailwind, JSON, Imports)
├── astro.config.mjs            # Integraciones core (Astro Icon) y orquestación de Vite (Tailwind CSS)
├── eslint.config.mjs           # Reglas de análisis estático y lógica para TypeScript y sintaxis Astro
├── package.json                # Scripts operativos, dependencias del motor y metadatos
└── tsconfig.json               # Parámetros del compilador estricto de TypeScript
```

**src/pages/:** Directorio raíz del enrutamiento basado en archivos. Cualquier archivo .astro o .md ubicado aquí se expondrá automáticamente como una dirección web pública.  
**src/styles/global.css:** Centraliza el procesamiento nativo de los estilos de Tailwind CSS v4, componentes UI heredados de daisyUI e inyección local optimizada desde Fontsource.  
**src/components/:** Zona de almacenamiento modular libre dedicada para tus fragmentos de interfaz aislados.  

## 🧞 Comandos y Scripts Disponibles

Todos los procesos automatizados del ecosistema se lanzan desde la raíz de la terminal utilizando la CLI de pnpm:

### Operaciones Estándar
* **pnpm dev / pnpm start:** Inicializa el servidor de desarrollo en localhost:4321.  
* **pnpm build:** Ejecuta un escaneo preventivo de tipos (pnpm check) y compila el sitio de forma optimizada para producción dentro de ./dist/.  
* **pnpm preview:** Levanta un entorno local simulado para evaluar el rendimiento y resultado del build de producción antes del despliegue final.  
* **pnpm astro ...:** Lanza comandos directos desde la interfaz de línea de comandos de Astro.  

### Control y Tipado (TypeScript)
* **pnpm check:** Diagnóstica de manera estática el código en busca de discrepancias de tipos de TypeScript o fallas estructurales dentro del Frontmatter.  
* **pnpm check:watch:** Mantiene la terminal en modo escucha activa; reevalúa la consistencia de tipos en tiempo real ante cualquier guardado de archivo.  

### Validación y Calidad de Código (ESLint)
* **pnpm lint:** Examina malas prácticas de sintaxis o variables inactivas. Concluye en fallo preventivo ante cualquier advertencia (--max-warnings 0) ideal para flujos CI/CD.  
* **pnpm lint:fix:** Aplica correcciones automatizadas inmediatas sobre todas las inconsistencias de código manejables por ESLint.  

### Estética y Formateo Automatizado (Prettier)
* **pnpm format:** Analiza la estructura de los archivos de código fuente indicando desviaciones estéticas sin sobreescribir código.  
* **pnpm format:fix:** Reestructura de forma activa la indentación, ordena alfabéticamente las importaciones modulares y organiza las clases de Tailwind CSS secuencialmente bajo el estándar oficial.  

👀 ¿Quieres aprender más?

Siéntete libre de revisar la documentación oficial de Astro o sumarte a la comunidad activa dentro del servidor de Discord de Astro.
