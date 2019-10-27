const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handler = require('./handler')

app.use(bodyParser.json())

const port = process.env.PORT || 8080

app.post('/scrape-url-html', async (req, res) => {
  const { url, session = null } = req.body

  // @TODO: This handler should be the main responsibility in this file,
  // handle definition in export like lambda-api, or elsewhere
  const html = await handler({ url, session })

  res.json(html)
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(port, () =>
  console.log(`Listening on localhost: http://localhost:${port}`)
)
