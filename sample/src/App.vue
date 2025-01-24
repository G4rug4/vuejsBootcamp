<template>
  <nav>
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link :to="{name: 'FruitBox'}">Fruits</router-link> |
    <router-link :to="{name: 'CountingComp'}">Counter</router-link> |
    <router-link :to="{name: 'LoginComp'}">Login</router-link> 
  </nav>
  
 <router-view /> 
</template>


<script>
import axios from 'axios';

 export default {
  data(){
      return {
        posts: []
      }
  },
   async mounted() {
    try {
      const response =  await axios.post('https://restfulapi.net/http-status-301-moved-permanently/', {
        userId: '456',
        title: 'avengers',
      })
      this.posts = response.data
       
    } catch (error) {
      console.error('Error detected', error)
    }
        
    }
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

