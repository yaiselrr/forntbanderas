import PhotoSwipe from "photoswipe"
import defaultUI from "photoswipe/dist/photoswipe-ui-default"
import {customEvents, GlobalOption} from "~co/components/imageViewer/src/config.js"
import Vue from "vue"
import PswpUI from "@/components/pswpUI.vue"

export const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
export const isNum = (value) => typeof value === "number"
export const isStr = (value) => typeof value === "string"
export const isObj = (value) => Object.prototype.toString.call(value) === "[object Object]"
export const isFunction = (value) => Object.prototype.toString.call(value) === "[object Function]"
const isDef = (value) => (value !== undefined) && (value !== null)
export const isImg = (value) => value && value.tagName === "IMG"
const isEle = (node) => node.nodeType === 1
export const isBgImg = (el) => !isImg(el) && !!el.dataset.pswpSrc
/**
 * default error handle method
 * @param hint error hint
 */
export const errorHandler = (hint) => {
    throw new Error(`[vue-pswipe] ${hint}`)
}
/**
 * get current active PhotoSwipe, else null
 */
export var CurrentPswp;
(function (CurrentPswp) {
    /* eslint-disable no-shadow */
    let currentPswp = null
    const setupClean = (pswp) => {
        pswp.listen("destroy", () => {
            currentPswp = null
        })
    }
    CurrentPswp.get = () => currentPswp
    CurrentPswp.set = (pswp) => {
        currentPswp = pswp
        if (pswp)
            setupClean(pswp)
    }
})(CurrentPswp || (CurrentPswp = {}))
/**
 * get image size by polling
 * @param path the image src to get size
 * @return return promise
 */
export const getImageSize = (path) => new Promise((resolve) => {
    const img = new Image()
    let timer
    img.src = path
    img.addEventListener("error", () => {
        clearTimeout(timer)
    })
    const check = () => {
        if (img.width > 0 || img.height > 0) {
            return resolve({
                w: img.width,
                h: img.height,
            })
        }
        timer = window.setTimeout(check, 40)
    }
    check()
})
/**
 * returns the index of the first element predicate returns truthy
 * @param array the array to search
 * @param predicate the function invoked per iteration.
 * @return return the index of the found element, else -1.
 */
export const findIndex = (array, predicate) => {
    let index = -1
    array.some((item, idx) => {
        const result = predicate(item, idx)
        if (result)
            index = idx
        return result
    })
    return index
}
/**
 * parse picture index and gallery index from URL (#&pid=1&gid=2)
 * @return return parsed hash, eg: { pid: 1, gid: 2 }
 */
export const parseHash = () => {
    const hash = window.location.hash.substring(1)
    const params = {}
    if (hash.length < 5)
        return params
    hash.split("&").reduce((acc, cur) => {
        if (!cur)
            return acc
        const pair = cur.split("=")
        if (pair.length < 2)
            return acc
        const [key, value] = pair
        acc[key] = value
        return acc
    }, params)
    return params
}
/**
 * invoke querySelectorAll with specified context
 * @param selector css selector
 * @param context the query context
 * @return return the list of queries
 */
export const querySelectorList = (selector, context = document) => [...context.querySelectorAll(selector)]
/**
 * find nearest parent element
 * @param el begin element
 * @param predicate the function invoked from begin element to body
 * @returns return the found element or false
 */
export const closest = (el, predicate) => !!el &&
    isEle(el) &&
    (predicate(el) ? el : closest(el.parentNode, predicate))
/**
 * gets the property value at path of object
 * @param context the object to query
 * @param path the path of the property to get
 * @param defaultValue the value returned if the resolved value is undefined or cant resolved
 * @return return the resolved value.
 */
export const get = (context, path, defaultValue) => {
    try {
        const result = path.split(".").reduce((acc, cur) => acc[cur], context)
        return isDef(result)
            ? result
            : defaultValue
    } catch (err) {
        return defaultValue
    }
}
/**
 * singleton pattern
 * @param fn the function should be invoked only once
 * @return wrapped function
 */
export const single = (fn) => {
    let result
    // eslint-disable-next-line func-names
    return function (...args) {
        return result || (result = fn.apply(this, args))
    }
}
/**
 * append element to document.body
 * @param el the element to be append to body
 * @return return appended element
 */
const append = (el) => document.body.appendChild(el)
/**
 * append element to body only once
 */
export const appendOnce = single(append)
/**
 * set data-pswp-size to element
 * @param el the element to set data-pswp-size
 * @param size the size object contains w and h property
 */
export const setSize = (el, {w, h}) => {
    if (el && el.dataset) {
        // eslint-disable-next-line no-param-reassign
        el.dataset.pswpSize = `${w}x${h}`
    }
}
/**
 * get the image src according to auto
 * @param target the element to get the src
 * @param auto is it in auto mode
 */
export const getSrc = (target, auto) => (auto && isImg(target)
    ? target.src
    : target.dataset.pswpSrc || "")
/**
 * determine whether el is a valid element based on auto and filter
 */
export const relevant = (el, auto, filter) => (auto
    ? isImg(el) && filter(el)
    : !!el.dataset.pswpSrc)
/**
 * Convert the first letter to uppercase
 */
const upperFirst = (str) => str.replace(/^\S/, match => match.toUpperCase())
/**
 * convert property to pswp property, eg: src => pswpSrc
 */
const getPswpDataKey = (property) => `pswp${upperFirst(property)}`
/**
 * Set pswp data to the data attribute of the specified element
 */
export const setPswpData = (options, el) => {
    Object.keys(options).forEach((key) => {
        el.dataset[getPswpDataKey(key)] = `${options[key]}` // eslint-disable-line
    })
}
/**
 * Set the pswp data according to the type of the parameter
 */
export const setPswpDataByCond = (el, value) => {
    if (isStr(value))
        setPswpData({src: value}, el)
    if (isObj(value))
        setPswpData(value, el)
}
/**
 * preset loaded msrc size to PswpItem
 */
export const presetSize = (item) => {
    /* eslint-disable no-param-reassign */
    const {src, msrc, el} = item
    if (item.w || item.h || !msrc)
        return
    let img = new Image()
    img.src = msrc
    const {width: w, height: h} = img
    if (w && h) {
        item.w = w
        item.h = h
        src === msrc && setSize(el, {w, h})
    }
    img = null
}
/**
 * allow listen original PhotoSwipe event in Photoswipe component
 * @param pswp original PhotoSwipe
 * @param context Photoswipe component
 */
const bindEvent = (pswp, context) => {
    if (!context)
        return
    Object.keys(context.$listeners)
        .filter(event => !customEvents.includes(event))
        .forEach((event) => {
            const fn = context.$listeners[event]
            if (isFunction(fn)) {
                pswp.listen(event, (...args) => {
                    context.$emit(event, ...args)
                })
            }
        })
}
/**
 * set the size of the image after src is loaded
 * @param item the item that will be proxy
 * @param pswp original Photoswipe
 */
const hackItemImg = (item, pswp) => {
    let img = null
    Object.defineProperty(item, "img", {
        get() {
            return img
        },
        set(value) {
            if (isImg(value)) {
                value.addEventListener("load", () => {
                    const {naturalWidth: w, naturalHeight: h} = value
                    item.w = w
                    item.h = h
                    setSize(item.el, {w, h})
                    if (CurrentPswp.get() === pswp) {
                        pswp.updateSize(true)
                    }
                })
            }
            img = value
        },
    })
}
/**
 * handle item without set size, use msrc first
 * @param pswp original PhotoSwipe
 */
const handleWithoutSize = (pswp) => {
    pswp.listen("gettingData", (index, item) => {
        presetSize(item)
        if ((item.el && item.el.dataset.pswpSize)
            || Object.getOwnPropertyDescriptor(item, "img"))
            return
        // stop unexpected zoom-in animation
        if (pswp.currItem === item) {
            pswp.options.showAnimationDuration = 0
        }
        hackItemImg(item, pswp)
    })
}
const revertRotate = (pswp) => {
    pswp.listen("gettingData", (index, item) => {
        if (!item.verticalRotated)
            return
        const {w} = item
        item.w = item.h
        item.h = w
        item.verticalRotated = false
    })
}
/**
 * manipulate Photoswipe default UI element
 */
export var UI;
(function (UI) {
    UI.mount = () => {
        if (!UI.el) {
            const PswpUIComponent = new Vue(PswpUI).$mount()
            UI.el = PswpUIComponent.$el
        }
    }
    UI.append = () => {
        UI.mount()
        appendOnce(UI.el)
    }
})(UI || (UI = {}))
/**
 * define item.w/item.h if needed
 * @param items
 */
const defineSize = (items) => items.map((item) => {
    if (!isDef(item.w))
        item.w = 0
    if (!isDef(item.h))
        item.h = 0
    return item
})
/**
 * create PhotoSwipe instance, setup listener, init PhotoSwipe
 * @return return created original PhotoSwipe instance
 */
export const createPhotoSwipe = ({items, options, context,}) => {
    const pswp = new PhotoSwipe(UI.el, defaultUI, items, options)
    bindEvent(pswp, context)
    handleWithoutSize(pswp)
    revertRotate(pswp)
    CurrentPswp.set(pswp)
    pswp.init()
    return pswp
}
/**
 * used for this.$Pswp.open()
 */
export const manualCreate = ({items, options,}) => createPhotoSwipe({
    items: defineSize(items),
    options: Object.assign(Object.assign(Object.assign(Object.assign({}, GlobalOption.get()), {
        // disable transition entirely
        hideAnimationDuration: 0, showAnimationDuration: 0
    }), options), {
        // avoid refresh cant find match gallery
        history: false
    }),
})
/**
 * emulate background-size: contain, get calculated image size
 * @param areaWidth container width
 * @param areaHeight container height
 * @param width image width
 * @param height image height
 * @return calculated image size
 */
export const getContainSize = (areaWidth, areaHeight, width, height) => {
    if (width <= areaWidth && height <= areaHeight)
        return {w: width, h: height}
    const ratio = width / height
    const areaRatio = areaWidth / areaHeight
    return areaRatio < ratio
        ? {w: areaWidth, h: areaWidth / ratio}
        : {w: areaHeight * ratio, h: areaHeight}
}
/**
 * custom event
 */
export var Event;
(function (Event) {
    const event = {}
    Event.off = (name, fn) => {
        if (!fn)
            return event[name].length = 0
        const pools = event[name]
        const index = pools.indexOf(fn)
        if (index !== -1)
            pools.splice(index, 1)
    }
    Event.on = (name, fn) => {
        if (!event[name])
            event[name] = []
        event[name].push(fn)
        return () => Event.off(name, fn)
    }
    Event.once = (name, fn) => {
        const teardown = Event.on(name, (...args) => {
            teardown()
            fn(...args)
        })
    }
    Event.emit = (name, ...args) => {
        const pools = event[name]
        if (!Array.isArray(pools))
            return
        pools.forEach(fn => fn(...args))
    }
})(Event || (Event = {}))
/**
 * get next transform degree from current image element
 * @param img current image element
 * @param direction rotate direction
 * @return transform degree
 */
export const getTransformDeg = (img, direction) => {
    const deg = Number(img.dataset.rotateDeg) || 0
    const offsets = direction === "left" ? -90 : 90
    const transformDeg = deg + offsets
    img.dataset.rotateDeg = `${transformDeg}`
    return [deg, transformDeg]
}
/**
 * get container viewport size
 * @param container current container element
 * @param currentItem current pswp item
 * @return container viewport size
 */
export const getContainerSize = (container, currentItem) => {
    const containerWidth = container.clientWidth
    const containerHeight = currentItem.vGap
        ? container.clientHeight - currentItem.vGap.top - currentItem.vGap.bottom
        : container.clientHeight
    return {
        w: containerWidth,
        h: containerHeight,
    }
}
/**
 * get transform scale string
 * @param w scale width
 * @param h scale height
 */
export const getScale = (w, h = w) => `scale(${w}, ${h})`
/**
 * get transform scale
 * @param containerSize container size
 * @param img current image element
 * @param isVertical next rotate is vertical
 */
export const getCalculatedScale = (containerSize, img, isVertical) => {
    const {naturalWidth, naturalHeight} = img
    const {
        w: horizontalWidth,
        h: horizontalHeight
    } = getContainSize(containerSize.w, containerSize.h, naturalWidth, naturalHeight)
    const {
        w: verticalWidth,
        h: verticalHeight
    } = getContainSize(containerSize.w, containerSize.h, naturalHeight, naturalWidth)
    const animatedScale = isVertical
        ? getScale(verticalHeight / horizontalWidth)
        : getScale(horizontalWidth / verticalWidth, horizontalHeight / verticalHeight)
    const verticalSilencedScale = getScale(verticalHeight / verticalWidth, verticalWidth / verticalHeight)
    return [
        animatedScale,
        verticalSilencedScale,
    ]
}
/**
 * add vendor prefix to css property
 */
export const modernize = (() => {
    const cache = {}
    const detectElement = document.createElement("div")
    const {style} = detectElement
    return (styleKey) => {
        const cached = cache[styleKey]
        if (cached)
            return cached
        let key = styleKey
        /* istanbul ignore if */
        if (!isDef(style[styleKey])) {
            // eslint-disable-next-line array-callback-return
            ["Moz", "ms", "O", "Webkit"].some((prefix) => {
                const prefixedStyleKey = (prefix + upperFirst(styleKey))
                if (isDef(style[prefixedStyleKey])) {
                    return key = prefixedStyleKey
                }
            })
        }
        cache[styleKey] = key
        return key
    }
})()
/**
 * get prefixed transition end event name
 */
export const transitionEndEventName = (() => {
    const transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
    }
    const detected = modernize("transition")
    return transitions[detected]
})()
/**
 * register v-pswp directive if needed
 */
export const registerDirective = () => {
    const pswpDirective = Vue.directive("pswp")
    if (!pswpDirective) {
        Vue.directive("pswp", {
            bind(el, {value}) {
                setPswpDataByCond(el, value)
            },
            update(el, {value, oldValue}) {
                if (value === oldValue)
                    return
                setPswpDataByCond(el, value)
            },
        })
    }
}
