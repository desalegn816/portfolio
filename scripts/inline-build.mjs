// Turns the Vite build in dist/ into ONE self-contained HTML file (no build step needed to open it).
// Usage: npm run build:standalone  ->  dist-standalone/portfolio.html
// It inlines the built CSS and JavaScript and copies cv.pdf and icons next to the file.
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const distDir = 'dist'
const outDir = 'dist-standalone'
let html = readFileSync(join(distDir, 'index.html'), 'utf8')

// Inline stylesheets
html = html.replace(/<link rel="stylesheet"[^>]*href="\.\/(assets\/[^"]+\.css)"[^>]*>/g, (_, file) => {
  const css = readFileSync(join(distDir, file), 'utf8')
  return `<style>\n${css}\n</style>`
})

// Inline module scripts. "</script" inside the bundle would end the tag early, so escape it.
html = html.replace(/<script type="module"[^>]*src="\.\/(assets\/[^"]+\.js)"[^>]*><\/script>/g, (_, file) => {
  const js = readFileSync(join(distDir, file), 'utf8').replace(/<\/script/gi, '<\\/script')
  return `<script type="module">\n${js}\n</script>`
})

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'portfolio.html'), html)

// Files the page links to by relative path
for (const name of ['cv.pdf', 'icons', 'images']) {
  if (existsSync(join(distDir, name))) cpSync(join(distDir, name), join(outDir, name), { recursive: true })
}
console.log(`Wrote ${outDir}/portfolio.html (${(html.length / 1024).toFixed(1)} kB)`)
