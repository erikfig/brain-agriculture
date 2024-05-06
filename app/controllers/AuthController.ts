import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { authValidator } from '#validators/auth'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(authValidator)

    const user = await User.findBy('email', email)

    if (user && await hash.verify(user.password, password)) {
      const token = await User.accessTokens.create(user);

      return {
        type: 'bearer',
        value: token.value!.release(),
      }
    }

    response.abort('Invalid credentials')
  }
}
