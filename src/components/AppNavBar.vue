<script>
export default {
    name: 'AppNavBar',

    props: {
        nav: Array,
    }

}
</script>

<template>

    <nav>

        <ul class="d-flex">

            <li v-for="links in nav"> 
                <a :href="links.url">{{ links.link }}</a>
            </li>

            <button>
                <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
            </button>

        </ul>

    </nav>
  
</template>

<style lang="scss" scoped>
nav {
    ul {
        li {
            margin: 0 5px;
            &:first-child a {
                border-bottom: 3px solid $firstColor;
            }
            a {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 10px;
                padding: 10px 5px;
                color: $firstColor;
            }
        }
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
</style>