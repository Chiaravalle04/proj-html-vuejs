<script>
export default {
    name: 'MainSectionTwo',
}
</script>

<template>

    <section id="corporate-and-weddings">

        <div class="text">

            <h5>corporate & weddings</h5>

            <h2 class="title-section">Backing Special Moments</h2>

        </div>

        <div class="container-img d-flex">

            <div class="card">

                <img src="../assets/img/corporate-bg.jpg" alt="Corporate">

                <div class="my-hover bg-left d-flex jc-center">

                    <h5>international bakery</h5>

                    <h2>Corporate Events</h2>

                    <a class="a-button" href="">explore more</a>

                </div>

            </div>

            <div class="card">

                <img src="../assets/img/wedding-bg.jpg" alt="Wedding">

                <div class="my-hover bg-right d-flex jc-center">

                    <h5>private dining hall</h5>

                    <h2>Wedding & Parties</h2>

                    <a class="a-button" href="">explore more</a>

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
                .a-button {
                    width: 150px;
                    margin: 0 auto;
                    color: $fifthColor;
                    background-color: $firstColor;
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