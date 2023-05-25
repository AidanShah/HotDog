<script>
import NavBar from './NavBar.vue'
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";


export default {
    components: { NavBar, },
    data() {
        sentence: "a cute baby octopus";

        return {
            src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1574462664001-48S1VO61L9LNWNJ910CV/img-HotDogStock-1080x675.png?format=1000w",
            hotdog: "default",
            imageLink: '',
            dallEImage: '',

        };
    },

    // https://www.transparentpng.com/thumb/unicorn/I5APeU-unicorn-cute-unicorn-svg-cut-file-scrapbook-cut-file-cute.png
    methods: {
        async getDallEImage() {
            const options = {
                method: 'POST',
                url: 'https://api.openai.com/v1/images/generations',
                headers: {
                    'content-type': 'application/json',
                    "Authorization": "Bearer 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",
                },
                data: {
                    prompt: this.sentence,
                    n: 2,
                    size: '1024x1024'
                }
            };


            console.log("trying something" + this.sentence)
            const response = await axios.request(options);
            // // do something with the result 
            // console.log(response["data"][0].url);
            return response;

        },

        async setDallEImage() {
            const ddata = await this.getDallEImage();
            console.log(ddata["data"]);
            this.dallEImage = ddata.data.data[0].url;
        }
    }
}
</script>

<template>
    <NavBar></NavBar>

    <h1>
        Generated Hotdog Page

    </h1>

    <div class="image-container">

        <img :src="dallEImage">
        
        <img :src="src" alt="hotdog">

        <img :src="imageLink" alt="hotdog">

    </div>



    <div class="inputButton">

        <p>
            Put the url of the Image you want:
        </p>
        <input class="input-box" type="input-box" v-model="imageLink" placeholder="Enter text">

    </div>




    <div class="inputButton2">

        <p>
            Put sentence to generate in Dall E
        </p>

        <input class="input-box" type="input-box" v-model="sentence" placeholder="Enter text">
    </div>


    <div class="inputButton2">
        <button @click="setDallEImage">
            Generate Image
        </button>
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
    left: 600px;


}

.inputButton {
    position: relative;
}

.inputButton2 {
      position: relative;
}
</style>