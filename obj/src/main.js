import Vue from 'vue';
import App from './App.vue';

import './assets/css/apply.css';
import './assets/css/public.css'
import './assets/css/share.css';
import './assets/css/slide.css';

import './assets/js/jquery';
import './assets/js/com';

import VueRouter from 'vue-router';
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.use(VueRouter);




// import routes from './routes.config';
import routes from './routes.config';
const router = new VueRouter({
    routes:routes
    // mode:'history'

});



new Vue({
  el: '#app',
  render: h => h(App),
    router
})
