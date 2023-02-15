<script>
export default {
    name: 'MainSectionSix',

    data() {
        return {
            imgStaticLeft: 'src/assets/img/social-1.jpg',
            imgStaticRigth: 'src/assets/img/social-2.jpg',
            imgSocial: [
                {
                    name: 'social',
                    url:'src/assets/img/social-3.jpg'
                },
                {
                    name: 'social',
                    url:'src/assets/img/social-4.jpg'
                },
                {
                    name: 'social',
                    url:'src/assets/img/social-5.jpg'
                },
                {
                    name: 'social',
                    url:'src/assets/img/social-6.jpg'
                },
            ]
        }
    }
}
</script>

<template>

    <section id="social">

        <div class="container">

            <div class="container-up d-flex">
                
                <div class="card">

                    <img :src="imgStaticLeft" alt="">
    
                </div>
    
                <div class="big-card">

                    <div class="text d-flex ai-center jc-center">

                        <h5>made for sharing</h5>

                        <h3>Let's stay in touch</h3>

                        <a class="a-button" href="#"> <font-awesome-icon icon="fa-brands fa-instagram" /> follow us</a>

                    </div>
    
                </div>
                
                <div class="card">

                    <img :src="imgStaticRigth" alt="">
                    
                </div>
    
            </div>
     
            <div class="container-down d-flex">
    
                <div class="card" v-for="img in imgSocial">

                    <img :src="img.url" :alt="img.name">
                    
                </div>
    
            </div>

        </div>

    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0 0 0;
    .container {
        .container-up, .container-down {
            margin-top: 20px;
            gap: 20px;
            .big-card {
                width: calc(100% - (335px * 2) - 40px);
                height: 325px;
                background-color: $secondColor;
                .text {
                    height: 100%;
                    flex-direction: column;
                    h3 {
                        font-size: 35px;
                        color: $firstColor;
                        margin: 30px 0;
                    }
                    .a-button {
                        color: $fifthColor;
                        background-color: $firstColor;
                        &:hover {
                            color: $firstColor;
                            background-color: $fifthColor;
                        }
                    }
                }
            }
        }
        .card {
            width: 335px;
            height: 325px;
            img {
                width: 335px;
            }
        }
    }
}
</style>