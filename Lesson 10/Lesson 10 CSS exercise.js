/*

const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));           // checks if button has the class js-button

function toggled(selector){
    const button = document.querySelector('.onOff')
    if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
    } else{
        button.classList.remove('is-toggled');
    }
}
function toggled2(){
    const button = document.querySelector('.onOff2')
    if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
    } else{
        button.classList.remove('is-toggled');
    }
}
function toggled3(){
    const button = document.querySelector('.onOff3')
    if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
    } else{
        button.classList.remove('is-toggled');
    }
}


 */
function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {
        turnOf();
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function turnOf () {
    const previousButton = document.querySelector('.is-toggled')
    if(previousButton){
        previousButton.classList.remove('is-toggled');
    }
}

