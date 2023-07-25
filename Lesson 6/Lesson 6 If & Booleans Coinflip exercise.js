const randomNumber = Math.random( );/*
    const result = randomNumber<0.5 ? 'heads':'tails';  // Short Version
    console.log(result);*/



let result ='';
if (randomNumber>0.5) {
    result = 'heads';
} else {
    result = 'tails';
}

/*const guess = 'heads'

console.log( guess===result ? 'You Win':'You Lose');  // Short Version*/


if(result === 'heads') {
    console.log('You Win');
} else {
    console.log('You Lose');
}

