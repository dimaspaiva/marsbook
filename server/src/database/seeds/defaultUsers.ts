import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('users').insert([
    {
      id: 1,
      email: 'juninhu@gmail.com',
      password: '123456',
      name: 'Junior',
    },
    {
      id: 2,
      email: 'cleytu@gmail.com',
      password: '234567',
      name: 'Clytu Jr.',
    },
    {
      id: 3,
      email: 'romarinho@gmail.com',
      password: '345678',
      name: 'Romário Jr.',
    },
    {
      id: 4,
      email: 'jessica@gmail.com',
      password: '456789',
      name: 'Jessica Alves',
    },
    {
      id: 5,
      email: 'jeferson@gmail.com',
      password: '567890',
      name: 'Jeferson',
    },
    {
      id: 6,
      email: 'elon@gmail.com',
      password: '987654',
      name: 'Musk Elon',
      role: 2,
    },
  ])
}
