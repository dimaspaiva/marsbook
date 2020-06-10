import { Request, Response } from 'express'
import knex from '../database/connection'

class User {
  async create(req: Request, res: Response) {
    if (!req.body.email || !req.body.name || !req.body.password) {
      return res
        .status(400)
        .json({ message: 'One or more creating data is missing' })
    }

    const user = await knex('users').select('*').where('email', req.body.email)

    if (user[0]) {
      return res.status(400).json({ message: 'E-mail is already in use' })
    }

    await knex('users').insert(req.body)

    return res.json({ message: 'User created success' })
  }
}

export default new User()
