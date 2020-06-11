import Router from 'express'

import User from './controllers/UserController'
import Companies from './controllers/CompaniesController'
import Rocket from './controllers/RocketsController'
import UserFlight from './controllers/UserFlightController'

const routes = Router()

routes.post('/users', User.create)
routes.post('/users/login', User.login)

routes.post('/userflight', UserFlight.create)

routes.get('/companies', Companies.listAll)
routes.get('/companies/:id', Companies.index)
routes.post('/companies', Companies.create)
routes.post('/companies/rating', Companies.updateRating)

routes.get('/rockets', Rocket.show)
routes.get('/rockets/dates', Rocket.showDates)
routes.get('/rockets/times', Rocket.showTimes)
routes.get('/rockets/:id', Rocket.index)
routes.post('/rockets', Rocket.create)
export default routes
