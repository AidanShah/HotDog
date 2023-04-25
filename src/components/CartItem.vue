<script>
export default {
    props: ["url", "itemName", "desc", "price"],
    methods: { addToCart() { 
        this.$emit('addToCart', this.itemName, this.price) } }
}
</script>

<template>
    <div class="item">
        <img :src="url" width="300" height="300">
        <h2>Name: {{ itemName }}</h2>
        <h2>Price: ${{ price }}</h2>
        <div class = "description"> Description: {{ desc }}</div>
        <button type="cartitem" @click="addToCart()">Add to cart</button>
    </div>

</template>
  
<style scoped>


.item {
    align-items: center;
    margin-top: 2rem;
    border: 3px solid black;
    height: 60vh;
    width: 100vh;
    padding-left: 5vh;
    padding-right: 5vh;
}


button[type="cartitem"]:hover {
  display: block;
  width: 80%;
  background-color: gray;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button[type="cartitem"] {
  display: block;
  width: 80%;
  background-color: darkblue;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

.description {
  color: rgba(0, 0, 255, 0.493);
}

</style>