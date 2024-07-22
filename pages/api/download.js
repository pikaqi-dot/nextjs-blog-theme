import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
  const filePath = path.resolve('./public', 'look.txt')
  const fileBuffer = fs.readFileSync(filePath)

  res.setHeader('Content-Type', 'application/txt')
  res.setHeader('Content-Disposition', 'attachment; filename=look.txt')
  res.send(fileBuffer)
}
