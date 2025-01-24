console.log("hello puto")
const app = Vue.createApp(
    {
        data(){
            return {
                name:" yuleansito",
                position:"posisition trabajo"
            }
        }
        // template:"<h1>heading doing in app.js file</h1>" template se suas para pasar directamente lo que se quiere que se dibuje
    }
);
app.mount('#sample');