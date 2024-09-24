export const commonFilters = [
    {id: '$eq', text: 'Equals'},
    {id: '$ne', text: 'Not equal'},
    {id: 'null', text: 'Blank'},
    {id: 'not_null', text: 'Not Blank'},
]

export const numericFilters = [
    {id: '$lt', text: 'Less than'},
    {id: '$lte', text: 'Less than or equals'},
    {id: '$gt', text: 'Greater than'},
    {id: '$gte', text: 'Greater than or equals'},
]

export const stringFilters = [
    {id: '$sw', text: 'Starts with'},
    {id: '$ew', text: 'Ends with'},
    {id: '$c', text: 'Contains'},
]

export const logicalConditions = [
    {id: '$and', text: 'And'},
    {id: '$or', text: 'Or'},
]
