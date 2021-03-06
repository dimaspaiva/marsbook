import { Request, Response } from 'express'
import knex from '../database/connection'

class Companies {
  async create(req: Request, res: Response) {
    if (!req.body || !req.body.name) {
      return res.status(400).json({
        message: 'Data missing to create a companie',
      })
    }

    const companie = await knex('companies')
      .select('*')
      .where('name', req.body.name)

    if (companie[0]) {
      return res.status(400).json({ message: 'Companie already exists' })
    }

    const listId = await knex('companies').insert(req.body)

    return res.json({ message: 'Companie created success' })
  }

  async listAll(req: Request, res: Response) {
    const companies = await knex('companies').select('name', 'id')

    if (companies.length === 0) {
      return res.status(400).json({ message: 'None company registered' })
    }

    return res.json({ companies })
  }

  async index(req: Request, res: Response) {
    const id = Number(req.params.id)

    if (typeof id !== 'number') {
      return res.status(400).json({ message: 'Wrong id format' })
    }

    const company = await knex('companies')
      .select('id', 'name')
      .where('id', id)

    if (!company[0]) {
      return res.status(400).json({ message: 'Company not found!' })
    }

    return res.json({ company: company[0] })
  }

  async updateRating(req: Request, res: Response) {
    const { rate, id } = req.body

    if (!id || typeof rate === 'undefined') {
      return res.status(400).json({
        message: 'Missing date to rating',
      })
    }

    const company = await knex('companies')
      .select('rating', 'votes')
      .where('id', id)

    if (!company[0]) {
      return res.status(400).json({
        message: 'Company not exists',
      })
    }

    const newVotes = company[0].votes + 1
    const newRating = (company[0].rating + rate) / (company[0].votes + 1)

    await knex('companies').update({
      rating: newRating,
      votes: newVotes,
    })

    return res.json({ message: 'Updates success', rating: newRating })
  }
}

export default new Companies()
