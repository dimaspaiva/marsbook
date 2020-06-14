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
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(200)
  })

  it('should not create a rocket without model', async () => {
    const response = await request(app).post('/rockets').send({
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without seats', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket without price', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      launch: '2020/11/26T08:30:00',
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
      launch: '2020/11/26T08:30:00',
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket twice', async () => {
    await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    expect(response.status).toBe(400)
  })

  it('should not create a rocket with a unregistered company', async () => {
    const response = await request(app).post('/rockets').send({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: -1,
    })

    expect(response.status).toBe(400)
  })

  it('should return a especific rocket', async () => {
    const rocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    const response = await request(app).get(`/rockets/${rocket[0]}`)

    expect(response.status).toBe(200)
  })

  it('should return a rocket and the owner', async () => {
    const rocket = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    const response = await request(app).get(`/rockets/${rocket[0]}`)

    expect(response.status).toBe(200)
    expect(response.body.rocket.company_name).toMatch(company.name)
  })

  it('should return all rockets', async () => {
    await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 2',
      seats: 30,
      price: 12000,
      launch: '2020/11/27T08:30:00',
      company: company.id,
    })

    const response = await request(app).get('/rockets')

    expect(response.status).toBe(200)
    expect(response.body.rockets.length).toBe(2)
  })

  it('should return all rockets in specific date', async () => {
    await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26T08:30:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 2',
      seats: 30,
      price: 12000,
      launch: '2020/11/27T08:30:00',
      company: company.id,
    })

    const response = await request(app).get('/rockets/?date=2020/11/27')

    expect(response.status).toBe(200)
    expect(response.body.rockets.length).toBe(1)
  })

  it('should return all rockets in specific date and time', async () => {
    await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/27T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 2',
      seats: 30,
      price: 12000,
      launch: '2020/11/27T08:30:00',
      company: company.id,
    })

    const response = await request(app).get(
      '/rockets/?date=2020/11/27&time=08:30:00'
    )

    expect(response.status).toBe(200)
    expect(response.body.rockets.length).toBe(1)
  })

  it('should return all flights distinct dates', async () => {
    await knex('rockets').insert({
      model: 'Time traveller 1',
      seats: 30,
      price: 12000,
      launch: '2020/11/27T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 2',
      seats: 30,
      price: 12000,
      launch: '2020/11/28T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 3',
      seats: 30,
      price: 12000,
      launch: '2020/11/29T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 4',
      seats: 30,
      price: 12000,
      launch: '2020/11/29T19:00:00',
      company: company.id,
    })

    const response = await request(app).get('/rockets/dates')

    expect(response.status).toBe(200)
    expect(response.body.dates.length).toBe(3)
  })

  it('should return all flights distinct in day times', async () => {
    await knex('rockets').insert({
      model: 'Time traveller 1',
      seats: 30,
      price: 12000,
      launch: '2020/11/28T07:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 2',
      seats: 30,
      price: 12000,
      launch: '2020/11/28T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 3',
      seats: 30,
      price: 12000,
      launch: '2020/11/28T09:00:00',
      company: company.id,
    })

    await knex('rockets').insert({
      model: 'Time traveller 4',
      seats: 30,
      price: 12000,
      launch: '2020/11/28T19:00:00',
      company: company.id,
    })

    const response = await request(app).get(
      '/rockets/times/?date=2020/11/28'
    )

    expect(response.status).toBe(200)
    expect(response.body.times.length).toBe(3)
  })
})
