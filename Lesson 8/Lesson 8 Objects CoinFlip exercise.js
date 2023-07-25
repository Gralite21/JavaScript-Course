const score= JSON.parse(localStorage.getItem('score')) ||{
    Wins:0,
    Losses:0
};


let result = '';
function playGame(guess) {
    const randomNumber = Math.random();
    if (randomNumber<0.5){
        result = 'Heads';
    } else{
        result = 'Tails';
    }

    if (guess===result){
        console.log('You Win');
    }else{
        console.log('You Lose');
    }
    if (guess===result){
        score.Wins++;
    } else{
        score.Losses++;
    }
    console.log(score);

    localStorage.setItem('score',JSON.stringify(score));

}