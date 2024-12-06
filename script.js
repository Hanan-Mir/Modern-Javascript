//importing module
// import  './shoppingCart.js';
// import { cartValue,cart } from './shoppingCart.js';
// import { addToCart } from './shoppingCart.js';
// import { totalQuantity as TQ ,appName as app } from './shoppingCart.js';
// console.log(cartValue);
// addToCart('SweatShirt',5);
// console.log(TQ,app);
import * as shoppingCart from './shoppingCart.js';
import confirmOrder from './shoppingCart.js';
 console.log('Importing module');
 console.log(shoppingCart.cartValue);
 shoppingCart.addToCart('Samsung',10);
 console.log(shoppingCart.totalQuantity);
confirmOrder("pizza",90);
