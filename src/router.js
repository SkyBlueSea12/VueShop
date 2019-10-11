 import Vue from "vue";
 import Router from "vue-router";
 Vue.use(Router);
  
 let router = new Router({
     mode:"hash",  
     base:process.env.BASE_URL,
     //记录滚动的位置解决白屏问题，必须配合keep-alive
     scrollBehavior(to,from,position){
         if(position){
             return position
         }else{
             return {x:0,y:0}
         }
     },
     routes:[
         {
            path:"/",
            name:"Main",
            redirect:'/index',
            component:()=>import('./pages/home/main/index'),
            children:[
               {
                  path:"index",
                  name:"Index",
                  component:()=>import('./pages/home/index/index'),
                  meta:{title:"首页",keepAlive:true}
                 
               },
               {
                  path:"cart",
                  name:"Cart",
                  component:()=>import('./pages/home/cart/index'),
                  meta:{title:"购物车",keepAlive:false}
                 
               },
               {
                  path:"my",
                  name:"My",
                  component:()=>import('./pages/user/index/index'),
                  meta:{title:"我的",keepAlive:false}
                 
               },
            ]
         },
        
       
     ]
 })

 router.beforeEach((to, from, next) => {
     if(to.meta.auth){
            if(Boolean(localStorage['isLogin'])){
                next();
            }else{
               next('/login')
            }
     }else{
        next();
     }
    
 })
 export default router;