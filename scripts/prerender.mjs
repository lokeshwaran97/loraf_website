// Pre-renders the legal pages into static HTML so crawlers that do not run
// JavaScript (e.g. Meta's) see the real content, title and canonical URL.
import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Use React's production server renderer (no dev-only warnings).
process.env.NODE_ENV ??= 'production'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-prerender')

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
const { routes, render } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-prerender.js')).href
)

// Head tags the page supplies itself via Helmet; strip the site-wide defaults.
// [^>]* also matches newlines, so tags spanning multiple lines are handled.
const stripPatterns = [
  /<title>[\s\S]*?<\/title>\s*/i,
  /<meta\s[^>]*name="description"[^>]*>\s*/i,
  /<link\s[^>]*rel="canonical"[^>]*>\s*/i,
  /<meta\s[^>]*property="og:url"[^>]*>\s*/i,
  /<meta\s[^>]*property="og:title"[^>]*>\s*/i,
  /<meta\s[^>]*property="og:type"[^>]*>\s*/i,
  /<meta\s[^>]*property="og:description"[^>]*>\s*/i,
  /<meta\s[^>]*name="twitter:title"[^>]*>\s*/i,
  /<meta\s[^>]*name="twitter:description"[^>]*>\s*/i,
]

const rootDiv = /<div id="root">\s*<\/div>/

for (const route of routes) {
  const { html, head } = render(route)

  let page = template
  for (const pattern of stripPatterns) page = page.replace(pattern, '')

  if (!rootDiv.test(page)) {
    throw new Error(`prerender: empty <div id="root"></div> not found in dist/index.html`)
  }
  page = page.replace('</head>', `  ${head}\n  </head>`)
  page = page.replace(rootDiv, () => `<div id="root">${html}</div>`)

  const outFile = path.join(distDir, `${route.replace(/^\//, '')}.html`)
  await writeFile(outFile, page)
  console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`)
}

await rm(ssrDir, { recursive: true, force: true })
