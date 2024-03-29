const product = {
    name: 'socks',
    price: 1090
};
console.log(product);         // Shows property in Curly Brackets
console.log(product.name);    //Displays name
console.log(product.price);   //Shows price

product.name='cotton socks'; // changes value in the following process
console.log(product);

product.newProperty = 'True';// creates a new property
console.log(product);

delete product.newProperty ;  // deletes a Property
console.log(product);

const  product2= {
    name:'shirt',
    'delivery-time': '1day',
    rating:{                // we can save objects in objects too
        stars: 4.5,
        count: 87
    },
    fun: function function1 (){
        console.log('function inside object');
    }

};
console.log(product2);
console.log(product2.name);

console.log(product2['name']); // Same like dot notation lets us use properties that dont work with dot notations for example...

console.log(product2['delivery-time']); // Js will think that we want math in dot notation Or...
console.log(product2[variable]);
console.log(product2['delivery'+'time']); //==> variable,calculation, anything that results into a value

console.log(product2.rating.stars);

product2.fun();    //to run function inside object

const product3={            //JSON version of product 2
    "name" : "shirt",          // can be understood by almost every programming language
    "delivery-time": "1day",        // doesnt support functions
    "rating":{
        "stars": 4.5,
        "count": 87
    }
};

console.log(JSON.stringify(product2));   // converts JS object to JSON object in Strings

const jSONString = JSON.stringify(product2)
console.log(JSON.parse(jSONString))         //JS object into  JS object

localStorage.setItem('name','value');  // to store
localStorage.setItem('name',JSON.stringify(value));  //to store when u have a value( cause strings)

JSON.parse(localStorage.getItem('name')); // to get a value out of the Storage

localStorage.removeItem('name'); // reset value

console.log('hello'.length); // tells us how many letters
console.log('hello'.toUpperCase()); // gives a copy in Caps

const object1 = {
    message:'hello'
};              // an object is just a reference ==> thats point to the object in the memory

object1===object2 // We cant compare objects because they have different references

const object4 = {
    message: 'Hi',
    price: 799
};
