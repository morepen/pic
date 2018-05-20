<template>
  <div class="detail">
       <div class="content_detail">11</div>
  </div>
</template>

<script>
  import PicSidebar from '../../components/sidebar.vue'
  export default{
        components: {
            'pic-sidebar':PicSidebar
        },
        data(){
            return{
                isNowPage: true,
                title:'',
                content:''
            }
        },
        created() {
         if(this.$route.query){
           this.$store.state.contentshow=false;
           alert(this.$route.query.id);
          }
        },
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