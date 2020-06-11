import Router from 'express'

import User from './controllers/UserController'
import Companies from './controllers/CompaniesController'
import Rocket from './controllers/RocketsController'

const routes = Router()

routes.post('/users', User.create)

routes.get('/companies', Companies.listAll)
routes.get('/companies/:id', Companies.index)
routes.post('/companies', Companies.create)

routes.get('/rockest/:id', Rocket.index)
routes.post('/rockets', Rocket.create)
export default routes
