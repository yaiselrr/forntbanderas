/**Generate by ASGENS
 *@author Charlietyn
 *@date Thu Jul 11 15:39:04 GMT-04:00 2024
 *@time Thu Jul 11 15:39:04 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './coupons.columns'
import * as validation from './coupons.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('coupons', 'sale/coupons')
export default class Coupons extends Parent {
  id
  code
  type_id
  coupon_value
  available_quantity
  start_date
  end_date
  conditions
  created_at
  updated_at

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.code = attributes.code || null
      this.type_id = attributes.type_id || null
      this.coupon_value = attributes.coupon_value || null
      this.available_quantity = attributes.available_quantity || null
      this.conditions = attributes.conditions || null
      this.start_date = attributes.start_date ? dayjs(attributes.start_date) : null
      this.end_date = attributes.end_date ? dayjs(attributes.end_date) : null
      this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
    }
  }

  set_attributes(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.code = attributes.code
      this.type_id = attributes.type_id
      this.coupon_value = attributes.coupon_value
      this.available_quantity = attributes.available_quantity
      this.conditions = attributes.conditions
      this.start_date = dayjs(attributes.start_date)
      this.end_date = dayjs(attributes.end_date)
      this.created_at = dayjs(attributes.created_at)
      this.updated_at = dayjs(attributes.updated_at)
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Coupons.show_columns(
    ['*'],
    true
  )

  get_id() {
    return this.id
  }
  class_name() {
    return 'Coupons'
  }
}
