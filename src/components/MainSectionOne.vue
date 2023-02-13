<script>
import AppSlider from './AppSlider.vue';

export default {
    name: 'MainSectionOne',

    components: {
        AppSlider
    },

}
</script>

<template>

    <section id="our-products" class="d-flex ai-center">

        <div class="text">

            <h5>our products</h5>

            <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made wuith all natural, all organic ingredients.</h2>

            <a class="a-button" href="#">start shopping</a>

        </div>

        <div class="slider-section-one d-flex">

            <AppSlider />

        </div>

    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0;
    justify-content: space-between;
    .text {
        width: 400px;
        h2 {
            font-size: 30px;
            margin: 30px 0;
            color: $firstColor;
        }
        .a-button {
            color: $fifthColor;
            background-color: $firstColor;
            padding: 0 20px;
        }
    }
    .slider-section-one {
        width: 820px;
        height: 510px;
        position: relative;
        justify-content: space-between;
    }
}
</style>