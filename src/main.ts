import './assets/main.css'
import './themes/admin/config/sass/main.scss'
import 'uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './config/router'
import {registerGlobalComponents} from "~co/components/registerGlobalComponents"
import CKEditor from '@ckeditor/ckeditor5-vue'
const app = createApp(App)
app.use(router)
app.use(CKEditor)
app.use(createPinia())
registerGlobalComponents(app)
app.mount('#app')
