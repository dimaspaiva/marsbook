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

  it('should not create a new companie without name', async () => {
    const response = await request(app).post('/companies')

    expect(response.status).toBe(400)
  })

  it('should not create the same companie twice', async () => {
    await request(app).post('/companies').send({
      name: 'Space X',
    })

    const response = await request(app).post('/companies').send({
      name: 'Space X',
    })

    expect(response.status).toBe(400)
  })

  it('should list all companies', async () => {
    await knex('companies').insert({
      name: 'Space X',
    })

    await knex('companies').insert({
      name: 'Boeing Space',
    })

    const response = await request(app).get('/companies')
    const [spacex, boeing] = response.body.companies

    expect(response.status).toBe(200)
    expect(response.body.companies.length).toBe(2)
    expect(spacex.name).toMatch('Space X')
    expect(boeing.name).toMatch('Boeing Space')
  })

  it('should alert if none company is registered', async () => {
    const response = await request(app).get('/companies')

    expect(response.status).toBe(400)
  })

  it('should return a specific company', async () => {
    const idCompany = await knex('companies').insert({
      name: 'Space X',
    })

    const response = await request(app).get(`/companies/${idCompany[0]}`)
    const { company } = response.body

    expect(response.status).toBe(200)
    expect(company.name).toMatch('Space X')
    expect(company.id).toBe(idCompany[0])
  })

  it('should return an error when not find a company', async () => {
    const response = await request(app).get('/companies/1000')

    expect(response.status).toBe(400)
  })

  it('should return an error if id is not a number', async () => {
    const response = await request(app).get('/companies/notnumber')

    expect(response.status).toBe(400)
  })

  it('should rating the company', async () => {
    const companyId = await knex('companies').insert({
      name: 'Space X',
      rating: 5,
      votes: 10,
    })

    const rate = Math.floor(Math.random() * 5)
    const response = await request(app).post('/companies/rating/').send({
      rate,
      id: companyId[0],
    })

    expect(response.status).toBe(200)
    expect(response.body.rating).toBe((5 + rate) / 11)
  })

  it('should rate with note 0', async () => {
    const companyId = await knex('companies').insert({
      name: 'Space X',
      rating: 5,
      votes: 10,
    })

    const response = await request(app).post('/companies/rating/').send({
      rate: 0,
      id: companyId[0],
    })

    expect(response.status).toBe(200)
    expect(response.body.rating).toBe(5 / 11)
  })

  it('should not rating if company dont exists', async () => {
    const response = await request(app).post('/companies/rating/').send({
      rate: 5,
      id: -1,
    })

    expect(response.status).toBe(400)
  })

  it('should not rating if dont send company id', async () => {
    const response = await request(app).post('/companies/rating/').send({
      rate: 5,
    })

    expect(response.status).toBe(400)
  })

  it('should not rating if dont send rate', async () => {
    const companyId = await knex('companies').insert({
      name: 'Space X',
      rating: 5,
      votes: 10,
    })

    const response = await request(app).post('/companies/rating/').send({
      id: companyId[0],
    })

    expect(response.status).toBe(400)
  })
})
