<script>
import NavBar from './NavBar.vue'
import axios from 'axios'

export default {
    data() {
        const otherDogs= [
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1574462664001-48S1VO61L9LNWNJ910CV/img-HotDogStock-1080x675.png?format=1000w",
                    hotdog: "default"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1575408711651-9RQZJE8ZI0BV3Y1CV0LN/hot+dog+wiht+must.jpg?format=1000w",
                    hotdog: "mustard"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1582497960940-IAE86F3OGQKE0D19GGYA/ketchup+dog.jpg?format=1000w",
                    hotdog: "ketchup"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1586969319681-4OLWCUAYUSSWHGES6IOY/sprinkle+dog.jpg?format=1000w",
                    hotdog: "sprinkle"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1603992035188-Y4LE9KCNN2IDIKG6OASN/hat+dog.png?format=1000w",
                    hotdog: "hat"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1590525011183-J6RNSXLQT2BZV22F5I6V/ball+dog.jpg?format=1000w",
                    hotdog: "basketball"
                },
                {
                    src: "https://images.squarespace-cdn.com/content/v1/5dd8630d09ab5908e35b35a0/1593362109648-FYSE9T1HR5KEPVE7O9MN/nacho+dog.jpg?format=1000w",
                    hotdog: "nachos"
                }
            ];
            const res = otherDogs.find(h => h.hotdog == this.hotdog);
            
            console.log(res);
        return {
            hotdog: this.hotdog,
            src: res.src,
            otherDogs: otherDogs,
            tokens: 0
        }
    },
    emits: ['changeData'],
    methods: {
        changeData(hotdog) {
            this.src = hotdog.src;
            this.$emit('changeData', hotdog.hotdog);
        },

        fetchDogs(){
          axios.get('https://backend-for-vue-example.onrender.com/getDogs').then(response => {
            this.otherDogs = response.data;
               console.log(response.data); // do you want to do something else here? 
           })

        },
        addTokens(){
            this.tokens += 5
        }
    },

    props: {
        hotdog: String
    },
    components: { NavBar },
}
</script>

<template>
    <body>
        <NavBar></NavBar>
        <img :src="src" alt="hotdog">
        <div class="links">
            <!-- do you think you could wrap this better?-->
            <a v-for = "dog in otherDogs" v-on:click="e => changeData(dog)">
                Put some {{ dog.hotdog }} on it
            </a>

            <!-- add a button that will call fetchDogs-->
            <button v-on:click="fetchDogs">Fetch Dogs</button>
        </div>
    </body>
</template>

<style scoped>
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