import { Request, Response } from 'express'

import knex from '../database/connection'

class Rocket {
  async create(req: Request, res: Response) {
    const { model, seats, launch, company, price } = req.body

    if (!model || !seats || !launch || !company || !price) {
      return res
        .status(400)
        .json({ message: 'Missing required info to create a rocket' })
    }

    const companyList = await knex('companies')
      .select('id')
      .where('id', company)

    if (!companyList[0]) {
      return res.status(400).json({ message: 'Company not registered' })
    }

    const rocket = await knex('rockets')
      .select('model')
      .where('model', req.body.model)

    if (rocket[0]) {
      return res.status(400).json({ message: 'Rocket already exists' })
    }

    const idList = await knex('rockets').insert(req.body)

    return res.json({ rocketId: idList[0] })
  }
}

export default new Rocket()
