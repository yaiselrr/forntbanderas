/**Generate by ASGENS
 *@author Charlietyn
 *@date Fri Jul 26 13:58:15 GMT-04:00 2024
 *@time Fri Jul 26 13:58:15 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './dealers.columns'
import * as validation from './dealers.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('dealers', 'security/dealers')
export default class Dealers extends Parent {
  id
  contact
  company
  cif
  company_email
  phone
  web_page
  address
  business_sector_id
  user_id
  created_at
  updated_at

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.contact = attributes.contact || null
      this.company = attributes.company || null
      this.cif = attributes.cif || null
      this.company_email = attributes.company_email || null
      this.phone = attributes.phone || null
      this.web_page = attributes.web_page || null
      this.address = attributes.address || null
      this.business_sector_id = attributes.business_sector_id || null
      this.user_id = attributes.user_id || null
      this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
    }
  }

  set_attributes(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.contact = attributes.contact
      this.company = attributes.company
      this.cif = attributes.cif
      this.company_email = attributes.company_email
      this.phone = attributes.phone
      this.web_page = attributes.web_page
      this.address = attributes.address
      this.business_sector_id = attributes.business_sector_id
      this.user_id = attributes.user_id
      this.created_at = dayjs(attributes.created_at)
      this.updated_at = dayjs(attributes.updated_at)
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Dealers.show_columns(['*'], true)

  get_id() {
    return this.id
  }
  class_name() {
    return 'Dealers'
  }
}
