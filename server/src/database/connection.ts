import knex from 'knex'

export default knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'cnsStorage',
  },
})
