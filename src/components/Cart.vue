<script>
import NavBar from './NavBar.vue'
import CartItem from './CartItem.vue'
import Home from './Home.vue'
export default {
    components: { NavBar, CartItem },
    data() {
        return {
            cart: {},
            total: 0,
            Tokens: Home.Tokens,
            // props 
            itemList: [
            {
                itemName: "Pickledog",
                desc: "A disgusting hotdog with a pickle on the top. Smells terrible",
                price: 5.00,
                url: "https://i.ibb.co/swr7JHK/Pickledog.png",
            },
            {
                itemName: "cookie hotdog",
                desc: "A tasty hotdog with chocolate sprinkled on top. Smells amazing",
                price: 5.50,
                url: "https://i.ibb.co/WDwff6q/Cookiedog.png",
            },
            {
                itemName: "Cheddardog",
                desc: "A very cheesy dog.",
                price: 5.50,
                url: "https://i.ibb.co/3TLr0YR/Cheddardog.jpg",
            },
            {
                itemName: "Eggdog",
                desc: "An eggdog... I don't know why",
                price: 10.50,
                url: "https://i.ibb.co/1rCqC2S/Eggdog.jpg"
            }
            ]
        }
    },
    methods: {
        addToCart(itemName, price) {
            if (this.cart[itemName] != undefined) {
                this.cart[itemName].count++;

            } else {
                this.cart[itemName] = { count: 1 }
            }
            this.total += Number(price);
        },

        clearCartItem(){
            this.total = 0;
            this.cart = {};
        },
    }
}
</script>

<template>
    <NavBar></NavBar>
    <p>Cart: {{ cart }}</p>
    <p> Total Price: ${{ total }}</p>
    <p>Tokens: {{ Tokens }}</p>

    <!-- We can simplify the below like this: 
    <CartItem v-for="item in itemList" 
    :itemName="item.itemName" :desc="item.desc" :price="item.price" :url="item.url"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)">
    </CartItem> -->

    
    <CartItem itemName='Pickledog' desc="A disgusting hotdog with a pickle on the top. Smells terrible" price=5.00
        url="https://i.ibb.co/swr7JHK/Pickledog.png" @add-to-cart="(itemName, price) => addToCart(itemName, price)">
    </CartItem>
    <CartItem itemName='Cookie hotdog' desc="A tasty hotdog with chocolate sprinkled on top. Smells amazing" price="5.50"
        url="https://i.ibb.co/WDwff6q/Cookiedog.png" @add-to-cart="(itemName, price) => addToCart(itemName, price)">
    </CartItem>
    <CartItem itemName='Cheddardog' desc="A very cheesy dog." price="5.50" url="https://i.ibb.co/3TLr0YR/Cheddardog.jpg"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)"></CartItem>
    <CartItem itemName='Eggdog' desc="An eggdog... I don't know why" price="10.50" url="https://i.ibb.co/1rCqC2S/Eggdog.jpg"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)"></CartItem>

    <br>
    <button type="clearitem" @click=" clearCartItem() ">Clear Cart</button>

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


</style>