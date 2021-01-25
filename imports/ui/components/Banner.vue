<template>
    <div class="title flex align-center">
        <h1>{{ text }}</h1>
    </div>
</template>

<script>
export default {
    props: ["text"]
}
</script>

<style>
.title{
    background-color: #0274bb;
    color: #ffffff;
    height: 200px;
    margin-bottom: 25px;
}
</style>