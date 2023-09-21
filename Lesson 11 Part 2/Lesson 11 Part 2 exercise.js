function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

function removeEgg(foods) {
    const result = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        }
        result.push(foods[i]);
    }

    return result;
}

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
