<script>
import NavBar from './NavBar.vue'
import axios from 'axios';
import CartItem from './CartItem.vue'
import Home from './Home.vue'
export default {
    components: { NavBar, CartItem },
    props: ['tokens'],
    data() {
        return {
            cart: {},
            total: 0,
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
                },
                {
                    itemName: "SpaceDog",
                    desc: "Hot dog in space",
                    price: 20.50,
                    url: "https://i.pinimg.com/originals/8e/31/45/8e3145abea8c1bf3983fd87f8247bc57.jpg"

                },
            ],
            Tokens: this.tokens
        }
    },
    methods: {
        addToCart(itemName, price) {
            this.total += Number(price);
            if (this.cart[itemName] != undefined) {
                this.cart[itemName].count++;
            } else {
                this.cart[itemName] = { count: 1 }
            }
        },

        delFromCart(itemName, price) {
            if (this.cart[itemName] != undefined && this.cart[itemName].count > 1) {
                this.cart[itemName].count--;
                this.total -= Number(price);
            }
            else if (this.cart[itemName] != undefined && this.cart[itemName].count <= 1) {
                this.cart[itemName] = undefined;
                this.total -= Number(price);
            }
        },

        clearCartItem() {
            this.total = 0;
            this.cart = {};
        },
        // Need to make a way to stay logged in on every page.
        // Probably create a central unchanging file that records this or something so 
        // we can access it later.

        // async getTokens(){
        //     const options = {
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         // data: {
        //         //     username: username,
        //         // }
        //     };

        //     try {
        //         const response = await axios.get('http://localhost:4000/home/carmen@gmail.com/' + this.Tokens, options);

        //     } catch (error) {
        //         // Handle the error
        //         console.error(error);

        //         if (error.response && error.response.status === 404) {
        //             console.log('404 Error');
        //         }
        //     }
            
        // }

        async addTokens() {

            this.Tokens += 5;

            const options = {
                headers: {
                    'content-type': 'application/json',
                },
            };

            try {
                const response = await axios.get('http://localhost:4000/home/carmen@gmail.com/' + this.Tokens, options);
                // Handle the response data
                console.log(response.data);
            } catch (error) {
                // Handle the error
                console.error(error);

                if (error.response && error.response.status === 404) {
                    console.log('404 Error');
                }
            }


        },

        clearTokens() {
            this.Tokens = 0;
        },
        checkOut() {
            if (this.Tokens >= this.total) {
                this.Tokens = this.Tokens - this.total;
                this.total = 0;
                this.cart = {};
                alert("Thanks for shopping with us! You have " + this.Tokens + " tokens left.");
            }
            else {
                alert("You don't have enough tokens to buy this!");
            }
        }


    }
}
</script>

<template>
    <NavBar></NavBar>
    <p>Cart: {{ cart }}</p>
    <p> Total Price: ${{ total }}</p>
    <p>Tokens: {{ Tokens }}</p>
    <button v-on:click="addTokens">Add Tokens</button>
    <button v-on:click="clearTokens">Clear Tokens</button>
    <!-- We can simplify the below like this: 
    <CartItem v-for="item in itemList" 
    :itemName="item.itemName" :desc="item.desc" :price="item.price" :url="item.url"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)">
    </CartItem> -->

    <!-- getTokens(); -->

    <CartItem itemName='Pickledog' desc="A disgusting hotdog with a pickle on the top. Smells terrible" price=5.00
        url="https://i.ibb.co/swr7JHK/Pickledog.png" @add-to-cart="(itemName, price) => addToCart(itemName, price)"
        @del-from-cart="(itemName, price) => delFromCart(itemName, price)">
    </CartItem>
    <CartItem itemName='Cookie hotdog' desc="A tasty hotdog with chocolate sprinkled on top. Smells amazing" price="5.50"
        url="https://i.ibb.co/WDwff6q/Cookiedog.png" @add-to-cart="(itemName, price) => addToCart(itemName, price)"
        @del-from-cart="(itemName, price) => delFromCart(itemName, price)">
    </CartItem>

    <CartItem itemName='Cheddardog' desc="A very cheesy dog." price="5.50" url="https://i.ibb.co/3TLr0YR/Cheddardog.jpg"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)"
        @del-from-cart="(itemName, price) => delFromCart(itemName, price)"></CartItem>

    <CartItem itemName='Eggdog' desc="An eggdog... I don't know why" price="10.50" url="https://i.ibb.co/1rCqC2S/Eggdog.jpg"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)"
        @del-from-cart="(itemName, price) => delFromCart(itemName, price)"></CartItem>

    <CartItem itemName='SpaceDog' desc="Hot dog in space" price="20.50"
        url="https://i.pinimg.com/originals/8e/31/45/8e3145abea8c1bf3983fd87f8247bc57.jpg"
        @add-to-cart="(itemName, price) => addToCart(itemName, price)"
        @del-from-cart="(itemName, price) => delFromCart(itemName, price)"></CartItem>

    <br>
    <button type="clearitem" @click=" clearCartItem()">Clear Cart</button>

    <br>
    <button type="checkout" @click=" checkOut()">Checkout</button>
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

button[type="checkout"] {
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

button[type="checkout"]:hover {
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