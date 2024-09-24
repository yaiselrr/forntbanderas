/**Generate by ASGENS
 *@author Charlietyn
 *@date Mon Jun 24 22:33:51 GMT-04:00 2024
 *@time Mon Jun 24 22:33:51 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './permissions.columns'
import * as validation from './permissions.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('permissions', 'security/permissions')
export default class Permissions extends Parent {
  id
  label
  name
  created_at
  updated_at

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.name = attributes.name || null
      this.label = attributes.label || null
      this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
    }
  }

  set_attributes(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.name = attributes.name
      this.label = attributes.label
      this.created_at = dayjs(attributes.created_at)
      this.updated_at = dayjs(attributes.updated_at)
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Permissions.show_columns(['*'], true)

  get_id() {
    return this.id
  }
  class_name() {
    return 'Permissions'
  }
}
