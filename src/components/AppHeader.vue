<script>
import AppLogo from './AppLogo.vue';
import AppNavBar from './AppNavBar.vue';
import AppTextJumbo from './AppTextJumbo.vue';

export default {
    name: 'AppHeader',

    components: {
        AppLogo,
        AppNavBar,
        AppTextJumbo
    },

    data() {
        return {

            nav: [
                {
                    url: '#',
                    link: 'home',
                },
                {
                    url: '#',
                    link: 'shop',
                },
                {
                    url: '#',
                    link: 'about',
                },
                {
                    url: '#',
                    link: 'gallery',
                },
                {
                    url: '#',
                    link: 'locations',
                },
                {
                    url: '#',
                    link: 'journal',
                },
                {
                    url: '#',
                    link: 'contact',
                },
                {
                    url: '#',
                    link: 'my account',
                },
            ],

        }
    }

}
</script>

<template>

    <header>

        <div class="header-container d-flex ai-center">

            <div class="logo-container">

                <a href="index.html">

                    <AppLogo/>

                </a>

            </div>

            <div class="nav-container d-flex">

                <AppNavBar :nav="nav"/>

            </div>

        </div>

        <div class="jumbotron">

            <div class="main-container d-flex ai-center">

                <AppTextJumbo/>

            </div>

        </div>

    </header>
  
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    background-image: url('../assets/img/hero-header-bakery.jpg');
    background-size: cover;
    .header-container {
        height: 90px;
        padding: 0 20px;
        justify-content: space-between;
        .logo-container {
            width: 150px;
        }
    }
    .jumbotron {
        height: calc(100% - 90px);
        .main-container {
            height: 100%;
        }
    }
}
</style>