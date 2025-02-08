import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong, faTurkishLiraSign, faCheck, faXmark, faPhone, faEnvelope, faLocationDot, faFax, faChevronUp, faMap, faChevronLeft, faChevronRight, faLayerGroup, faUsers, faCartShopping, faStore, faSackDollar, faCashRegister, faAddressBook, faCircleNodes, faCommentsDollar, faCircleRight, faTruck, faCircleCheck, faLock, faTags} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong, faTurkishLiraSign, faCheck, faXmark, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faPhone, faEnvelope, faLocationDot, faFax, faChevronUp, faMap, faChevronLeft, faChevronRight, faLayerGroup, faUsers, faCartShopping, faStore, faSackDollar, faCashRegister, faAddressBook, faCircleNodes, faCommentsDollar, faCircleRight, faTruck, faCircleCheck, faLock, faTags)


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

const head = createHead();

app.use(router)
app.use(head); 

app.mount('#app')