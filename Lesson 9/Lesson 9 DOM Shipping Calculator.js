function costKey(event){
    console.log(event.key);
    if(event.key==='Enter'){
        calculateTotal();
    }
}
function calculateTotal(){
    const inputElement = document.querySelector('.js-cost')
    let cost = Number(inputElement.value)*100;

    if (cost<4000){
        cost = cost +1000;
    }

    document.querySelector('.js-total-cost').innerHTML=`$${cost /100}`;
}
