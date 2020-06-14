import { Request, Response } from 'express'

import knex from '../database/connection'

class Rocket {
  async create(req: Request, res: Response) {
    const { model, seats, price, launch, company } = req.body

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

  async index(req: Request, res: Response) {
    const id = req.params.id

    const rocket = await knex('rockets')
      .join('companies', 'companies.id', '=', 'rockets.company')
      .where('rockets.id', id)
      .select('rockets.*', 'companies.name as company_name')

    return res.json({ rocket: rocket[0] })
  }

  async show(req: Request, res: Response) {
    const { date, time } = req.query

    if (time) {
      const rockets = await knex('rockets')
        .select('*')
        .where('launch', '=', `${date}T${time}`)

      return res.json({ rockets })
    }

    if (date) {
      const rockets = await knex('rockets')
        .select('*')
        .where(
          'launch',
          '>=',
          `${date}T00:00:00`,
          'and',
          'launch',
          '<=',
          `${date}T23:59:59`
        )

      return res.json({ rockets })
    }
    const rockets = await knex('rockets')

    return res.json({ rockets })
  }

  async showDates(req: Request, res: Response) {
    const datesList = await knex('rockets')
      .select('launch')
      .distinct('launch')

    const cleanDates = new Set(
      datesList.map((date) => date.launch.split('T')[0])
    )

    const dates = Array.from(cleanDates)

    return res.json({ dates })
  }

  async showTimes(req: Request, res: Response) {
    const { date } = req.query
    const timesList = await knex('rockets')
      .select('launch')
      .distinct('launch')
      .where(
        'launch',
        '>=',
        `${date}T00:00:00`,
        'AND',
        'launch',
        '<=',
        `${date}T23:59:59`
      )

    const cleanTimes = new Set(
      timesList.map((date) => date.launch.split('T')[1])
    )

    const times = Array.from(cleanTimes)

    return res.json({ times })
  }
}

export default new Rocket()
