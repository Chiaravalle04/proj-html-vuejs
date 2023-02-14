<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';
import MainSectionFour from './MainSectionFour.vue';

export default {
    name: 'AppMain',

    components: {
        MainSectionOne,
        MainSectionTwo,
        MainSectionThree,
        MainSectionFour,
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

        </div>

    </main>
  
</template>

<style lang="scss" scoped>

</style>