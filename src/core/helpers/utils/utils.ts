import {notification} from "ant-design-vue"

/**
 * Returns booleam if  the object contains this value in one of the attributes
 * @param {Object} object the object to compare
 * @param {String} value to contain
 */
export function filter_object(object, value) {
    if (!value) {
        return true
    }
    const keys = Object.keys(object)
    let i
    for (i of keys) {
        if (object[i] == null) {
            continue
        }
        if (object[i].toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
            return true
        }
    }
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function disableRightClick() {
    window.oncontextmenu = function () {
        return false
    }
}

export function disableF12Key() {
    const handler = function (event: any) {
        if (event.keyCode == 123) {
            event.preventDefault()
            return false
        } else if (
            (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
            (event.ctrlKey && event.shiftKey && event.keyCode == 74)
        ) {
            event.preventDefault()
            return false
        }
    }

    document.addEventListener('keydown', handler)
}

export function openWindow(
    url: string,
    opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean }
) {
    const {target = '__blank', noopener = true, noreferrer = true} = opt || {}
    const feature: string[] = []

    noopener && feature.push('noopener=yes')
    noreferrer && feature.push('noreferrer=yes')

    window.open(url, target, feature.join(','))
}

export function upperFirst(s: string) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function lowerFirst(s: string) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toLowerCase() + s.slice(1)
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export const openNotificationWithIcon = (type: string, title?: string, description?: string) => {
    notification[type]({
        message: title,
        description: description
    })
}

export function proxyToPlainObject(proxy: ProxyConstructor): any {
    if (!proxy)
        return {}
    const plainObject: any = {}
    for (const property of Object.keys(proxy)) {
        plainObject[property] = proxy[property]
    }
    return plainObject
}

export function compare_object(object1, object2) {
    return Object.keys(object1).every(function (element) {
        return Object.keys(object2).find(function (element2) {
            return element == element2
        })
    })
}

export function validateLetters(e: any) {
    const key = window.event ? e.which : e.keyCode
    if (
        (key > 64 && key < 91) || //letras mayusculas
        (key > 96 && key < 123) || //letras minusculas
        key == 45 || //retroceso
        key == 32 || //espacio
        key == 241 || //ñ
        key == 209 || //Ñ
        key == 225 || //á
        key == 233 || //é
        key == 237 || //í
        key == 243 || //ó
        key == 250 || //ú
        key == 193 || //Á
        key == 201 || //É
        key == 205 || //Í
        key == 211 || //Ó
        key == 218 //Ú
    ) {
        return true
    }

    e.preventDefault()
    return false
}

export function removeAccent(input) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

export function process_data(columns, dataSource) {
    const head = columns.filter(element => element.key !== '_action' && !element.hide_on_export).map(element => {
        return element.title
    })
    const data = dataSource.map((element) => {
        return columns.filter(column => column.key !== '_action' && !column.hide_on_export).map((column) => {
            let nested = null
            if (column.key.indexOf('.') != -1) {
                column.key.split('.').forEach((index) => {
                    nested = !nested ? element[index] : nested[index]
                })
            }
            return column.key.indexOf('.') == -1 ? element[column.key] : nested
        })
    })
    return {head, data}
}

export function exportToExcelVinstance(title, columns, dataSource) {
    const {head, data} = process_data(columns, dataSource)
    exportToExcel(head, data, title)
}

export function validateAlphanumeric(e: any) {
    const key = window.event ? e.which : e.keyCode
    if (
        (key > 64 && key < 91) || //letras mayusculas
        (key > 96 && key < 123) || //letras minusculas
        key == 45 || //retroceso
        key == 32 || //espacio
        key == 241 || //ñ
        key == 209 || //Ñ
        key == 225 || //á
        key == 233 || //é
        key == 237 || //í
        key == 243 || //ó
        key == 250 || //ú
        key == 193 || //Á
        key == 201 || //É
        key == 205 || //Í
        key == 211 || //Ó
        key == 188 || // ,
        key == 190 || // .
        key == 222 || // "
        (key >= 48 && key <= 57)
    ) {
        return true
    }
    e.preventDefault()
    return false
}

export function isValidPhoneNumber(phone: string) {
    return (
        phone && Number.isInteger(Number.parseInt(phone)) && phone.length == 8 && phone.startsWith('5')
    )
}

export function validateNumbers(e: any) {
    const key = window.event ? e.which : e.keyCode
    if ((key < 48 || key > 57) && key != 46) {
        e.preventDefault()
        return false
    }
    return true
}

export function exportToCSV(title, columns, dataSource) {
    const {head, data} = process_data(columns, dataSource)
    const csvContent = [head].concat(data).map(e => e.join(',')).join('\n')
    const hiddenElement = document.createElement('a')
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent)
    hiddenElement.target = '_blank'
    hiddenElement.download = title + '.csv'
    hiddenElement.click()
}

export function extract_user_data(name, token) {
    const user_data = jwtDecode(token).payload
    return {[name]: user_data.sub, ...user_data}
}

export function exportToExcel(head, data, title = "export.xls") {
    const uri = 'data:application/vnd.ms-excel;base64,'
    const template = '' +
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">' +
        '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>' +
        '<body>' +
        '<table>' +
        '{table}' +
        '</table>' +
        '</body>' +
        '</html>'
    let table = '<thead><tr>'
    head.forEach((element) => {
        table += '<th style="width: 250px">' + element + '</th>'
    })
    table += '</tr></thead><tbody>'
    data.forEach((element) => {
        table += '<tr>'
        element.forEach((data) => {
            table += '<td>' + data + '</td>'
        })
        table += '</tr>'
    })
    table += '</tbody>'

    const base64 = function (s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    }
    const format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (_, p) {
            return c[p]
        })
    }

    const ctx = {
        worksheet: 'Worksheet',
        table: table
    }
    const link = document.createElement('a')
    link.download = title
    link.href = uri + base64(format(template, ctx))
    link.click()
}

export function allow_character(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    const numeros = '0123456789'
    const decimal = '0123456789,-'
    const date = '0123456789/'
    const time = '0123456789:'
    const issn = '0123456789-'
    const none = ''
    const caracteres = ' abcdefghijklmn?opqñrstuvwxyzABCDEFGHIJKLMÑN?OPQRSTUVWXYZéáíóú@_.,$%^&*()_+!~'
    const numeros_caracteres = numeros + caracteres
    const teclas_especiales = []
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
    // Seleccionar los caracteres a partir del par?metro de la funci?n
    switch (permitidos) {
        case 'num':
            permitidos = numeros
            break
        case 'car':
            permitidos = caracteres
            break
        case 'num_car':
            permitidos = numeros_caracteres
            break
        case 'dec':
            permitidos = decimal
            break
        case 'date':
            permitidos = date
            break
        case 'time':
            permitidos = time
            break
        case 'issn':
            permitidos = issn
            break
        case 'none':
            permitidos = none
            break
    }

    // Obtener la tecla pulsada
    const evento: any = elEvento || window.event
    const codigoCaracter = evento.charCode || evento.keyCode
    const caracter = String.fromCharCode(codigoCaracter)

    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    let tecla_especial = false
    for (const i in teclas_especiales) {
        if (codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true
            break
        }
    }
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial

}

export function filter_object_column(object, value, columns) {
    if (!value) {
        return true
    }
    let i
    const iter = 0
    const keys = Object.values(columns)
    for (i of keys) {

        if (!i.dataIndex && !i.use_filter) {
            if (iter >= keys.length) {
                return false
            }
            continue
        }

        const array = i.key.split('.')
        if (object[array.length > 0 ? array[0] : i.key] instanceof Object) {
            let data = object
            array.forEach((iter) => {
                if (data) {
                    data = data[iter]
                }
            })
            if (data != null && data.toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
                return true
            }
        } else {
            if (object[array[0]] != null && object[array[0]].toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
                return true
            }
        }
    }
}


export function capitalize(s) {
    if (typeof s !== 'string') return s
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function dynamic_import(regexp, requireModule, withModule = false) {
    const classes = {}
    requireModule.keys().forEach(fileName => {
        const route = fileName.split("/")
        const module = withModule && route[route.indexOf('modules') + 1] !== "." ? route[route.indexOf('modules') + 1] + "." : ""
        const moduleName = module + capitalize(fileName.replace(regexp, '').substr(fileName.replace(regexp, '').lastIndexOf('/') + 1, fileName.length))
        classes[moduleName] = {
            ...requireModule(fileName)
        }
    })
    return classes
}


export const jwtDecode = (t: any) => {
    const token: any = {}
    token.raw = t
    token.header = JSON.parse(window.atob(t.split('.')[0]))
    token.payload = JSON.parse(window.atob(t.split('.')[1]))
    return (token)
}

export const convert_to_phone = function (t) {
    if (t) {
        const x = t.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        return !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '')
    }
    return ''
}

export const objectToFormData = function (obj: any, form?, namespace?) {
    const fd = form || new FormData()
    let formKey

    for (const property in obj) {
        if (obj[property] === undefined) {
            continue
        }
        // if (obj.hasOwnProperty(property)) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']'
            } else {
                formKey = property
            }
            // if the property is an object, but not a File,
            // use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

                objectToFormData(obj[property], fd, property)

            } else {

                // if it's a string or a File object
                const value = obj[property] == true || obj[property] == false ? +obj[property] : obj[property]
                fd.append(formKey, value)
            }

        }
    }

    return fd

}

export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}

export const birthDateFromCI = (ci) => {
    const year = ci.substr(0, 2)
    const month = ci.substr(2, 2)
    const day = ci.substr(4, 2)
    return new Date(`${year}/${month}/${day}`)
}

export const validateNumber = (e) => {
    const key = e.keyCode
    if (key < 48 || key > 57) {
        e.preventDefault()
    }
}

export const getBirthDate = (ci) => {
    const year = parseInt(ci.substr(0, 2))
    const month = ci.substr(2, 2)
    const day = ci.substr(4, 2)
    const dateString = `${year > 20 ? '19' : '20'}${year}/${month}/${day}`
    const date = new Date(dateString)

    return date
}
export const getSex = (ci) => {
    const sexNumber = ci[ci.length - 2]
    return sexNumber % 2 === 0 ? 'Masculino' : 'Femenino'
}

export const getAge = (date) => {
    const ageDifMs = Date.now() - new Date(date).getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export function set_proxy(obj) {
    "use strict"
    if (typeof Proxy == "undefined") {
        throw new Error("This browser doesn't support Proxy")
    }
    obj = new Proxy(obj, {
        set(target, name: string, value, receiver) {
            if (!Reflect.has(target, name)) {
                console.warn(`Setting non-existent property '${name}', initial value: ${value}`)
            } else {
                target._changed_attributes = Object.assign(target._changed_attributes || {}, {[name]: value})
            }
            return Reflect.set(target, name, value, receiver)
        }
    })
    return obj
}



