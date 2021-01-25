<template>
    <div class="modal-wrapper" v-if="show">
        <div class="modal">
            <div class="align-right modal-close" @click="closeModal()"> <i class="fa fa-times"></i> </div>
            <div class="modal-content" v-if="!confirm">
                <div class="modal-body">
                    <h1>Are You Sure?</h1>
                    <img :src="prize.image_url" alt="" width="150px" height="150px" class="modal-image">
                    <p>Redeem for {{ prize.name }}?</p>
                </div>
                <div class="modal-action">
                    <button class="btn btn-yes" @click="redeem()">Yes</button>
                    <button class="btn btn-cancel" @click="closeModal()">Cancel</button>
                </div>
            </div>
            <div class="modal-content" v-else>
                <div class="modal-body">

                    <h1>Congratulations</h1>
                    <p> You Redeemed {{ prize.name }}</p>
                </div>
                <div class="modal-action">
                    <router-link to="/" tag="button" class="btn btn-yes">More Prizes</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["show","prize"],
    data(){
        return {
            confirm: false
        }
    },
    methods: {
        closeModal(){
            this.confirm = false
            this.$emit('close')
        },
        redeem(){
            
            Meteor.call('redeemPrize', this.prize._id, (error) => {
                if (error) {
                    console.log(error)
                    alert(error.error)
                    this.$router.push( {path:"/"} )
                } else {
                    console.log("success")
                    this.confirm = true
                }
            })
        }
    }
}
</script>

<style scoped>
.modal-wrapper{
    display: flex;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 10;
    background: rgba(14, 3, 3, 0.2);
}
.modal{
    width: 540px;
    background-color: white;
    margin:auto;
    border-radius: 5px;
}
.modal-content{
    padding: 50px 0;
}
.modal-body{
    text-align:center;
}
.modal-image{
    border-radius: 50%;
}
.modal-close{
    padding: 10px;
    font-size: 32px;
}
.modal-action{
    text-align:center;
}
.btn{
    border: none;
    border-radius: 30px;
    padding: 15px 50px;
}
.btn-yes{
    background-color: #ffce0a;
}
.btn-cancel{
    background-color: #ebebeb;
}
</style>