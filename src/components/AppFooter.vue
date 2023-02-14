<script>
import AppLogo from './AppLogo.vue';
import AppNavBar from './AppNavBar.vue';

export default {
    name: 'AppFooter',

    components: {
        AppLogo,
        AppNavBar
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
    
                        <button>
                            <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
                        </button>
    
                    </div>
                        
                </div>
    
                <div class="container-rigth">
    
                    <h3>Subscribe to our Newsletter</h3>
    
                    <form action="#">
    
                        <input type="email" placeholder="Enter email address..." required>
    
                        <button type="submit">Subscribe</button>
    
                    </form>
    
                </div>

            </div>

            <div class="container-down d-flex">

                <p>© 2023 Backery | Avada Shop</p>

                <div class="icon">

                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>

                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>

                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </a>

                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-pinterest-p" />
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
        .nav-container {
            button {
                display: inline-block;
                background: none;
                border: none;
                color: $firstColor;
                font-size: 20px;
                margin-left: 15px;
                cursor: pointer;
            }
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
        form {
            input {
                display: inline-block;
                width: 400px;
                height: 40px;
                padding: 10px 20px;
                border-radius: 10px;
                border: none;
                &:focus {
                    outline: none;
                }
            }
            button {
                display: inline-block;
                height: 40px;
                padding: 10px;
                border-radius: 10px;
                background-color: $firstColor;
                border: none;
                color: $fifthColor;
                margin-left: 5px;
                cursor: pointer;
            }
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