import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { primaryColor, secondaryColor } = req.body

    const colorsPath = path.join(process.cwd(), '/themeColors.js')
    const newContent = `
module.exports = {
  primary: '${primaryColor}',
  secondary: '${secondaryColor}',
};
    `

    fs.writeFile(colorsPath, newContent, err => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Failed to update colors' })
      }

      res.status(200).json({ message: 'Colors updated successfully' })
    })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
