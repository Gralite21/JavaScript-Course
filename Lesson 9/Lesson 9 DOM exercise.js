console.log(document.querySelector('button'));
document.querySelector('.js-change').innerText ='9b done!';

function nameResult(){
    const inputElement = document.querySelector('.js-input');
    document.querySelector('.js-yourName').innerHTML =`Your Name is ${inputElement.value}`;
}

function nameKey(event){
    if(event.key ==='Enter'){
        nameResult();
    }
}
