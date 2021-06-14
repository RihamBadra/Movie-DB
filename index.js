
const express = require('express')
const app = express()
const port = 3000

app.get('/url:test', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`ok`)
})
