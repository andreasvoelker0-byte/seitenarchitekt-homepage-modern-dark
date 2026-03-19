# SeitenArchitekt Homepage

Nuxt 3 Projekt für lokale Entwicklung, DreamHost-Deployments und eine statische GitHub Pages Project Site.

## Lokal entwickeln

```bash
npm install
npm run dev
```

Lokal läuft die Seite unter der Root-URL `/`.

## Build

```bash
npm run generate:dreamhost
```

Das generierte Ergebnis für ein Root-Deployment liegt danach in `dist/`.

## GitHub Pages Build

```bash
npm run generate:gh-pages
```

Das generierte Ergebnis für GitHub Pages liegt danach in `docs/`.

## GitHub Pages

In GitHub unter `Settings -> Pages`:

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/docs`

## Hinweise

Für GitHub Pages wird automatisch die Base-URL `/seitenarchitekt-homepage-modern-dark/` verwendet.
Für lokale Entwicklung und DreamHost wird automatisch `/` verwendet.
