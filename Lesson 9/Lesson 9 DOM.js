document.body             //html element is converted into JS object
document.body.innerHTML = 'Hello';               //  changes the whole html inside the body element to the string hello
document.title = 'Change';                //       Changes Title to Change

console.log(document.body);  // gives us all buttons ...
console.log(document.body.innerHTML); // gives us all inside the body element


document.body.innerHTML  // Creates new html and removes the old html

document.querySelector('button');//lets us get any element from the page and put it inside ur JS(script)
document.querySelector('button').innerHTML;   // every html element has a property(inner.html)          // only gets first button
document.querySelector('button').
    innerHTML ='changed'; // changes html inside the button

const buttonElement=document.querySelector('.js-button')    // selects element with class and creates a variable for this

