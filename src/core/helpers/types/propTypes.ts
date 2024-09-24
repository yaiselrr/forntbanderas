import { CSSProperties } from 'vue'
import { createTypes, VueTypesInterface, VueTypeValidableDef } from 'vue-types'
import { object } from 'vue-types'

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>
  readonly trueBool: VueTypeValidableDef<boolean>
}

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes

propTypes.extend([
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'trueBool',
    getter: true,
    type: Boolean,
    default: true,
  },
])
propTypes.sensibleDefaults = false
export { object, propTypes as pt }
