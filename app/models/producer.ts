import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import PlantedCrop from './planted_crop.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Producer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare document: string
  
  @column()
  declare producerName: string
  
  @column()
  declare farmName: string
  
  @column()
  declare city: string
  
  @column()
  declare state: string
  
  @column()
  declare totalArea: string
  
  @column()
  declare agriculturalArea: string
  
  @column()
  declare vegetationArea: string

  @hasMany(() => PlantedCrop)
  declare plantedCrops: HasMany<typeof PlantedCrop>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}