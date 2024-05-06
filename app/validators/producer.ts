import vine from '@vinejs/vine'
import { cnpjRule } from './rules/cnpj.js'

const producerValidation = {
  document: vine.string().trim().use(cnpjRule({validateApi: false})),
  producerName: vine.string().trim().minLength(3),
  farmName: vine.string().trim(),
  city: vine.string().trim(),
  state: vine.string().trim(),
  totalArea: vine.string().trim(),
  agriculturalArea: vine.string().trim(),
  vegetationArea: vine.string().trim(),
}

export const createProducerValidator = vine.compile(
  vine.object(producerValidation)
)

export const updateProducerValidator = vine.compile(
  vine.object(producerValidation)
)