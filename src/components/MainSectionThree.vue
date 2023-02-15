<script>
import AppSliderSmall from './AppSliderSmall.vue';

export default {
    name: 'MainSectionThree',

    components: {
        AppSliderSmall,
    }
}
</script>

<template>

    <section id="shopping" class="d-flex ai-center">

        <div class="text">

            <h3>Find a freshly baked product perfect for you</h3>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit rem hic et quo? Fugit ullam sequi aut ducimus architecto repellendus.</p>

        </div>

        <div class="slider-section-three d-flex">

            <AppSliderSmall/>

        </div>
                
    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0 0 0;
    justify-content: space-between;
    .text {
        width: 400px;
        text-align: center;
        h3 {
            color: $firstColor;
            margin: 20px 0;
            font-size: 25px;
        }
    }
    .slider-section-three {
        width: 850px;
        height: 350px;
        position: relative;
        justify-content: space-between;
    }
}
</style>