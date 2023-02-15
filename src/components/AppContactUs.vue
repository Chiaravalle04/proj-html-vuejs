<script>
export default {
    name: 'AppContactUs',

    data() {
        return {
            active: false,
        }
    }, 

    methods: {
        clickShowForm() {
            this.active = true;
        },

        closeForm() {
            this.active = false;
        }
    }
}
</script>

<template>

    <button @click="clickShowForm()" class="a-button" href="">contact us</button>

    <div class="container d-flex jc-center">

        <div class="contact-us" v-if="active">

            <span @click="closeForm()"><font-awesome-icon icon="fa-solid fa-xmark" /></span>

            <h2>Contact Us</h2>

            <form action="#" @click.prevent>

                <div class="name-last-name">

                    <input type="text" placeholder="Name">
    
                    <input type="text" placeholder="Last name">

                </div>

                <div class="email-phone">

                    <input type="email" placeholder="Add email address">

                    <input type="tel" placeholder="Phone number">

                </div>

                <textarea cols="30" rows="10" placeholder="Message.."></textarea>

                <button>Send</button>

            </form>

        </div>

    </div>
  
</template>

<style lang="scss" scoped>
.a-button {
    width: 150px;
    margin: 0 auto;
    color: $fifthColor;
    background-color: $firstColor;
    border: none;
    cursor: pointer;
}
.container {
    position: fixed;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    .contact-us {
        position: relative;
        width: 50%;
        background-color: $secondColor;
        padding: 60px 50px;
        border-radius: 15px;
        box-shadow: 0px 0px 20px 7px rgba(0,0,0,0.51);
        span {
            color: $firstColor;
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
        h2 {
            margin-bottom: 10px;
            color: $firstColor;
        }
        .name-last-name, .email-phone {
            margin-bottom: 10px;
            input {
                display: inline-block;
                width: calc(50% - 20px);
                height: 40px;
                border-radius: 10px;
                padding: 10px 15px;
                margin: 0 10px;
                border: 1px solid $firstColor;
                &:focus {
                    outline: none;
                    border: 3px solid $firstColor;
                }
            }
        }
        textarea { 
            width: calc(100% - 20px);
            margin: 0 10px;
            padding: 10px 15px;
            border-radius: 10px;
            border: 1px solid $firstColor;
            font-family: Arial, Helvetica, sans-serif;
            &:focus {
                outline: none;
                border: 3px solid $firstColor;
            }
        }
        button {
            display: block;
            padding: 10px 20px;
            background-color: $firstColor;
            color: $fifthColor;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            margin: 10px auto 0;
        }
    }
}
</style>