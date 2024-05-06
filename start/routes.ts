/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProducersController from '#controllers/producers_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import AuthController from '#controllers/AuthController'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/api/auth', [AuthController, 'login'])

router.resource('/api/producers', ProducersController).apiOnly()
.use('*', middleware.auth({
  guards: ['api']
}))
