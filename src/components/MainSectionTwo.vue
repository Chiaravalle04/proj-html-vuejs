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

            </div>

            <div class="card">

                <img src="../assets/img/wedding-bg.jpg" alt="Wedding">

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
            img {
               width: 100%;
            }
        }
    }
    
}
</style>