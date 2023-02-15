<script>
import AppLogo from './AppLogo.vue';
import AppNavBar from './AppNavBar.vue';
import AppForm from './AppForm.vue';

export default {
    name: 'AppFooter',

    components: {
        AppLogo,
        AppNavBar,
        AppForm
    },

    data() {
        return {

            nav: [
            {
                    url: '#',
                    link: 'home',
                },
                {
                    url: '#shopping',
                    link: 'shop',
                },
                {
                    url: '#about',
                    link: 'about',
                },
                {
                    url: '#social',
                    link: 'social',
                },
                {
                    url: '#location',
                    link: 'locations',
                },
                {
                    url: '#contact',
                    link: 'contact',
                },
                {
                    url: '#',
                    link: 'my account',
                },
            ],

            icons: [
                {
                    name: 'instagram',
                    icon: 'fa-brands fa-instagram',
                    url: '#'
                },
                {
                    name: 'twitter',
                    icon: 'fa-brands fa-twitter',
                    url: '#'
                },
                {
                    name: 'facebook',
                    icon: 'fa-brands fa-facebook-f',
                    url: '#'
                },
                {
                    name: 'pinterest',
                    icon: 'fa-brands fa-pinterest-p',
                    url: '#'
                },
            ]

        }
    }
}
</script>

<template>

    <footer>

        <div class="main-container">

            <div class="container-top d-flex">

                <div class="container-left">
    
                    <div class="logo">
    
                        <a href="inde.html">
    
                            <AppLogo/>
    
                        </a>
    
                    </div>
    
                    <div class="nav-container d-flex">
    
                        <AppNavBar :nav="nav"/>
    
                    </div>
                        
                </div>
    
                <div class="container-rigth">
    
                    <h3>Subscribe to our Newsletter</h3>
    
                    <AppForm/>
    
                </div>

            </div>

            <div class="container-down d-flex">

                <p>© 2023 Backery | Avada Shop</p>

                <div class="icon">

                    <a :href="icon.url" v-for="icon in icons">
                        <font-awesome-icon :icon="icon.icon" />
                    </a>

                </div>

            </div>
    
        </div>

    </footer>
  
</template>

<style lang="scss" scoped>
footer {
    background-color: $secondColor;
    .container-left {
        width: 60%;
        padding: 65px 0;
        .logo {
            width: 150px;
            margin-bottom: 45px;
        }
    }
    .container-rigth {
        width: 40%;
        padding: 65px 0;
        text-align: end;
        h3 {
            color: $firstColor;
            font-size: 20px;
            margin-bottom: 45px;
        }
    }
    .container-down {
        justify-content: space-between;
        p {
            font-size: 10px;
            color: $textColor;
        }
        .icon {
            a {
                padding: 10px;
            }
        }
    }
}
</style>