import request from 'supertest'

import knex from '../../src/database/connection'
import app from '../../src/app'

describe('Companies tests', () => {
  beforeEach(async () => {
    await knex('companies').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  it('should create a new companie', async () => {
    const response = await request(app).post('/companies').send({
      name: 'Space X',
    })

    expect(response.status).toBe(200)
  })
})
