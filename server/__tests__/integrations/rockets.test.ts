import request from 'supertest'

import knex from '../../src/database/connection'
import app from '../../src/app'

describe('Rockets tests', () => {
  const company = {
    id: 0,
    name: 'Space X Rockets',
  }

  beforeAll(async () => {
    await knex('companies').del()
    const idList = await knex('companies').insert({
      name: company.name,
    })

    company.id = idList[0]
  })

  beforeEach(async () => {
    await knex('rockets').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  it('should create a rocket', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(200)
  })

  it('should not create a rocket without model', async () => {
    const response = await request(app).post('/rockets').send({
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without seats', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without price', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without launch', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without company', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket twice', async () => {
    await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket with a unregistered company', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: -1,
    })

    expect(response.status).toBe(400)
  })

  it('should return a especific rocket', async () => {
    const rocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    const response = await request(app).get(`/rockest/${rocket[0]}`)

    expect(response.status).toBe(200)
  })

  it('should return a rocket and the owner', async () => {
    const rocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: company.id,
    })

    const response = await request(app).get(`/rockest/${rocket[0]}`)

    expect(response.status).toBe(200)
    expect(response.body.rocket.company_name).toMatch(company.name)
  })
})
