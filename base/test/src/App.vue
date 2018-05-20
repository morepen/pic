<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
    <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
  </div>
</template>

<script>
  import TopHeader from './components/header.vue'
  import FooterNav from './components/footer.vue'
  export default{
   name: 'app',
   components: {
      'footer-nav':FooterNav,
      'top-header': TopHeader
    },
    data(){
      return{
        isNowPage: true
      }
    }
  }
</script>

<style>
@import './assets/css/public/default.css';
@import './assets/css/public/public.css';
body {
    background-color: #f5f7f9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main{
    margin: 100px auto;
    margin-bottom: 70px;
    max-width: 1000px;
    padding-bottom: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  font-size: 0;
  width: 0;
  margin: 0;
  padding: 0
}
.hc_block{
  display:block;
}
</style>
