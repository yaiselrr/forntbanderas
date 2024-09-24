/**Generate by ASGENS
 *@author Charlietyn
 *@date Mon Jun 24 22:33:51 GMT-04:00 2024
 *@time Mon Jun 24 22:33:51 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './products.columns'
import * as validation from './products.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('products', 'manage/products')
export default class Products extends Parent {
  id
  name
  code
  summary
  description
  deleted_at
  price
  rating
  slug_name
  stock
  enabled
  created_at
  updated_at
  category_id

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.name = attributes.name || null
      this.code = attributes.code || null
      this.summary = attributes.summary || null
      this.description = attributes.description || null
      this.deleted_at = attributes.deleted_at ? dayjs(attributes.deleted_at) : null
      this.price = attributes.price || null
      this.rating = attributes.rating || null
      this.slug_name = attributes.slug_name || null
      this.stock = attributes.stock || null
      this.enabled = attributes.enabled || null
      this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
      this.category_id = attributes.category_id || null
    }
  }

  set_attributes(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.name = attributes.name
      this.code = attributes.code
      this.summary = attributes.summary
      this.description = attributes.description
      this.deleted_at = dayjs(attributes.deleted_at)
      this.price = attributes.price
      this.rating = attributes.rating
      this.slug_name = attributes.slug_name
      this.stock = attributes.stock
      this.enabled = attributes.enabled
      this.created_at = dayjs(attributes.created_at)
      this.updated_at = dayjs(attributes.updated_at)
      this.category_id = attributes.category_id
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Products.show_columns(['*'], true)

  get_id() {
    return this.id
  }
  class_name() {
    return 'Products'
  }
}
