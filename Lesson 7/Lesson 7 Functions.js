function function1(){              // Creates Function
    console.log('hello');
    console.log(2+2);

}

function1();  //runs code

function calculateTax(cost,taxPercent = 0.1){        // parameter
    console.log(cost * taxPercent);
}

calculateTax(2000,0.2);           // u can reassign parameter
calculateTax(8780);              // uses default tax
