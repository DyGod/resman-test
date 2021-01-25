<template>
  <div>
    <header-nav />
    <router-view :prizes="prizes" />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
import Prizes from '../api/collections/Prizes' 

export default {
  components: {
    HeaderNav,
    FooterNav
  },

  meteor: {
      $subscribe: {
          'prizes': []
      },
      prizes () {
          return Prizes.find({})
      }
  },
}
</script>

<style>
body{
  margin: 0px;
  background-color: #f3f3f3;
  font-family: "Sprint Sans Web Regular";
}
h1,h2,h3,h4,h5,h6,strong{
  font-family: "Sprint Sans Web Bold";
}
.flex{
  display: flex;
  align-items: center;
}
.align-left{
  text-align: left!important;
  justify-content: flex-start;
}
.align-right{
  text-align: right!important;
  justify-content: flex-end;
}
.align-center{
  text-align: center!important;
  justify-content: center;
}

.btn:hover{
    cursor: pointer;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

  
@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}
</style>
