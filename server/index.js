import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectMongo } from './config/connectMongo.js'
import { waitlistRouter } from './routes/waitlist.routes.js'

const app = express()
const PORT = process.env.PORT || 8787

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/waitlist', waitlistRouter)

async function start() {
  await connectMongo()

  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`)
  })
}

start().catch((error) => {
  console.error('Failed to start API server:', error)
  process.exit(1)
})
