# SeitenArchitekt Homepage

Nuxt 3 Projekt für lokale Entwicklung, automatische GitHub-Pages-Vorschau und statische DreamHost-Deployments.

## Lokal entwickeln

```bash
npm install
npm run dev
```

Lokal läuft die Seite unter der Root-URL `/`.

## DreamHost Build

```bash
npm run generate:dreamhost
```

Das generierte Ergebnis für ein Root-Deployment liegt danach in `dist/`.

## GitHub Pages

Das Repository enthält einen Workflow unter [pages.yml](D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/.github/workflows/pages.yml), der bei Push auf `main` automatisch eine GitHub-Pages-Vorschau baut und veröffentlicht.

In GitHub unter `Settings -> Pages`:

- `Source`: `GitHub Actions`

## Optionaler lokaler GitHub-Pages-Build

```bash
npm run generate:gh-pages
```

Das generierte Ergebnis für GitHub Pages liegt danach in `docs/`.

## Hinweise

Für GitHub Pages wird automatisch die Base-URL `/seitenarchitekt-homepage-modern-dark/` verwendet.
Für lokale Entwicklung und DreamHost wird automatisch `/` verwendet.
