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

    knex('user_flights').insert({
      id_rocket,
      id_user,
    })

    return res.json({ message: 'Buy success' })
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params

    const order = await knex('user_flights').select('id').where('id', id)

    if (!order[0]) {
      return res.status(400).json({
        message: 'Order dont exists',
      })
    }

    await knex('user_flights')
      .update('deleted_at', knex.fn.now())
      .where('id', id)

    return res.json({
      message: 'Flight success on cancel',
    })
  }
}

export default new UserFlight()
