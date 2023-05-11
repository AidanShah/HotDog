<script>
import NavBar from './NavBar.vue'


export default {
    components: { NavBar, },
    data() {
        return {
          
        }
    },
    methods: {
 

    }
}
</script>

<template>
    <NavBar></NavBar>

    <!-- We can simplify the below like this: 
    <CartItem v-for="item in itemList" 
    :itemName="item.itemName" :desc="item.desc" :price="item.price" :url="item.url"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)">
    </CartItem> -->



</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 10 auto;
  padding-top: 10px;
}

button[type="clearitem"] {
  display: block;
  width: 80%;
  background-color: pink;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}


button[type="clearitem"]:hover {
  display: block;
  width: 80%;
  background-color: rgba(231, 34, 67, 0.695);
  color: black;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button[type = "checkout"] {
    display: block;
    width: 80%;
    background-color: rgba(21, 255, 0, 0.695);
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
}

button[type = "checkout"]:hover {
    display: block;
    width: 80%;
    background-color: rgba(17, 109, 213, 0.695);
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
}

</style>