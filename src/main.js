
import Vue from 'vue';
import vuex from 'vuex';
import App from './App';
import router from './router';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store'



Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(vuex);
Vue.prototype.axios = axios;

router.beforeEach((to, from,next) => {
  let isLogin = sessionStorage.getItem("isLogin");
  if(to.path === '/logout'){
    sessionStorage.clear();
    next({path:'/login'});
  }else if(to.path === '/login'){
    if(isLogin != null){
      next({path:'/main'});
    }
  }else if(isLogin == null ){
    next({path:'/login'});
  }
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
});
