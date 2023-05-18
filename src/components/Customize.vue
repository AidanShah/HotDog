<script>
import NavBar from './NavBar.vue'


export default {
    components: { NavBar, },
    data() {
        return {
            src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1574462664001-48S1VO61L9LNWNJ910CV/img-HotDogStock-1080x675.png?format=1000w",
            hotdog: "default", 
            imageLink: ''
        };
    },
    methods: {
        submit() {
            console.log(this.inputValue);
            this.imageLink = '';
        }

    }
}
</script>

<template>
    <NavBar></NavBar>
    <img :src="src" alt="hotdog">

    <center>
        <input class="input-box" type="input-box" v-model="imageLink" placeholder="Enter text">
        <button @click="submit">Submit</button>
    </center>


</template>

<style scoped>


.input-box {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.links {
    display: flex;
    justify-content: space-evenly;
}
</style>