export const fieldTypes = ['string', 'number', 'boolean', 'object']

export const fieldTypesSelect = [
    {key: 'string', text: 'String'},
    {key: 'number', text: 'Number'},
    {key: 'boolean', text: 'Boolean'},
    {key: 'object', text: 'Object'},
]

export type Field = {
    type: 'string' | 'number' | 'boolean' | 'object' | ''
    field: string
}
