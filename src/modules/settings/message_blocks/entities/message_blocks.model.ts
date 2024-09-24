/**Generate by ASGENS
 *@author Charlietyn
 *@date Thu Jul 11 15:39:04 GMT-04:00 2024
 *@time Thu Jul 11 15:39:04 GMT-04:00 2024
 */
import RBaseModel from '~co/rest/RestBase'
import * as columns from './message_blocks.columns'
import * as validation from './message_blocks.validation'
import dayjs from 'dayjs'

const Parent = await RBaseModel('message_blocks', 'settings/message_blocks')
export default class Message_blocks extends Parent {
  id
  name
  color
  message_text
  block_image
  image
  // created_at
  // updated_at

  constructor(attributes = null) {
    super()
    if (attributes != null) {
      this.id = attributes.id || undefined
      this.name = attributes.name || null
      this.color = attributes.color || null
      this.message_text = attributes.message_text || null
      this.block_image = attributes.block_image || null
      this.image = attributes.image || null
      // this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
      // this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
    }
  }

  set_blocks(attributes = null) {
    if (attributes != null) {
      this.id = attributes.id
      this.name = attributes.name
      this.color = attributes.color
      this.message_text = attributes.message_text
      this.block_image = attributes.block_image
      this.image = attributes.image
      // this.created_at = dayjs(attributes.created_at)
      // this.updated_at = dayjs(attributes.updated_at)
    }
  }

  static validations = validation.validations

  static feedbacks = validation.feedbacks

  static columns = columns.columns
  static visible_columns = Message_blocks.show_columns(['name', 'color', 'block_image', '_action'], true)

  get_id() {
    return this.id
  }
  class_name() {
    return 'Message_blocks'
  }
}
