
 import "babel-polyfill"; //es6转es5兼容ie
 import "url-search-params-polyfill";//让ie兼容URLSearchParams
import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
 import store from "./store/index"
 import {request} from "./assets/js/libs/request";
 import {safeUser} from "./assets/js/libs/utils";
import config from "./assets/js/conf/config.js"

Vue.config.productionTip = false
Vue.prototype.$request=request
Vue.prototype.$safeUser=safeUser
Vue.prototype.$config=config;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
 