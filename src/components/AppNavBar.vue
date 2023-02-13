<script>
export default {
    name: 'AppNavBar',

    props: {
        navHeader: Array,
    }

}
</script>

<template>

    <nav>

        <ul class="d-flex">

            <li v-for="links in navHeader"> 
                <a :href="links.url">{{ links.link }}</a>
            </li>

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
    }
}
</style>