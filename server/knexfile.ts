import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev',
})

module.exports = {
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    filename:
      process.env.NODE_ENV === 'test'
        ? path.resolve(__dirname, '__tests__', 'database', 'test.sqlite')
        : '',
  },
  useNullAsDefault: process.env.NODE_ENV === 'test',
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
}
