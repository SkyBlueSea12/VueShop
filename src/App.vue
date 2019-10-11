<template>
  <div id="app">
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
        
  </div>
</template>

<script>



export default {
  name: 'app',
  
  components: {
    
  },
  data(){
    return {
       
    }
    
  },
  
  
  
}
</script>

<style>
    @import "./assets/css/common.css";
</style>
