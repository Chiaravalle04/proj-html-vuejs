<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import LinkBackToTop from './components/LinkBackToTop.vue';

export default {
    name: 'App',

    components: {
        AppHeader,
        AppMain,
        AppFooter,
        LinkBackToTop
    },
}
</script>

<template>

    <AppHeader/>

    <AppMain/>

    <AppFooter/>

    <LinkBackToTop/>
  
</template>

<style lang="scss">
@import './styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300&display=swap');
</style>
