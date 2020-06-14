import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('companies').insert([
    { id: 1, name: 'Space X', rating: 4.8, votes: 15 },
    { id: 2, name: 'Boeing Space', rating: 4.4, votes: 9 },
    { id: 3, name: 'Sideral Xiaomi', rating: 4.2, votes: 21 },
    { id: 4, name: 'Solar System', rating: 4.8, votes: 10 },
  ])
}
