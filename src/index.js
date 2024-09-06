import * as cartService from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

//Cart itens
const item1 = await createItem("Macbook Pro", 2000.99, 2);
const item2 = await createItem("Macbook Air", 1500.99, 1);
const item3 = await createItem("Ipad Pro With M4", 3000.99, 1);
const item4 = await createItem("Iphone 15", 1099.99, 1);

//Add item cart
await cartService.addItem(myCart, item1); 
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

//Add wishlist
await cartService.addItem(myWishList, item4);

//Remove item cart
await cartService.removeItem(myCart, item1);

//Delete item cart
await cartService.deleteItem(myCart, item3.name);

//Print cart
await cartService.displayCart(myCart);

//Print cart total
await cartService.calculateTotal(myCart);