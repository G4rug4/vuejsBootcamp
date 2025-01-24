<template>
    <div class="form">
        <label for="email">Email</label> - 
        <input type="email" id="email" v-model="email"><br>

        <label for="password">Password</label> - 
        <input type="password" id="password" v-model="password"/>

        <button @click="login">Login</button>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>