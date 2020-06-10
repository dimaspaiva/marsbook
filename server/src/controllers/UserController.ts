import { Request, Response } from 'express'
import knex from '../database/connection'

class User {
  async create(req: Request, res: Response) {
    const idList = await knex('users').insert(req.body)
    console.log('[USR] Created...')

    return res.json({ message: 'User created success' })
  }
}

export default new User()
