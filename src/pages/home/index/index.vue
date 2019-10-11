<template>
    <div class="page">
        <span>首页</span>
    </div>

</template>

<script>

export default {
  name:"Index",
   data() {
      return {
          
      }
   },
  
  mounted () {
       document.title = this.$route.meta.title 
  } ,
 
    

   
   

   

  
}
</script>

<style>
 

</style>