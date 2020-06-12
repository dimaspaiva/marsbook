import { Request, Response } from 'express'
import knex from '../database/connection'

class User {
  async create(req: Request, res: Response) {
    if (!req.body.email || !req.body.name || !req.body.password) {
      return res
        .status(400)
        .json({ message: 'One or more creating data is missing' })
    }

    const user = await knex('users')
      .select('*')
      .where('email', req.body.email)

    if (user[0]) {
      return res.status(400).json({ message: 'E-mail is already in use' })
    }

    const idList = await knex('users').insert(req.body)
    const newUser = await knex('users').select('*').where('id', idList[0])

    if (newUser[0].role === 2) {
      return res.json({ message: 'New admin user', admin: true })
    }

    return res.json({ message: 'User created success', admin: false })
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await knex('users').select('*').where('email', email)

    if (!user[0]) {
      return res.status(400).json({
        message: 'User not found',
      })
    }

    if (user[0].password !== password) {
      return res.status(400).json({
        message: 'Wrong password',
      })
    }

    const flight = await knex('user_flights')
      .select('id', 'id_rocket')
      .where('id_user', user[0].id)

    if (flight[0]) {
      const rocket = await knex('rockets')
        .select('*')
        .where('id', flight[0].id_rocket)

      return res.json({
        message: 'Login success',
        flight: rocket[0],
      })
    }

    return res.json({
      message: 'Login success',
    })
  }
}

export default new User()
