<!--  -->
<template>
  <div>个人中心</div>
</template>

<script>
export default {
 name :'My' ,
  data () {
    return {
    }
  },
mounted () {
   document.title = this.$route.meta.title
},
 activated () {
    document.title = this.$route.meta.title 
}
}
</script>

<style scoped>

</style>
