import {isMobile} from "~co/components/imageViewer/src/utils.js"

export const customEvents = ["beforeOpen", "opened"]
const _isMobile = isMobile()
export const defualtGlobalOption = {
    // in spa no need history mode
    history: false,
    zoomEl: !_isMobile,
    shareEl: !_isMobile,
    shareButtons: [
        {
            id: "download", label: "Download image", url: "{{raw_image_url}}", download: true,
        },
    ],
}
export var GlobalOption;
(function (GlobalOption) {
    const _options = defualtGlobalOption
    GlobalOption.get = () => _options
    GlobalOption.extend = (...partials) => {
        Object.assign(_options, ...partials)
    }
})(GlobalOption || (GlobalOption = {}))
