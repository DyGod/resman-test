<template>
    <div>
        <banner text="Rewards" />
        <div class="container" v-if="prize"> 
            <div class="prize-grid">
                <div class="prize-image">
                    <img :src="prize.image_url" alt="" width="100%" height="auto">
                </div>
                <div class="prize-action">
                    <div class="card">
                        <h1>{{ prize.name }}</h1>
                        <div class="card-button">
                            <button class="btn" @click="showModal = true">Redeem <i class="fa fa-chevron-right"></i></button>
                        </div>
                        <div class="card-stock">
                            {{ prize.quantity }} left in stock
                        </div>
                    </div>
                </div>
            </div>

            <div class="description-grid">
                <div><strong>Description</strong></div>
                <div>
                    {{ prize.description }}
                </div>
            </div>
        </div>
        <modal :show="showModal" @close="showModal = false" :prize="prize" />
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Modal from './Modal.vue'

export default {
    props: ["prizes"],
    components:{
        Banner,
        Modal
    },
    data(){
        return {
            showModal: false,
            prize: {}
        }
    },
    watch: { 
        prizes: function(newVal, oldVal) { // watch it
            this.prize = this.prizes.find( (val) => val._id == this.$route.params.id);
        }
    },
    mounted() {
        this.prize = this.prizes.find( (val) => val._id == this.$route.params.id);
    }
}
</script>

<style scoped>
.prize-grid{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    column-gap: 25px;
    row-gap: 25px;
    padding: 25px 0;
}
.prize-image{
    width:100%;
    height: 500px;
}
.prize-image img{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
}
.description-grid{
    border-top: solid 2px #e1e1e1;
    display:grid;
    grid-template-columns: 30% 70%;
    row-gap: 25px;
    padding: 50px 0;
}
.card{
    border-radius: 5px;
    background: white;
    padding: 20px;
}
.card .card-button{
    border-top: solid 2px #e1e1e1;
    border-bottom: solid 2px #e1e1e1;
    padding: 25px 0;
    margin: 10px 0;
}

.btn{
    background-color: #ffce0a;
    border: none;
    border-radius: 30px;
    padding: 15px 70px;
}
</style>