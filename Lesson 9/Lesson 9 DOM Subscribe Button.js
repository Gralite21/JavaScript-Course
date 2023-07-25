function subscribe(){
    const buttonElement= document.querySelector('.subscribe-button');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText ='Subscribed';
    }else {
        buttonElement.innerText='Subscribe';
    }
}
