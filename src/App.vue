<script>

// App is the PARENT COMPONENT of Home. 
import Home from './components/Home.vue'
import Testimonials from './components/Testimonials.vue'
import About from './components/About.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Customize from './components/Customize.vue'

// hi y'all, going to number the changes so it's clear to you. 

// 1. create a routes object with all your navbar routes
// see https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
  '/': Home, 
  '/testimonials': Testimonials, 
  '/about': About, 
  '/cart': Cart,
  '/login': Login,
  '/signup': Signup,
  '/customize': Customize,
}

export default { 
  data() {
    return {
      hotdog: "default", 
      numDresses: 1,
      currentPath: routes['/'], 
      loggedIn: false,
      tokens: 0
      // 2. change the currentPath to be the value of the routes variable (instead of just a string)
    }
  },
  // this is a very contrived way of listening to child events. 
  methods: {
    someEvent(n) {
      this.hotdog = n;
      this.numDresses++;
    },
    login(n){
      loggedIn = true
      tokens = n
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      // 2. remove the hashtag so we just get the route
      const removeHash = window.location.hash.slice(1);
      // 3. make the currentPath 
      this.currentPath = routes[removeHash || '/'];
    })
  },
  components: {
    Home
  }
}
</script>


<template>
  <!-- 4. change Home to be a dynamic component, and add :is="currentPath" as a directive -->
  <component :is="currentPath" @change-data="someEvent" :hotdog="hotdog" />
  <div>
  <Login :tokens="tokens" @clicked="login"></Login>
  </div>
  <div class="center">
  You've dressed the dog {{ numDresses }} times!
  Have you logged in {{ loggedIn }}
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
</style>
