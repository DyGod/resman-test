<template>
    <div>
        <banner text="Rewards" />
        <div class="container">
            <div class="page-description align-center">
                <p>Here is the full list of prizes that you can win.</p>
            </div>
            <div class="grid">
                <card v-for="prize in prizes" :key="prize._id" :prize="prize" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import Banner from './Banner.vue';


export default {
    props: ["prizes"],
    components: {
        Card,
        Banner
    },
}
</script>

<style scoped>
    .grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(360px,1fr));
        grid-template-rows: repeat(2, 450px);
        column-gap: 10px;
        row-gap: 10px;
    }

    .page-description{
        margin: 50px;
    }
</style>