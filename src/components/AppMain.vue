<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';

export default {
    name: 'AppMain',

    components: {
        MainSectionOne,
        MainSectionTwo,
        MainSectionThree,
    }
}
</script>

<template>

    <main>

        <div class="main-container">

            <MainSectionOne/>

            <MainSectionTwo/>

            <MainSectionThree/>

        </div>

    </main>
  
</template>

<style lang="scss" scoped>

</style>