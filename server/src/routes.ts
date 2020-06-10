import Router from 'express'

import User from './controllers/UserController'
import Companies from './controllers/CompaniesController'

const routes = Router()

routes.post('/users', User.create)

routes.get('/companies', Companies.listAll)
routes.get('/companies/:id', Companies.index)
routes.post('/companies', Companies.create)

export default routes
