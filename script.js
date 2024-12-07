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
//using top level await
// console.log(`Fetching data about comments`);
// let response=await fetch(`https://jsonplaceholder.typicode.com/comments`);
// let data=await response.json();
// console.log(data);
// console.log(`Data fetched sucessfully`);
//---------------------creating function for top level await----------------------------
let getComment=async function(){
    let response=await fetch(`https://jsonplaceholder.typicode.com/comments`);
    let data= await response.json();
    return {title:data.at(-1).name,comment:data.at(-1).body};
}
let lastComment=getComment();
//returns a pending promise
console.log(lastComment);
//to get data form the pomise
// lastComment.then(lastPost=>console.log(lastPost));
//-------------more better way--------------
let lastComment2=await getComment();
console.log(lastComment2);
//--------older way of using modules
// let getData=function(){
//     let orderName=99;
//     let websiteName="Jaboong";
//     let userID=9980;
//     let totalCartValue=9980;
//     let userCart=[];
//     let orderFunction=function(itemName,price){
// userCart.push({itemName,price});
//     }
//     let confirmOrder=function(){
//         console.log(`Your order has been sucessfully placed`);
//     }
//     let printOrder=function(){
//         console.log(userCart);
//         console.log(`current cart items ${[...userCart]}`);
       
//     }
//     return {
//         orderName,
//         websiteName,
//         userID,
//         orderFunction,
//         printOrder
//     }
// }();
// console.log(getData.websiteName);
// getData.orderFunction('shirt',990);
// getData.printOrder();
//----------------------cloning object using lodash-----------------------------
let shopingData={
    customerDetails:{Name:"Rohan",
        UserID:7789,
        orderedItem:"Samsung S22",
        Address:"Civil Lines"
    },
    loggedIn:true
}
console.log(shopingData);
//older way of cloning data
let newData=Object.assign({},shopingData);
shopingData.loggedIn=false;
console.log(newData);
//using lodash to copy
import clonedeep from './node_modules/lodash-es/cloneDeep.js'
let newData2=clonedeep(shopingData);
console.log(newData2);