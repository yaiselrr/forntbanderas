import type { App, PropType } from 'vue'
import { Ref as _Ref, ComputedRef as _ComputedRef } from 'vue'
import { MaybeRef as _MaybeRef } from '@vueuse/core'

import { pt as proptypes } from '~/core/utils/propTypes'

import {
  FormValidation as _FormValidation,
  SelectRef as _SelectRef,
  InputRef as _InputRef,
} from '~c/form/src/shared/validation/interfaces'

import { TableModal as _TableModal } from '~/core/interfaces/modal.interface'

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

declare global {
  interface Window {
    // Global vue app instance
    __APP__: App<Element>
  }
  type SRecord = Record<string, any>
  type Ref<T = any> = _Ref<T>
  type MaybeRef<T> = _MaybeRef<T>
  type PropType<T> = _PropType<T>
  type ComputedRef<T = any> = _ComputedRef<T>
  type Class<T> = new (...args: any[]) => T
  type Nullable<T> = T | null | undefined
  type NonNullable<T> = T extends null | undefined ? never : T
  type RefType<T> = T | null
  type Recordable<T extends any = any> = Record<string, T>
  type SelectRef = _SelectRef
  type InputRef = _InputRef
  type FormValidation = _FormValidation | undefined
  type TableModal = _TableModal | undefined
  type TargetContext = '_self' | '_blank'

  type Fn<T = any, R = T> = {
    (...arg: T[]): R
  }

  //Global functions
  const log: (text: any, ...optionalParams: any[]) => void
}
