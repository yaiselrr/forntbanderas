import { CSSProperties, defineAsyncComponent, FunctionalComponent } from 'vue'
import DotsSpinning from "~co/components/spinners/loaders/DotsSpinning.vue"

const noop = () => ({})

const loadingComponent: FunctionalComponent<{
  size: 'small' | 'medium' | 'large'
  containerClass: string
}> = (props) => {
  const style: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    ...props['style'],
  }
  return (
    <div style={style} class={props.containerClass}>
      <DotsSpinning size={props.size ?? 'small'} />
    </div>
  )
}

interface Options {
  size?: 'default' | 'small' | 'large'
  delay?: number
  timeout?: number
  loading?: boolean
  retry?: boolean
  containerClass?: string
}

export function createAsyncComponent(loader: Fn, options: Options = {}) {
  const {
    size = 'small',
    delay = 0,
    timeout = 30000,
    loading = false,
    retry = true,
    containerClass,
  } = options
  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <loadingComponent containerClass={containerClass} /> : undefined,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    // TODO
    timeout,
    // errorComponent
    // Defining if component is suspensible. Default: true.
    // suspensible: false,
    delay,
    /**
     *
     * @param {*} error Error message object
     * @param {*} retry A function that indicating whether the async component should retry when the loader promise rejects
     * @param {*} fail  End of failure
     * @param {*} attempts Maximum allowed retries number
     */
    onError: !retry
      ? noop
      : (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            // retry on fetch errors, 3 max attempts
            retry()
          } else {
            // Note that retry/fail are like resolve/reject of a promise:
            // one of them must be called for the error handling to continue.
            fail()
          }
        },
  })
}

export const DAC = createAsyncComponent
