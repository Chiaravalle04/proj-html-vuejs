<script>
export default {
    name: 'MainSectionSeven',
}
</script>

<template>

    <section id="seasonal-products">

        <div class="main-container">

            <div class="text">
    
                <h5>try our seasonal products</h5>
    
                <h2>Order for pick-up or delivery to your home</h2>
    
                <a class="a-button" href="#">shop now</a>
    
            </div>

        </div>

    </section>
  
</template>

<style lang="scss" scoped>
section {
    margin: 100px 0 0;
    padding: 80px 0;
    height: 400px;
    background-image: url('../assets/img/call-to-action-bg.jpg');
    background-size: cover;
    .text {
        width: 900px;
        height: 100%;
        h2 {
            font-size: 50px;
            color: $fifthColor;
            margin: 30px 0;
        }
        .a-button {
            color: $firstColor;
            background-color: $fifthColor;
            &:hover {
                color: $secondColor;
                background-color: $firstColor;
            }
        }
    }
}
</style>