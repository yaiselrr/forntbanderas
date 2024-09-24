import {RButton} from './buttons'
import {Spinner} from './spinners'

export function registerGlobalComponents(app) {
  app.component('RButton', RButton)
  app.component('Spinner', Spinner)
}
