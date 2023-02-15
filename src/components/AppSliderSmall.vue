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

        <div class="container-img">

            <img :src="item.url" :alt="item.name">

            <div class="my-hover d-flex jc-center ai-center">

                <h4>Add to cart</h4>

                <button type="button"><font-awesome-icon icon="fa-solid fa-plus" /></button>

            </div>

        </div>

        <div class="text">

            <h3>{{ item.name }}</h3>

            <span>{{ item.price }}</span>

        </div>

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
    transition: all 0.3s ease-in-out;
    &:hover .my-hover {
        visibility: visible;
    }
    .container-img {
        width: 100%;
        height: 70%;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .my-hover {
            background-color: rgba(0, 0, 0, 0.3);
            top: 0;
            left: 0;
            h4 {
                color: $fifthColor;
                margin-bottom: 20px;
                text-transform: capitalize;
                scale: 0;
                transition: all 0.3s ease-in-out;
            }
            button {
                display: block;
                width: 40px;
                height: 40px;
                font-size: 17px;
                text-align: center;
                line-height: 40px;
                border-radius: 50%;
                color: $fifthColor;
                background-color: $firstColor;
                border: none;
                font-weight: bold;
                cursor: pointer;
                scale: 0;
                transition: all 0.3s ease-in-out;
            } 
        }
    }
    &:hover .my-hover h4 {
        scale: 1;
        }
    &:hover .my-hover button {
        scale: 1;
    }
    .text {
        height: 20%;
        h3 {
            font-size: 17px;
            margin: 20px 0 10px;
            color: $firstColor;
        }
        span {
            color: $textColor;
            font-size: 12px;
        }
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
    z-index: 3;
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
</style>