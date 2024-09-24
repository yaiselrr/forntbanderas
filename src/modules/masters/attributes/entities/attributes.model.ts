/**Generate by ASGENS
 *@author Charlietyn
 *@date Thu Jul 11 15:39:04 GMT-04:00 2024
 *@time Thu Jul 11 15:39:04 GMT-04:00 2024
 */
import RBaseModel from "~co/rest/RestBase"
import * as columns from './attributes.columns'
import * as validation from './attributes.validation'
import dayjs from 'dayjs'


const Parent = await RBaseModel('attributes', 'masters/attributes')
export default class Attributes extends Parent {

    id
    name
    type
    strcuture
    created_at
    updated_at

    constructor(attributes = null) {
        super()
        if (attributes != null) {
            const structure = attributes.strcuture ? JSON.parse(attributes.strcuture) : []
            this.id = attributes.id || undefined
            this.name = attributes.name || null
            this.type = attributes.type || null
            this.strcuture = attributes.strcuture || null
            this.created_at = attributes.created_at ? dayjs(attributes.created_at) : null
            this.updated_at = attributes.updated_at ? dayjs(attributes.updated_at) : null
        }
    }

    set_attributes(attributes = null) {
        if (attributes != null) {
            this.id = attributes.id
            this.name = attributes.name
            this.type = attributes.type
            this.strcuture = attributes.strcuture
            this.created_at = dayjs(attributes.created_at)
            this.updated_at = dayjs(attributes.updated_at)
        }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Attributes.show_columns(['name', 'type', '_action'], true)


    get_id() {
        return this.id
    }

    class_name() {
        return 'Attributes'
    }


}

