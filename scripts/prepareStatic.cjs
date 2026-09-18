const fs = require('fs')
const path = require('path')

try {
  const srcDir = path.join(__dirname, '..', 'static')
  const destDir = path.join(__dirname, '..', 'public')
  const siteUrl = process.env.SITE_URL || ''

  if (!fs.existsSync(srcDir)) {
    console.error('No static directory found:', srcDir)
    process.exit(0)
  }

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

  const files = fs.readdirSync(srcDir)
  for (const file of files) {
    const src = path.join(srcDir, file)
    const dest = path.join(destDir, file)
    let content = fs.readFileSync(src, 'utf8')
    if (siteUrl) {
      content = content.replace(/https?:\/\/example\.com/g, siteUrl)
      content = content.replace(/https?:\/\/www\.example\.com/g, siteUrl)
    }
    fs.writeFileSync(dest, content, 'utf8')
    console.log('Copied', file)
  }
} catch (err) {
  console.error(err)
  process.exit(1)
}
