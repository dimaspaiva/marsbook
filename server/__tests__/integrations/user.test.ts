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
})
