<script>
export default {
    name: 'AppSliderSmall',

    data() {
        return {

            firstImg: 0,

            lastImg: 4,

            slider: [
                {
                    url: 'src/assets/img/choco-chip-cookies-200x255.jpg',
                    name: 'Choco Chip Cookies',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/strawberry-jam-cookies-200x255.jpg',
                    name: 'Strawberry Jam Cookies',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/cherry-cake-200x255.jpg',
                    name: 'Cherry Cake',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/blackberry-stuffed-bread-200x255.jpg',
                    name: 'Blackberry Stuffed Bread',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/cookies-with-ice-cream-200x255.jpg',
                    name: 'Cookies With Ice Cream',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/glazed-pancake-with-lemon-200x255.jpg',
                    name: 'Glazed Pancake With Lemon',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/home-bread-200x255.jpg',
                    name: 'Home Bread',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/perfect-macarons-200x255.jpg',
                    name: 'Perfect Macarons',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/small-cupcake-200x255.jpg',
                    name: 'Small Cupcake',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/strawberry-donut-200x255.jpg',
                    name: 'Strawberry Donut',
                    price: '$ 19.00 - $ 29.00'
                },
            ]
        }
    },

    methods: {
        nextBut() {

            if (this.lastImg >= this.slider.length - 1) {
                
                this.firstImg = 0;
                this.lastImg = 4;

            } else {

                this.firstImg++;
                this.lastImg++;
            
            }

        },

        prevBut() {

            if (this.firstImg <= 0) {

                this.firstImg = this.slider.length - 4

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

        <h3>{{ item.name }}</h3>

        <span>{{ item.price }}</span>

    </div>

    <button @click="nextBut()" class="next">
        <font-awesome-icon icon="fa-solid fa-chevron-right"/>
    </button>

</template>

<style lang="scss" scoped>
.card {
    text-align: center;
    height: 100%;
    width: 200px;
    h3 {
        font-size: 17px;
        margin: 10px 0;
        color: $firstColor;
    }
    span {
        color: $textColor;
        font-size: 12px;
    }
}
.prev, .next {
    display: inline-block;
    width: 30px;
    height: 60px;
    font-size: 20px;
    color: $fifthColor;
    background-color: rgba(85, 50, 139, 0.5);
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