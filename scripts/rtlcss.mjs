import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import postcss from 'postcss'
import postcssRTLCSS from 'postcss-rtlcss'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '../docs/.vitepress/dist/assets')

const files = readdirSync(distDir).filter(f => f.endsWith('.css'))

for (const file of files) {
  const filePath = join(distDir, file)
  const css = readFileSync(filePath, 'utf-8')
  const result = await postcss([postcssRTLCSS({
    ltrPrefix: ':where([dir="ltr"])',
    rtlPrefix: ':where([dir="rtl"])',
    bothPrefix: ':where([dir])',
  })]).process(css, { from: filePath })
  if (result.css !== css) {
    writeFileSync(filePath, result.css)
    process.stdout.write(`✓ ${file} (RTL rules added)\n`)
  }
}
