import { createApp } from 'vue'
import App from './App.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')