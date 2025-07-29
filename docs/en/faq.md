# Frequently Asked Questions

## Basic Questions

### Q: How do I start the development server?

A: Run the following command in the project root directory:

```bash
npm run docs:dev
```

The server will start at `http://localhost:5173`.

### Q: How do I add a new page?

A: Follow these steps:

1. Create a new `.md` file in the `docs/en/` directory
2. Add navigation configuration in `docs/.vitepress/config.mts`
3. Restart the development server

### Q: How do I modify the site title?

A: Modify the `title` configuration in `docs/.vitepress/config.mts`:

```typescript
export default {
  title: 'Your Site Title',
  // ... other configurations
}
```

## Configuration Questions

### Q: How do I add custom CSS?

A: Create a `custom.css` file in the `docs/.vitepress/` directory, then import it in the configuration:

```typescript
export default {
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
}
```

### Q: How do I configure search functionality?

A: VitePress supports search by default. For more advanced search, you can configure Algolia DocSearch:

```typescript
export default {
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    }
  }
}
```

### Q: How do I add Google Analytics?

A: Add the following to your configuration:

```typescript
export default {
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');`]
  ]
}
```

## Deployment Questions

### Q: How do I deploy to GitHub Pages?

A: Follow these steps:

1. Build the project: `npm run docs:build`
2. Push the contents of `docs/.vitepress/dist` directory to GitHub
3. Enable GitHub Pages in repository settings

### Q: How do I deploy to Netlify?

A: Follow these steps:

1. Push your code to GitHub
2. Connect your GitHub repository in Netlify
3. Set build command: `npm run docs:build`
4. Set publish directory: `docs/.vitepress/dist`

### Q: Pages show 404 after deployment?

A: This is usually due to routing configuration issues. Make sure:

1. The `base` path is correctly configured in `docs/.vitepress/config.mts`
2. If deploying to a subdirectory, set `base: '/your-repo-name/'`

## Performance Questions

### Q: How do I optimize build speed?

A: You can try the following methods:

1. Use a faster package manager (like pnpm)
2. Reduce unnecessary dependencies
3. Use caching (like GitHub Actions cache)

### Q: How do I reduce bundle size?

A: You can try the following methods:

1. Use tree-shaking to remove unused code
2. Compress images and static assets
3. Use CDN to load third-party libraries

## Troubleshooting

### Q: Development server fails to start?

A: Check the following:

1. Ensure Node.js version >= 16
2. Delete `node_modules` and `package-lock.json`, reinstall dependencies
3. Check if the port is occupied

### Q: Build fails?

A: Check the following:

1. Ensure all Markdown files have correct syntax
2. Check configuration file syntax
3. Look at specific error messages in build logs

### Q: Page styles are abnormal?

A: Check the following:

1. Ensure CSS file paths are correct
2. Check browser console for errors
3. Clear browser cache

## More Help

If the above questions don't solve your problem, you can:

- Check the [VitePress official documentation](https://vitepress.dev/)
- Search for similar issues in [GitHub Issues](https://github.com/vuejs/vitepress/issues)
- Join VitePress community discussions
