import type { Request } from '@adonisjs/core/http'
import Producer from '#models/producer'
import { createProducerValidator, updateProducerValidator } from '#validators/producer';

export default class ProducersService {

  async all() {
    return Producer
      .query()
      .orderBy('updatedAt', 'desc');
  }

  async findById(id: number) {
    const producer = await Producer.findByOrFail({ id });

    return producer;
  }

  async create(request: Request) {
    const data = await request.validateUsing(createProducerValidator)
    return Producer.create(data);
  }

  async update(id: number, request: Request) {
    const data = await request.validateUsing(updateProducerValidator)

    const producer = await this.findById(id);

    if (!producer) {
      throw new Error('Producer not found');
    }

    return producer.merge(data).save();
  }

  async destroy(id: number) {
    const producer = await this.findById(id);

    if (!producer) {
      throw new Error('Producer not found');
    }

    return producer.delete();
  }
}