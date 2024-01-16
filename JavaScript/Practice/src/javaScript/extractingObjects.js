'use strict'
//Extracting Objects Test.

let car = {
    name :"Blue Space Car",
    engine : {
        speed : 5.0,
        nitro : "Boots 6"
    }
}


const {
   name : getCarName,
   engine :{
     speed : carSpeed,
     nitro : nirtoRatio
   }
} = car;

