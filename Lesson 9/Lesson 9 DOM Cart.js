let Cartquantity = 0;

displayCartQuantity();

function updateCartQuantity (change){
    if (Cartquantity +change >10 ) {
        alert('The Cart is Full');
        return;
    }

    if (Cartquantity + change <0){
        alert('Not enough Items in the cart');
        return;
    }
    Cartquantity += change;
    displayCartQuantity();
}

function displayCartQuantity (){
    document.querySelector('.js-newQuantity').innerHTML=` Cart Quantity = ${Cartquantity}`;
}
