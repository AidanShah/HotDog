<script>
import NavBar from './NavBar.vue';
import axios from 'axios'
import Home from '../App.vue'

export default {
  data(){
    return{
    username:"",
    password:"",
    urlLoginBase:"http://localhost:4000/login/",
    urlChangeBase:"http://localhost:4000/changeLogin/",
    url: "",
    emits: ['login']
  }
  }, 
  methods: {

  
    signUpButton(){
      window.location.replace("#/signup")
    },
    backend(){
      // Change login stored in database
      this.url = this.urlLoginBase + this.username + "/"+ this.password
      axios.get(this.url).then((response) => {
        console.log(response.data["Tokens"])
        console.log(response.data)
        if(response.data["Login"]==true){
          this.$emit('login',response.data["Tokens"])}
        window.location.replace("#/")
       // do you want to do something else here? 
    })},
    },

    props: {
        
    },

    components: { NavBar },

}

</script>


<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <NavBar></NavBar>
    <div class="container">
      <form>
        <h2>Login</h2>
        <label for="email">Email</label>
        <input v-model="username" type="email" id="email" name="email" required>
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" required>
        <div class="error-message"></div>
      </form>
      <button type="submit" @click="backend()">Login</button>
      <button type="signup" @click="signUpButton">Sign Up</button>
    </div>
  

  </body>
</template>


<style scoped>
  body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 50px;
}

form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  box-sizing: border-box;
}

button[type="submit"] {
  display: block;
  width: 100%;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

button[type="signup"] {
  display: block;
  width: 100%;
  background-color: blue;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button[type="signup"]:hover {
  background-color: blue;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

</style>