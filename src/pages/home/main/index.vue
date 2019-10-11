<!--  -->
<template>
    
  <div>
        <router-view></router-view>
         <div class="bottom_nav">
             <ul :class="{active: homeActive}" @click="goPage('/index')"> 
                <li class="home"></li>
                <li>首页</li>
             </ul>
              <ul :class="{active: cartActive}" @click="goPage('/cart')">
                <li class="cart"></li>
                <li>购物车</li>
                <li class="spot"></li>
             </ul>
              <ul :class="{active: myActive}" @click="goPage('/my')">
                <li class="my"></li>
                <li>我的</li>
             </ul>
         </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
       homeActive:true,
       cartActive:false,
       myActive:false
    }
  },
    created () {
    this.changeBottomStyle(this.$route.path);
  },
    activated () {
      this.changeBottomStyle(this.$route.path);
    } ,
 
methods:{
   goPage(url){
     this.$router.replace(url)
     this.changeBottomStyle(url);
   },
   changeBottomStyle(url){
      switch(url){
        case "/index":
            this.homeActive=true;
            this.cartActive=false;
            this.myActive=false;
            break;
       case "/cart":
            this.homeActive=false;
            this.cartActive=true;
            this.myActive=false;
            break;
       case "/my":
            this.homeActive=false;
            this.cartActive=false;
            this.myActive=true;
            break;
    default:
            this.homeActive=true;
            this.cartActive=false;
            this.myActive=false;
      }

   },
  
   
},

}
</script>

<style scoped>
        .bottom_nav{
            width:100%;
            height:1rem;
            background:#fff;
            position: fixed;
            left:0;
            bottom: 0;
            color:#323232;
            border-top:1px solid #EFEFEF;
            display: flex;
            box-sizing: border-box;
            padding-left:6%;
            padding-right:6%;
            justify-content: space-between;
        } 
         .bottom_nav ul{
           width:0.9rem;
           position: relative;

         }
           .bottom_nav ul li:nth-child(1){
               width:0.6rem;
               height:0.6rem;
               /* background:url("../../../assets/images/common/home1.png") no-repeat center; */
               /* background-size:100%; */
               margin:0 auto;
           }
            .bottom_nav ul li:nth-child(1).home{
               background:url("../../../assets/images/common/home1.png") no-repeat center;
               background-size:100%;
            }
            .bottom_nav ul li:nth-child(2){
                text-align:center;
                font-size:0.28rem;
            }
              .bottom_nav ul.active li:nth-child(1).home{
               background:url("../../../assets/images/common/home2.png") no-repeat center;
               background-size:100%;
            }
             .bottom_nav ul.active li:nth-child(2){
                color:#EB1625;
            }
             .bottom_nav ul li:nth-child(1).cart{
               background:url("../../../assets/images/common/cart1.png") no-repeat center;
               background-size:100%;
            }
             .bottom_nav ul.active li:nth-child(1).cart{
               background:url("../../../assets/images/common/cart2.png") no-repeat center;
               background-size:100%;
            }
             .bottom_nav ul .spot{
               width:0.2rem;
               height:0.2rem; 
               background:#EB1625;
               border-radius: 100% 100%;
               position: absolute;
               right:0;
               top:0;
             }
              .bottom_nav ul li:nth-child(1).my{
               background:url("../../../assets/images/common/my1.png") no-repeat center;
               background-size:100%;
            }
             .bottom_nav ul.active li:nth-child(1).my{
               background:url("../../../assets/images/common/my2.png") no-repeat center;
               background-size:100%;
            }
</style>
