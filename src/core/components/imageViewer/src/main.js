import {GlobalOption} from "~co/components/imageViewer/src/config.js"
import {registerDirective, manualCreate, UI} from "~co/components/imageViewer/src/utils.js"
import PhotoswipeComponent from "@/components/photoswipe.vue"

const install = (Vue, options) => {
    if (options)
        GlobalOption.extend(options)
    registerDirective()
    Vue.component("Photoswipe", PhotoswipeComponent)
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$Pswp = {
        open(args) {
            UI.append()
            return manualCreate(args)
        },
    }
}
export const Photoswipe = PhotoswipeComponent
export default install
