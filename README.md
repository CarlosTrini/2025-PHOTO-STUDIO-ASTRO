# 2025-BOILERPLATE-ASTRO

## ES NECESARIO DESVINCULAR EL GIT DEL CUAL SE CLONA Y AGREGAR A UN NUEVO REPOSITORIO EL NUEVO PROYECTO
### npm install
### npm run dev

## AHORA DESVINCULAR

### git remote -v => para ver repositiorios vinculados
### git remote remove origin (para desvincularlo)

### git remote -v => Ya no debería de aparecer ningún valor en fetch y push
### agrega a tu nuevo repositorio 


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   │ 
│   ├── assets
│   │   └──images
│   │ 
│   ├── components
│   │   └── shared
│   │     └────BaseHead.astro
│   │ 
│   ├── helpers
│   │   └── navMobile.astro
│   │   └── siteTheme.ts
│   │ 
│   ├── layouts
│   │   └── Layout.astro
│   │ 
│   └── pages
│   │    └── index.astro
│   │ 
│   ├── styles
│   │   │── components
│   │   │── layout
│   │   │  └──── layout.module.css
│   │   │── pages
│   │   │  └──── home.module.css
│   │   │── utils
│   │   │  └────  _colors.css
│   │   │  └────  _containers.css
│   │   │  └────  _fonts.css
│   │   │  └────  _generics.css
│   │   │  └────  _tags.css
│   │   └── globals.css
│   │
└── package.json
```

## 🚀 Dependencies

```text
/
"dependencies": {
    "@astrojs/react": "^4.3.0",
    "@tailwindcss/vite": "^4.1.11",
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "astro": "^5.12.9",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.11"
  }

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

