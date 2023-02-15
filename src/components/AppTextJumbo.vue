<script>
export default {
    name: 'AppTextJumbo',
}
</script>

<template>

    <div class="jumbo-text">

        <h5>fresh & tasty bakery every day</h5>

        <h1>the perfect fresh bread</h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit rem hic et quo? Fugit ullam sequi aut ducimus architecto repellendus. Fugit ullam sequi aut ducimus architecto repellendus.</p>
        
        <a class="a-button" href="#our-products">explore our products</a>

    </div>

</template>

<style lang="scss" scoped>
.jumbo-text {
    width: 450px;
    h1 {
        color: $firstColor;
        text-transform: capitalize;
        font-size: 50px;
        margin: 20px 0;
    }
    p {
        color: $textColor;
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
</style>