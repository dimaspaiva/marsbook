import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('user_flights').insert([
    { id_user: 1, id_rocket: 2 },
    { id_user: 2, id_rocket: 1 },
    { id_user: 3, id_rocket: 2 },
  ])
}
