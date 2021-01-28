<template>
  <div class="card">
      <div class="card-image">
          <img :src="prize.image_url" alt="">
      </div>
      <div class="card-title align-center">
          <h4>{{ prize.name }}</h4>
      </div>
      <div class="card-action align-center">
          <router-link :to="'prize/' + prize._id" tag="button" class="btn">Redeem <i class="fa fa-chevron-right"></i></router-link>
      </div>
  </div>
</template>

<script>
export default {
    props: ["prize"]
}
</script>

<style scoped>
.card{
    border-radius: 5px;
    background: white;
}
.card-title, .card-action{
    padding: 20px;
}
.card-image {
    position: relative;
    width: 100%;
    height: 250px;
}
.card-image img{

    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
}

.btn{
    background-color: #ffce0a;
    border: none;
    border-radius: 40px;
    padding: 20px 40px;
}

</style>