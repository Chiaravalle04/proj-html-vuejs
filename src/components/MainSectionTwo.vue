<script>
import AppContactUs from './AppContactUs.vue';

export default {
    name: 'MainSectionTwo',

    components: {
        AppContactUs,
    },

}
</script>

<template>

    <section id="contact">

        <div class="text">

            <h5>corporate & weddings</h5>

            <h2 class="title-section">Backing Special Moments</h2>

            <div class="help-hover d-flex jc-center">

                <span><font-awesome-icon icon="fa-solid fa-arrow-down" /></span>

                <p>  hover over the images </p>

                <span><font-awesome-icon icon="fa-solid fa-arrow-down" /></span>

            </div>

        </div>

        <div class="container-img d-flex">

            <div class="card">

                <img src="../assets/img/corporate-bg.jpg" alt="Corporate">

                <div class="my-hover bg-left d-flex jc-center">

                    <h5>international bakery</h5>

                    <h2>Corporate Events</h2>

                    <AppContactUs/>

                </div>

            </div>

            <div class="card">

                <img src="../assets/img/wedding-bg.jpg" alt="Wedding">

                <div class="my-hover bg-right d-flex jc-center">

                    <h5>private dining hall</h5>

                    <h2>Wedding & Parties</h2>

                    <AppContactUs/>

                </div>

            </div>

        </div>

    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0 0 0;
    .text {
        text-align: center;
        margin: 0 auto;
        .help-hover {
            width: 100%;
            margin: 20px 0;
            text-transform: uppercase;
            color: $textColor;
            p {
                font-size: 12px;
                margin: 0 20px;
            }
        }
    }
    .container-img {
        gap: 50px;
        .card {
            width: calc(100% / 2);
            position: relative;
            transition: all 0.3s ease-in-out;
            img {
               width: 100%;
            }
            &:hover .bg-left {
                visibility: visible;
                left: 0;
            }
            &:hover .bg-right {
                visibility: visible;
                right: 0;
            }
            .my-hover {
                background-size: cover;
                text-align: center;
                transition: all 0.5s ease-in-out;
                h2 {
                    color: $fifthColor;
                    margin: 40px 0;
                    font-size: 30px;
                }
            }
            .bg-left {
                background-image: url('../assets/img/corporate-hover-bg.jpg');
                top: 0;
                left: -1000px;
            }
            .bg-right {
                background-image: url('../assets/img/wedding-hover-bg.jpg');
                top: 0;
                right: -1000px;
            }
        }
    }
    
}
</style>