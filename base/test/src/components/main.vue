<template>
  <div class="main">
       <pic-list></pic-list>
       <pic-sidebar></pic-sidebar>
  </div>
</template>

<script>
  import PicList from './list.vue'
  import PicSidebar from './sidebar.vue'
  export default{
        components: {
            'pic-list':PicList,
            'pic-sidebar':PicSidebar
        }
   }
</script>
<style>
 .main{
   margin: 100px auto;
    max-width: 1100px;
    padding: 0 10px;
    overflow: hidden;
  }
</style>

