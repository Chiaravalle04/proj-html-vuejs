<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';

export default {
    name: 'AppMain',

    components: {
        MainSectionOne,
        MainSectionTwo,
    }
}
</script>

<template>

    <main>

        <div class="main-container">

            <MainSectionOne/>

            <MainSectionTwo/>

        </div>

    </main>
  
</template>

<style lang="scss" scoped>

</style>