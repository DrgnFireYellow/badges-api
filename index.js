const express = require('express')
const app = express()
const port = 8080

app.get('/languages/python3', (req, res) => {
  res.send('https://img.shields.io/badge/-Python_3-blue?logo=python&logoColor=yellow')
})
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
