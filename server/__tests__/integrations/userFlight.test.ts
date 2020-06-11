import request from 'supertest'

import knex from '../../src/database/connection'
import app from '../../src/app'

describe('User flight tests', () => {
  beforeEach(async () => {
    await knex('users').del()
    await knex('companies').del()
    await knex('rockets').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  it('should make a user buy a flight', async () => {
    const idListCompany = await knex('companies').insert({
      name: 'Space X Buy',
    })

    const idListRocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: idListCompany[0],
    })

    const idListUser = await knex('users').insert({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/userflight').send({
      id_user: idListUser[0],
      id_rocket: idListRocket[0],
    })

    expect(response.status).toBe(200)
  })

  it('should not sell for a inexistent user', async () => {
    const idListCompany = await knex('companies').insert({
      name: 'Space X Buy',
    })

    const idListRocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: idListCompany[0],
    })

    const response = await request(app).post('/userflight').send({
      id_user: -1,
      id_rocket: idListRocket[0],
    })

    expect(response.status).toBe(400)
  })

  it('should not sell a inexistent flight', async () => {
    const idListUser = await knex('users').insert({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/userflight').send({
      id_user: idListUser[0],
      id_rocket: -1,
    })

    expect(response.status).toBe(400)
  })

  it('should not sell if user has no money', async () => {
    const idListCompany = await knex('companies').insert({
      name: 'Space X Buy',
    })

    const idListRocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 20000,
      launch: '2020/11/26 08:30:00',
      company: idListCompany[0],
    })

    const idListUser = await knex('users').insert({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/userflight').send({
      id_user: idListUser[0],
      id_rocket: idListRocket[0],
    })

    expect(response.status).toBe(400)
  })

  it('should not sell if have no seats', async () => {
    const idListCompany = await knex('companies').insert({
      name: 'Space X Buy',
    })

    const idListRocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 0,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: idListCompany[0],
    })

    const idListUser = await knex('users').insert({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/userflight').send({
      id_user: idListUser[0],
      id_rocket: idListRocket[0],
    })

    expect(response.status).toBe(400)
  })
})
