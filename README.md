# Opita Developer Web

> Portfolio y sitio de identidad de marca del **Opita Developer** — canal público de Opita Code.

Sitio Astro con estética "Cyberpunk/Gamer" orientado a product architects y desarrolladores. Presenta el trabajo técnico de Opita Code con animaciones premium, terminal interactiva y diagramas de arquitectura en vivo.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro |
| Componentes interactivos | React + TypeScript |
| Estilos | CSS vanilla + custom design tokens |
| Animaciones | Framer Motion (en componentes React) |
| Hosting | S3 + CloudFront (opitacode.com/developer o subdominio) |

## Estructura

```
opita-developer-web/
├── src/
│   ├── components/
│   │   ├── ArchitectureDiagram.tsx  # Diagrama de arquitectura interactivo (React)
│   │   └── InteractiveTerminal.tsx  # Terminal simulado (React)
│   ├── layouts/
│   │   └── Layout.astro             # Layout base con Nav y Footer
│   ├── pages/
│   │   └── index.astro              # Página principal del portfolio
│   └── styles/
│       └── global.css               # Estilos globales y tokens
├── public/                          # Assets estáticos
├── astro.config.mjs
└── tsconfig.json
```

## Quick Start

```bash
npm install
npm run dev    # localhost:4321
npm run build  # Genera dist/
```

---

> Canal público de Opita Code · Construido desde Colombia 🇨🇴
