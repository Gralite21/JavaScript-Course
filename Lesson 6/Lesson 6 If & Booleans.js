true
false

console.log(3<5);
console.log(3>5);
console.log(3>=5);
console.log(3<=5);
console.log(3===5);
console.log(3!==5);
console.log(5>6-7);

if (true){console.log('hello');}                    //if...else if...else
if (false) {console.log('hello');}
else{console.log('else');}



if(5){                            // Everything else acts like true
    console.log('truthy');
}
if(0){                            //Acts like false: false, 0,'',NaN,undefined,null
    console.log('falsy');
}
const cartQuantity = 5
if(cartQuantity){
    console.log('Cart has products');
}



true ? 'truthy' : 'false';              //Ternary Operator
console.log(result);
// Shortcut for This
if(true){
    result =  'truthy';
} else{
    result = 'falsy';
}



let result = true ? 'truthy' : 'false';
//Shortcut for This
let result
if (condition){
    result = 'truthy';
} else{
    result = 'falsy';
}



// This Operator is useless/causes confusion
false && console.log('hello');
if (condition){
    console.log('hello');
}



const message = false &&'hello';
console.log(message);

let message;
if(condition){
    message = 'hello';
}
// Useless operator would not recommend to use ever


// Useless and causes confusion too
const currency = undefined ||'USD';
console.log(currency)

if (!condition){
    curency = 'USD';
}




