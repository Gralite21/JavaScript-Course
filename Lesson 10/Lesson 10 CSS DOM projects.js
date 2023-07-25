function costKey(event){
    console.log(event.key);
    if(event.key==='Enter'){
        calculateTotal();
    }
}
function calculateTotal(){
    const inputElement = document.querySelector('.js-cost')
    let cost = Number(inputElement.value)*100;

    if(cost<0){
        document.querySelector('.js-total-cost').innerHTML='Error: Cost cannot be less than $0';
        return;
    }

    if (cost<4000){
        cost = cost +1000;
    }

    document.querySelector('.js-total-cost').innerHTML=`$${cost /100}`;
}

function subscribe(){
    const buttonElement= document.querySelector('.subscribe-button');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText ='Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else {
        buttonElement.innerText='Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}
