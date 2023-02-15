<script>
export default {
    name: 'MainSectionFive',
}
</script>

<template>

    <section id="location">

        <div class="text">

            <h5>location</h5>

            <h2 class="title-section">Visit our Bakeries</h2>

        </div>

        <div class="container-img d-flex">

            <div class="card-left">

                <img src="../assets/img/new-york-bk-1200x794.jpg" alt="New York">

                <h3>New York</h3>

                <div class="text d-flex ai-center">

                    <div class="phone">

                        <h5>CALL US</h5>

                        <span>1.800.454.369</span>

                    </div>

                    <div class="open">

                        <h5>OPEN ALL WEEK</h5>

                        <span>9.00 AM - 6.00 PM</span>
                        
                    </div>

                    <div class="button">

                        <a class="a-button" href="#">view map</a>
                        
                    </div>


                </div>

            </div>

            <div class="card-right">

                <img src="../assets/img/london-bk-1200x794.jpg" alt="London">

                <h3>London</h3>

                <div class="text d-flex ai-center">

                    <div class="phone">

                        <h5>CALL US</h5>

                        <span>1.800.454.369</span>

                    </div>

                    <div class="open">

                        <h5>OPEN ALL WEEK</h5>

                        <span>9.00 AM - 6.00 PM</span>
                        
                    </div>

                    <div class="button">

                        <a class="a-button" href="#">view map</a>
                        
                    </div>

                </div>

            </div>

        </div>
        
    </section>
  
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0 0 0;
    .text {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
    }
    .container-img {
        .card-left, .card-right {
            width: calc(100% / 2);
            text-align: center;
            img {
               width: 100%;
               height: 70%;
            }
            h3 {
                color: $firstColor;
                font-size: 30px;
                margin: 20px 0;
            }
            .text {
                justify-content: space-around;
                h5 {
                    margin: 15px 0;
                }
                span {
                    color: $textColor;
                }
                .a-button {
                    color: $firstColor;
                    background-color: $fifthColor;
                    &:hover {
                        color: $secondColor;
                        background-color: $firstColor;
                    }
                }
            }
        }
        .card-left {
            background-color: #f1f8fa;
        }
        .card-right {
            background-color: #fbf3e2;
        }
    }
}
</style>