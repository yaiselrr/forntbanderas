import {DAC} from "~h/factory/createAsyncComponent"

const RAvatarGroup = DAC(() => import('./src/RAvatarGroup.vue'))
const RAvatar = DAC(() => import('./src/RAvatar.vue'))
const RAvatarBadge = DAC(() => import('./src/RAvatarBadge.vue.vue'))

export {RAvatar, RAvatarGroup, RAvatarBadge}
