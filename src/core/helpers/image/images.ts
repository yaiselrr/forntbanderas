export const base64ImageToFile = (str) => {
    // extract content type and base64 payload from original string
    const pos = str.indexOf(';base64,')
    const type = str.substring(5, pos)
    const b64 = str.substr(pos + 8)

    // decode base64
    const imageContent = atob(b64)

    // create an ArrayBuffer and a view (as unsigned 8-bit)
    const buffer = new ArrayBuffer(imageContent.length)
    const view = new Uint8Array(buffer)

    // fill the view, using the decoded base64
    for (let n = 0; n < imageContent.length; n++) {
        view[n] = imageContent.charCodeAt(n)
    }

    // convert ArrayBuffer to Blob
    const blob = new Blob([buffer], {
        type: type,
    })

    const file = new File([blob], 'newImage.jpg')

    return file
}

export const multipleBase64ImagesToFormData = (images) => {
    const formData = new FormData()
    for (const img of images) {
        formData.append('images', base64ImageToFile(img.base64Image))
    }
    return formData
}

export const readImageAsUrl = (file, cb) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => cb(reader), false)
    reader.readAsDataURL(file)
}
