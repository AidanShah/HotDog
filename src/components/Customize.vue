<script>
import NavBar from './NavBar.vue'


export default {
    components: { NavBar, },
    data() {
        const imageLinkArray = [
            {
                imageLink: "https://www.pngmart.com/files/5/Donuts-PNG-File.png",
            },
            {
                imageLink: "https://www.pngall.com/wp-content/uploads/11/Donut-No-Background.png",
            }
        ];

        return {
            src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1574462664001-48S1VO61L9LNWNJ910CV/img-HotDogStock-1080x675.png?format=1000w",
            hotdog: "default", 
            imageLink: '',

        };
    },
    methods: {
        generateHotDog(){

        },

    }
}
</script>

<template>
    <NavBar></NavBar>

    <h1>
        Generated Hotdog Page

    </h1>

    <div class="image-container">

        <img :src="src" alt="hotdog">

        <img :src="imageLink" alt="hotdog">

        
    </div>

   

    <center>
        <p>
            Put the url of the Image you want:
        </p>
        <input class="input-box" type="input-box" v-model="imageLink" placeholder="Enter text">

        <p>
            OR <br>
            Generate a randomly generated hotdog
        </p>

        <button v-on:click="generateHotDog">
            Generate
        </button>
    
    </center>

    <div>

    </div>


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

.image-container {
    position: relative;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
    height: 500px;

  }

</style>