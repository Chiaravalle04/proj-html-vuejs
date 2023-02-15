<script>
export default {
    name: 'AppForm',

    data() {
        return {
            active: false,
            string: '',
        }
    },

    methods: {
        subscribe() {
            this.active = true;
            this.string = ''
        }
    }
}
</script>

<template>

    <form action="#" @click.prevent="">

        <input type="email" v-model="string" placeholder="Enter email address..." required>

        <button @click="subscribe()" type="submit">Subscribe</button>

    </form>

    <p v-if="active"><font-awesome-icon icon="fa-solid fa-check" /> Thanks for subscribing</p>
  
</template>

<style lang="scss" scoped>
form {
    input {
        display: inline-block;
        width: 400px;
        height: 40px;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        &:focus {
            outline: none;
        }
    }
    button {
        display: inline-block;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        background-color: $firstColor;
        border: none;
        color: $fifthColor;
        margin-left: 5px;
        cursor: pointer;
    }
}
p {
    margin-top: 15px;
    text-align: center;
    color: green;
}
</style>