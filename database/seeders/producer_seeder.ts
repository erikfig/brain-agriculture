import PlantedCrop from '#models/planted_crop'
import Producer from '#models/producer'
import Factory from '@adonisjs/lucid/factories'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

const plantedCrops = [
  `Soja`,
  `Milho`,
  `Algodão`,
  `Café`,
  `Cana de Açucar`,
]

export const plantedCropFactory = Factory.define(PlantedCrop, async ({ faker }) => {
  return {
      name: plantedCrops[faker.number.int(plantedCrops.length)],
    }
}).build()

const ProducerFactory = Factory.define(Producer, async ({ faker }) => {
  return {
      document: '00.000.000/0000-00',
      producerName: faker.person.firstName(),
      farmName: faker.company.name(),
      city: faker.location.city(),
      state: faker.location.state(),
      totalArea: faker.number.int().toString(),
      agriculturalArea: faker.number.int().toString(),
      vegetationArea: faker.number.int().toString(),
    }
})
  .relation('plantedCrops', () => plantedCropFactory)
  .build()

export default class extends BaseSeeder {
  async run() {
    ProducerFactory.with('plantedCrops', 3).createMany(20)
  }
}


// await Producer.create(
//   {
//     document: '',
//     producerName: '',
//     farmName: '',
//     city: '',
//     state: '',
//     totalArea: '',
//     agriculturalArea: '',
//     vegetationArea: '',
//   },
// )
