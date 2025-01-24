<template>
  <v-app>
    <v-main>
      
      <HelloWorld/>
      <v-container>
        <CustomButton label="Press" @click="onButtonClick"/>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    CustomButton,
  },

  data: () => ({
    //
  }),
  methods: {
    onButtonClick() {
      alert('Button is Pressed')
    }
  }  
}
</script>
