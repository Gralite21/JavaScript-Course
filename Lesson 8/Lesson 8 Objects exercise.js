const basketballObject= {
    name :'basketball',
    price:2095
};
console.log(basketballObject);

basketballObject.price=2595;        // basketballObject.price += 500;
console.log(basketballObject.price);

basketballObject['delivery-time'] = '3days';
console.log(basketballObject['delivery-time']);


const product1 ={
    name: 'Tim',
    price: 20,
};

const product2={
    name:'Dominik',
    price: 25
};

function comparePrice(product1,product2){
    if (product1.price > product2.price){
        return product2;
    } else if (product1.price < product2.price){
        return product1;
    }
}

function isSameProduct(product1,product2){
    return (product1.name === product2.name && product1.price === product2.price) ;
}

console.log('Good Morning'.toLowerCase());

console.log('test'.repeat(2));
