/**Generate by ASGENS
*@author Charlietyn
*@date Thu Dec 30 02:00:31 GMT-05:00 2021
*@time Thu Dec 30 02:00:31 GMT-05:00 2021
*/
import * as utils from '../utils/utils'

const requireModule = import.meta.glob('/src/**/*.model.ts',{eager:true});
const regexp = new RegExp(/(\.\/|\.model.ts)/g)
const classes = utils.dynamic_import(regexp, requireModule)

export function instance(class_name:string, attributes) {
    const class_instance = new classes[class_name].default(attributes)
    return utils.set_proxy(class_instance)
}

export function statics(class_name) {
    return classes[class_name].default
}

export default classes
