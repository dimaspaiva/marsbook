import { Request, Response } from 'express'
import knex from '../database/connection'

class UserFlight {
  async create(req: Request, res: Response) {
    const { id_rocket, id_user } = req.body

    const flight = await knex('rockets').select('*').where('id', id_rocket)

    if (!flight[0]) {
      return res.status(400).json({
        message: 'Flight dont exists',
      })
    }

    if (flight[0].seats === 0) {
      return res.status(400).json({
        message: 'Flight have no enought seats',
      })
    }

    const buyer = await knex('users').select('*').where('id', id_user)

    if (!buyer[0]) {
      return res.status(400).json({
        message: 'User dont exists',
      })
    }

    if (buyer[0].balance < flight[0].price) {
      return res.status(400).json({
        message: 'User have no enought money to buy',
      })
    }

    knex('user-flights').insert({
      id_rocket,
      id_user,
    })

    return res.json({ message: 'Buy success' })
  }
}

export default new UserFlight()
