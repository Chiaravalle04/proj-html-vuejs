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

                        <a class="a-button" href="https://www.google.it/maps/place/565+Park+Ave,+New+York,+NY+10065,+Stati+Uniti/@40.7649791,-73.9701181,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258ef0412616b:0x57088962fa6e72b3!8m2!3d40.7649791!4d-73.9679294!16s%2Fg%2F11bw3_p0f_">view map</a>
                        
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

                        <a class="a-button" href="https://www.google.it/maps/place/4+Rose+and+Crown+Yard,+St.+James's,+London+SW1Y+6RE,+Regno+Unito/@51.506495,-0.1392803,17z/data=!3m1!4b1!4m5!3m4!1s0x487604d710bc711f:0x8777256fa9af3fa4!8m2!3d51.506495!4d-0.1370916">view map</a>
                        
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
                margin: 20px 0 0 0;
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