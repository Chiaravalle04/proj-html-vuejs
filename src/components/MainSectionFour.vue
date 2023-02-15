<script>
export default {
    name: 'MainSectionFour',
}
</script>

<template>

    <section id="about">

        <div class="container-first">
            
            <div class="overlay">

                <h2>Tell us what you have in mind</h2>

                <span>01</span>

                <div class="text">

                    <h5>manual ingredients selection</h5>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laudantium maxime. Facere nesciunt labore delectus recusandae. Deserunt, nihil ex numquam autem iure, quaerat porro nostrum, vero voluptatibus nesciunt error veniam?</p>

                </div>

            </div>

        </div>

        <div class="container-square d-flex">

            <div class="square-img">

                <div class="overlay">

                    <h2>We Start Baking</h2>

                    <span>02</span>

                    <div class="text">

                        <h5>sweet & delicious</h5>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laudantium maxime. Facere nesciunt labore delectus recusandae. Deserunt, nihil ex numquam autem iure, quaerat porro nostrum, vero voluptatibus nesciunt error veniam?</p>

                    </div>

                </div>

            </div>

            <div class="square-text">

                <div class="text">

                    <h5>dont just take our word for it</h5>

                    <p>"Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity."</p>

                    <span>Rachel Cooper, Founder</span>

                </div>

            </div>

        </div>

        <div class="container-last">

            <div class="overlay">

                <h2>Delivered to your home</h2>

                <span>03</span>

                <div class="text">

                    <h5>baked to order & gift wrapped</h5>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laudantium maxime. Facere nesciunt labore delectus recusandae. Deserunt, nihil ex numquam autem iure, quaerat porro nostrum, vero voluptatibus nesciunt error veniam?</p>

                </div>

            </div>

        </div>
        
    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0 0 0;
    .container-first, .container-last {
        height: 500px;
        margin: 20px 0;
    }

    .container-first {
        background-image: url('../assets/img/bakery-process-1.jpg');
        background-size: cover;
    }
    .container-last {
        background-image: url('../assets/img/bakery-process-3.jpg');
        background-size: cover;
    }
    .container-square {
        gap: 20px;
        .square-img, .square-text {
            width: 50%;
            height: 500px;
        }
        .square-img {
            background-image: url('../assets/img/bakery-process-2.jpg');
            background-size: cover;
        }
        .square-text {
            padding: 70px 50px;
            background-color: $secondColor;
            p {
                font-size: 30px;
                color: $firstColor;
                line-height: 40px;
                margin: 60px 0;
                font-family: 'Playfair Display', serif;
            }
            span {
                color: $textColor;
            }
        }
    }
    .overlay {
        width: 100%;
        height: 100%;
        padding: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        h2 {
            color: $fifthColor;
            font-size: 60px;
            width: 500px;
        }
        span {
            color: $fifthColor;
            font-size: 60px;
            position: absolute;
            top: 30px;
            right: 30px;
        }
        .text {
            width: 300px;
            position: absolute;
            bottom: 30px;
            right: 60px;
            p {
                color: $fifthColor;
                margin: 15px 0;
                font-size: 13px;
            }
            h5 {
                color: $secondColor;
            }
        }
    }
}
</style>