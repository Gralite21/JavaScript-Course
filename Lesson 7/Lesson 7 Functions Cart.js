let Cartquantity = 0;

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
    console.log(`Cart quantity ${Cartquantity}`);

}