<script>
export default {
    name: 'AppSlider',

    data() {
        return {

            firstImg: 0,

            lastImg: 2,

            slider: [
                {
                    url: 'src/assets/img/choco-chip-cookies-400x510.jpg',
                    name: 'Choco Chip Cookies',
                },
                {
                    url: 'src/assets/img/strawberry-jam-cookies-400x510.jpg',
                    name: 'Strawberry Jam Cookies',
                },
                {
                    url: 'src/assets/img/cherry-cake-400x510.jpg',
                    name: 'Cherry Cake',
                },
                {
                    url: 'src/assets/img/blackberry-stuffed-bread-400x510.jpg',
                    name: 'Blackberry Stuffed Bread',
                },
                {
                    url: 'src/assets/img/cookies-with-ice-cream-400x510.jpg',
                    name: 'Cookies With Ice Cream',
                },
                {
                    url: 'src/assets/img/glazed-pancake-with-lemon-400x510.jpg',
                    name: 'Glazed Pancake With Lemon',
                },
                {
                    url: 'src/assets/img/home-bread-400x510.jpg',
                    name: 'Home Bread',
                },
                {
                    url: 'src/assets/img/perfect-macarons-400x510.jpg',
                    name: 'Perfect Macarons',
                },
                {
                    url: 'src/assets/img/small-cupcake-400x510.jpg',
                    name: 'Small Cupcake',
                },
                {
                    url: 'src/assets/img/strawberry-donut-400x510.jpg',
                    name: 'Strawberry Donut',
                },
            ]
        }
    },

    methods: {
        nextBut() {

            if (this.lastImg >= this.slider.length - 1) {
                
                this.firstImg = 0;
                this.lastImg = 2;

            } else {
                this.firstImg++;
                this.lastImg++;
            }

        },

        prevBut() {

            if (this.firstImg <= 0) {

                this.firstImg = this.slider.length - 2

                this.lastImg = this.slider.length

            } else {

                this.firstImg--;
                this.lastImg--;

            }

        }
    }

}
</script>

<template>

    <button @click="prevBut()" class="prev">
        <font-awesome-icon icon="fa-solid fa-chevron-left"/>
    </button>
  
    <div class="card" v-for="item in slider.slice(firstImg, lastImg)">

        <img :src="item.url" :alt="item.name">

    </div>

    <button @click="nextBut()" class="next">
        <font-awesome-icon icon="fa-solid fa-chevron-right"/>
    </button>

</template>

<style lang="scss" scoped>
.prev, .next {
    display: inline-block;
    width: 50px;
    height: 80px;
    font-size: 20px;
    color: $fifthColor;
    background-color: $firstColor;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
</style>