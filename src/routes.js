
import { createRouter, createWebHashHistory } from "vue-router";


import HomePage from './components/HomePage.vue'



const router = createRouter({
     history: createWebHashHistory(),
     routes: [
          { path: '/:index?', component: HomePage ,props:true}
     ]


});


export default router;