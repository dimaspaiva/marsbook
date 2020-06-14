import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('rockets').insert([
    {
      id: 1,
      model: 'Time Traveler',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 1,
    },
    {
      id: 2,
      model: 'Time Booster',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 1,
    },
    {
      id: 3,
      model: 'New Horizon',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 2,
    },
    {
      id: 4,
      model: 'Mi Traveler X',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 3,
    },
    {
      id: 5,
      model: 'Sun Lightyear',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 4,
    },
    {
      id: 6,
      model: 'Timebreaker',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 1,
    },
    {
      id: 7,
      model: 'Ray Boom',
      seats: 15,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 4,
    },
    {
      id: 8,
      model: 'Time Traveler Piooner',
      seats: 0,
      price: 15000.0,
      launch: '2053/02/09 08:00:00',
      company: 4,
    },
  ])
}
