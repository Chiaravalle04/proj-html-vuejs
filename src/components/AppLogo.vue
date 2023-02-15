<script>
export default {
    name: 'AppLogo',

    data() {
        return {
            logo: 'src/assets/img/avada-bakery-logo.png',
        }
    }
}
</script>

<template>

    <img :src="logo" alt="Logo Backery">
  
</template>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>