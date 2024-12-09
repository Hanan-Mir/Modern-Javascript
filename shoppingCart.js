//exporting module
console.log('exporting module');
export const cartValue=9000;
export const cart=[];
export const addToCart=function(commodity,quantity){
    cart.push({commodity,quantity});
    console.log(`${quantity}  ${commodity} added to the cart`);
}
const totalQuantity=500;
const appName="Myntra";
export {totalQuantity,appName};
//exporting default values
export default function(name,quantity){
console.log(`Your order of ${name} with quantity of ${quantity} sucessfully placed`);
}
let todo=async function(){
    let response=await fetch(`https://jsonplaceholder.typicode.com/todos`);
    let data=await response.json();
    return data;
}
console.log(`start fetching of data`);
// let todoList=await todo();
// console.log(todoList);
console.log(`Data fetching completed`);