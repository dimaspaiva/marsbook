import Router from 'express'

import User from './controllers/UserController'

const routes = Router()

routes.post('/users', User.create)

export default routes
