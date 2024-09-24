export type Validation = {
    validate: (specific?: Array<string | RegExp>, exclude?: boolean) => Promise<boolean>
    clear: () => void
    resetValidations: () => void
}

export type FormValidation = Validation & {
    vobject: Record<string, any>
}

export type SelectRef<M = any> = Validation & {
    selectedItems: M[]
    selectedItem: M
}

export type InputRef = Validation
