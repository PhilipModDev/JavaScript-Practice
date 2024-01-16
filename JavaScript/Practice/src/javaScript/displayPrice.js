import { getPrice } from "./app.js";
import { items } from "./app.js";

console.log(getPrice(Object.create(Object.prototype,{
    price : {
        value : "price"
    }
})));
console.log('Now print items');
for (const key in items) {
     console.log(items);
}