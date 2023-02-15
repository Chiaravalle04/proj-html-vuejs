<script>
export default {
    name: 'AppForm',
}
</script>

<template>

    <form action="#">

        <input type="email" placeholder="Enter email address..." required>

        <button type="submit">Subscribe</button>

    </form>
  
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
</style>