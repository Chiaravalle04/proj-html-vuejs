<script>
export default {
    name: 'LinkBackToTop',
}
</script>

<template>

    <a class="back-to-top" href="#">
        <font-awesome-icon icon="fa-solid fa-arrow-up"/>
    </a>
  
</template>

<style lang="scss" scoped>
.back-to-top {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: $fifthColor;
    color: $firstColor;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    position: fixed;
    bottom: 75px;
    right: 5px;
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.51);
    z-index: 99;
}
</style>