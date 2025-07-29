---
title: Guide
description: Detailed usage guide and development instructions
---

# Guide

## Project Structure

```
my-vitepress-site/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # VitePress configuration file
│   ├── zh/                     # Chinese documentation
│   │   ├── index.md            # Chinese homepage
│   │   ├── guide.md            # Chinese guide
│   │   └── faq.md              # Chinese FAQ
│   └── en/                     # English documentation
│       ├── index.md            # English homepage
│       ├── guide.md            # English guide
│       └── faq.md              # English FAQ
├── package.json                # Project configuration file
└── README.md                   # Project description
```

## Development Commands

### Start Development Server

```bash
npm run docs:dev
```

This will start the development server at `http://localhost:5173`.

### Build for Production

```bash
npm run docs:build
```

This will generate static files in the `docs/.vitepress/dist` directory.

### Preview Production Build

```bash
npm run docs:preview
```

This will preview the built site locally.

## Adding New Pages

1. Create a new `.md` file in the `docs/en/` directory
2. Add navigation and sidebar configuration in `docs/.vitepress/config.mts`
3. Restart the development server to see the changes

## Customizing Themes

VitePress supports highly customizable themes. You can:

- Modify configurations in `docs/.vitepress/config.mts`
- Create custom CSS files
- Use VitePress theme API

## Deployment

### GitHub Pages

1. Build the project: `npm run docs:build`
2. Deploy the contents of `docs/.vitepress/dist` directory to GitHub Pages

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run docs:build`
3. Set publish directory: `docs/.vitepress/dist`

## Multi-language Support

This project is already configured with Chinese and English support:

- Chinese documentation in `docs/zh/` directory
- English documentation in `docs/en/` directory
- Language switching in the navigation bar

## Common Features

### Code Highlighting

```javascript
function hello() {
  console.log('Hello, VitePress!')
}
```

### Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Multi-language | Support for Chinese and English switching | ✅ |
| Search | Full-text search functionality | ✅ |
| Themes | Custom theme support | ✅ |

### Admonitions

::: tip
This is a tip box for displaying important information.
:::

::: warning
This is a warning box for displaying content that needs attention.
:::

::: danger
This is a danger box for displaying important warning information.
:::
