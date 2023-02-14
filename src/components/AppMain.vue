<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';
import MainSectionFour from './MainSectionFour.vue';
import MainSectionFive from './MainSectionFive.vue';

export default {
    name: 'AppMain',

    components: {
        MainSectionOne,
        MainSectionTwo,
        MainSectionThree,
        MainSectionFour,
        MainSectionFive
    }
}
</script>

<template>

    <main>

        <div class="main-container">

            <MainSectionOne/>

            <MainSectionTwo/>

            <MainSectionThree/>

            <MainSectionFour/>

            <MainSectionFive/>

        </div>

    </main>
  
</template>

<style lang="scss" scoped>

</style>