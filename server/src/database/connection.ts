import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev',
})
export default knex({
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    filename: process.env.FILENAME,
  },
  useNullAsDefault: process.env.NODE_ENV === 'test',
})
