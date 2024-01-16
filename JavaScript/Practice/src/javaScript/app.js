'use strict'

//Defines a object
const block = {};
//Uses the defineProperty method to create the property.
Object.defineProperty(block,'name',{
    value : 'stone',
    writable : false,
    configurable : false
});
//Prints it to the console.
let value = block.name;
console.log(value);

let item = [
    ['name','Apple'],
    ['price','$100.99']
]
export let items = Object.fromEntries(item);


export function getPrice({price}){
     if (typeof price === 'string'){
        console.log(price);
        console.log('done.')
     }
}