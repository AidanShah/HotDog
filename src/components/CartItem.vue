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
        <button @click="addToCart()">Add to cart</button>
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

.description {
    font-size: 20px;
  color: rgba(0, 0, 255, 0.493);
}

</style>