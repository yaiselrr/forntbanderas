export function scenario(
    validator,
    on: string | string[], // validate on scenarios
    scenarios: MaybeRef<string> | MaybeRef<string[]> // actual scenario
) {
    const vscenarios: ComputedRef<string[]> = computed!(() => {
        if (typeof unref(scenarios) == 'string') {
            return [unref(scenarios)] as string[]
        }
        return unref(scenarios) as string[]
    })

    if (typeof on == 'string') {
        on = [on]
    }

    return computed!(() => {
        if (vscenarios.value.some((val) => on.includes(val))) {
            return validator
        }
        return false
    })
}
