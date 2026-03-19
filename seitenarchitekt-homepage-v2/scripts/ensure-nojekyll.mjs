import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const outputDir = process.env.NUXT_OUTPUT_DIR || 'docs'
const targetDir = resolve(process.cwd(), outputDir)
const noJekyllPath = resolve(targetDir, '.nojekyll')

await mkdir(targetDir, { recursive: true })
await writeFile(noJekyllPath, '')
