import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAngleDown,
    faAngleUp,
    faPaperclip,
    faXmark,
    faBars,
    faMessage,
} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp, faAngleDown, faPaperclip, faXmark, faBars, faMessage)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
