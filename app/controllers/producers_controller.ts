import type { HttpContext } from '@adonisjs/core/http'
import ProducersService from '../service/producers_service.js';
import { inject } from '@adonisjs/core';

@inject()
export default class ProducersController {
  constructor(private service: ProducersService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.service.all();
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return this.service.create(request)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return this.service.findById(params['id'])
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return this.service.update(params['id'], request)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return this.service.destroy(params['id'])
  }
}