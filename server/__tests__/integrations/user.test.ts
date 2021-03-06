import request from 'supertest'

import knex from '../../src/database/connection'
import app from '../../src/app'

describe('User tests', () => {
  beforeEach(async () => {
    await knex('users').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  it('should create an user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimaspaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(200)
  })

  it('should create an admin user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimaspaiva@gmail.com',
      password: '123456',
      role: 2,
    })

    expect(response.status).toBe(200)
    expect(response.body.admin).toBe(true)
  })

  it('should not create an user with already registered email', async () => {
    await knex('users').insert({
      name: 'Dimas Jose',
      email: 'dimaspaiva@gmail.com',
      password: '654321',
    })

    const response = await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimaspaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(400)
  })

  it('should not create an user without email', async () => {
    const response = await request(app).post('/users').send({
      name: 'Dimas',
      password: '123456',
    })

    expect(response.status).toBe(400)
  })

  it('should not create an user without password', async () => {
    const response = await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimaspaiva@gmail.com',
    })

    expect(response.status).toBe(400)
  })

  it('should not create an user without name', async () => {
    const response = await request(app).post('/users').send({
      email: 'dimaspaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(400)
  })

  it('should recognize an user', async () => {
    await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/users/login').send({
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(200)
  })

  it('should not recognize an invalid email', async () => {
    await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/users/login').send({
      email: 'dimas@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(400)
  })

  it('should not recognize an user with wrong password', async () => {
    await request(app).post('/users').send({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const response = await request(app).post('/users/login').send({
      email: 'dimasalpaiva@gmail.com',
      password: '654321',
    })

    expect(response.status).toBe(400)
  })

  it('should show the user reserved flight data', async () => {
    await knex('rockets').del()
    await knex('companies').del()

    const userId = await knex('users').insert({
      name: 'Dimas',
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    const companieId = await knex('companies').insert({
      name: 'Space X',
      rating: 5,
    })

    const rocketId = await knex('rockets').insert({
      model: 'Time traveller',
      seats: 30,
      price: 12000,
      launch: '2020/11/26 08:30:00',
      company: companieId[0],
    })

    await knex('user_flights').insert({
      id_user: userId[0],
      id_rocket: rocketId[0],
    })

    const response = await request(app).post('/users/login').send({
      email: 'dimasalpaiva@gmail.com',
      password: '123456',
    })

    expect(response.status).toBe(200)
    expect(response.body.flight).toHaveProperty('launch')
  })

  it('should login as admin user', async () => {
    await knex('users').insert({
      name: 'Elon Musk',
      email: 'elon@gmail.com',
      password: '987654',
      role: 2,
    })

    const response = await request(app).post('/users/login').send({
      email: 'elon@gmail.com',
      password: '987654',
    })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('role')
  })
})
