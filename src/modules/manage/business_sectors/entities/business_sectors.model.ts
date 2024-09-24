/**Generate by ASGENS
 *@author Charlietyn
 *@date Fri Jul 26 13:58:15 GMT-04:00 2024
 *@time Fri Jul 26 13:58:15 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './business_sectors.columns'
import * as validation from './business_sectors.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('business_sectors', 'manage/business_sectors')
export default class Business_sectors extends Parent {
  id
  name
  description
  created_at
  updated_at

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.name = attributes.name || null
      this.description = attributes.description || null
      this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
    }
  }

  set_attributes(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.name = attributes.name
      this.description = attributes.description
      this.created_at = dayjs(attributes.created_at)
      this.updated_at = dayjs(attributes.updated_at)
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Business_sectors.show_columns(['*'], true)

  get_id() {
    return this.id
  }
  class_name() {
    return 'Business_sectors'
  }
}
