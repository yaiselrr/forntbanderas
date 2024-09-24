import {
    InjectionKey,
    provide,
    inject,
    reactive,
    readonly as defineReadonly,
    defineComponent,
    UnwrapRef,
} from 'vue'
import type {Ref} from 'vue'

export interface CreateContextOptions {
    readonly?: boolean
    createProvider?: boolean
    native?: boolean
}

type ShallowUnwrap<T> = {
    [P in keyof T]: UnwrapRef<T[P]>
}

export function createContext<T>(
    context: any,
    key: InjectionKey<T> = Symbol(),
    options: CreateContextOptions = {}
) {
    const {readonly = true, createProvider = false, native = false} = options

    const state = reactive(context)
    const provideData = readonly ? defineReadonly(state) : state
    !createProvider && provide(key, native ? context : provideData)

    const Provider = createProvider
        ? defineComponent({
            name: 'Provider',
            inheritAttrs: false,
            setup(_, {slots}) {
                provide(key, provideData)
                return () => slots.default?.()
            },
        })
        : null

    return {Provider, state}
}

export function useContext<T>(key: InjectionKey<T>, native?: boolean): T
export function useContext<T>(key: InjectionKey<T>, defaultValue?: any, native?: boolean): T

export function useContext<T>(
    key: InjectionKey<T> = Symbol(),
    defaultValue?: any
    // ): /* ShallowUnwrap<T>  */ Ref<T> {
): T {
    return inject!(key, defaultValue || {})
}

/** one way to use it:
 * @example:
 import { InjectionKey, Ref } from 'vue';
 import { createContext, useContext } from '/@/hooks/core/useContext';

 export interface AppProviderContextProps {
		  prefixCls: Ref<string>;
		  isMobile: Ref<boolean>;
		}

 const key: InjectionKey<AppProviderContextProps> = Symbol();

 export function createAppProviderContext(context: AppProviderContextProps) {
		  return createContext<AppProviderContextProps>(context, key);
		}

 export function useAppProviderContext() {
		  return useContext<AppProviderContextProps>(key);
		}
 */
