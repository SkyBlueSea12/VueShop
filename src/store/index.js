import Vue from "vue";
import Vuex from "vuex";
import Cart from "./modules/cart";
import Counter from "./modules/counter";
import User from "./modules/user"
Vue.use(Vuex);

 const store = new Vuex.Store({
    modules:{
        cart:Cart,
        counter:Counter,
        user:User
    }
 })

  export default store;