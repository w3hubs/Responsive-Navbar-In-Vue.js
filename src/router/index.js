import { createRouter, createWebHistory } from 'vue-router'
import AboutVue from '../components/about.vue'
import ContactVue from '../components/Contact.vue'
import ServiceVue from '../components/Service.vue'
import Homevue from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/home',
      name: 'home',
      component: Homevue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutVue
     
    },
    {
      path: '/servie',
      name: 'servie',
      component: ServiceVue 
     
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactVue 
     
    },
    
  ]
})

export default router
