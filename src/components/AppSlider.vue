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
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/strawberry-jam-cookies-400x510.jpg',
                    name: 'Strawberry Jam Cookies',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/cherry-cake-400x510.jpg',
                    name: 'Cherry Cake',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/blackberry-stuffed-bread-400x510.jpg',
                    name: 'Blackberry Stuffed Bread',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/cookies-with-ice-cream-400x510.jpg',
                    name: 'Cookies With Ice Cream',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/glazed-pancake-with-lemon-400x510.jpg',
                    name: 'Glazed Pancake With Lemon',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/home-bread-400x510.jpg',
                    name: 'Home Bread',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/perfect-macarons-400x510.jpg',
                    name: 'Perfect Macarons',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/small-cupcake-400x510.jpg',
                    name: 'Small Cupcake',
                    price: '$ 19.00 - $ 29.00'
                },
                {
                    url: 'src/assets/img/strawberry-donut-400x510.jpg',
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

        <div class="my-hover d-flex jc-center">

            <h2>{{ item.name }}</h2>

            <span>{{ item.price }}</span>

        </div>

    </div>

    <button @click="nextBut()" class="next">
        <font-awesome-icon icon="fa-solid fa-chevron-right"/>
    </button>

</template>

<style lang="scss" scoped>
.card {
    width: 400px;
    height: 510px;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover .my-hover {
        visibility: visible;
    }
    .my-hover {
        top: 0;
        left: 0;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        h2 {
            color: $fifthColor;
            margin: 20px 0;
            scale: 0;
            transition: all 0.5s ease-in-out;
        }
        span {
            color: $fifthColor;
            scale: 0;
            transition: all 0.5s ease-in-out;
        }
    }
    &:hover .my-hover h2 {
        scale: 1;
    }
    &:hover .my-hover span {
        scale: 1;;
    }

}
.prev, .next {
    display: inline-block;
    width: 50px;
    height: 80px;
    font-size: 20px;
    color: $fifthColor;
    background-color: rgba(85, 50, 139, 0.5);
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
</style>