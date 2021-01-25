<template>
  <header>
      <div class="align-left">
        <div class="flex">
          <img src="/images/logo.png" alt="" height="50" width="auto">
          
        </div>
      </div>
      <div class="align-right">
        <div class="flex align-right">
          <div class="user-icon" src="" alt=""></div>
          <span><strong>John Smith</strong></span>
        </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  display: grid;
  grid-template-columns: auto auto;
  padding: 20px;
  margin: 0;
}
.user-icon{
  display:inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #e8e8e8;
  margin: 0 10px;
}
</style>