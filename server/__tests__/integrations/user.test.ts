import request from 'supertest'

import knex from '../../src/database/connection'
import app from '../../src/app'

describe('startup', () => {
  beforeEach(async () => {
    await knex('users').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  it('should create an user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Dimaas',
      email: 'dimaspaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(200)
  })
})
