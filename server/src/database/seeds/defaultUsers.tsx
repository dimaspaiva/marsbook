import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('users').insert([
    { email: 'juninhu@gmail.com', password: '123456', name: 'Junior' },
    { email: 'cleytu@gmail.com', password: '234567', name: 'Clytu Jr.' },
    { email: 'Jeferson@gmail.com', password: '345678', name: 'Jeferson' },
    {
      email: 'Elon@gmail.com',
      password: '987654',
      name: 'Musk Elon',
      role: 2,
    },
  ])
}
