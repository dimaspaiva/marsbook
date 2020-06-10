import express from 'express'
import knex from './database/connection'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' })
})

app.post('/users', async (req, res) => {
  const idList = await knex('users').insert(req.body)

  return res.json({ idList })
})

app.listen(4040, () => {
  console.log('[SRV] up...')
})
