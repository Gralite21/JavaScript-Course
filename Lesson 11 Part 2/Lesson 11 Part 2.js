// Arrays are references like objects

const[firstValue, secondValue]  = [1,2,3]; // Destructuring
console.log(firstValue);
console.log(secondValue);

for (let i=1;i<=10; i++){
    console.log(i);
    if (i===3){           // skips indent number 3
     continue;
     if (i%3===0){       //skips all numbers who can be divided by 3
         continue;
     }
    }
    if (i===8){                 //break loop for early exit
        break;
    }
}

let i=1;
while (i<=10){
    if (i%3===0){
        i++;
        continue;
    }
    console.log(i);
}

function doubleArray(nums){                //functions with array
const numsDoubled =[];
for (let i=0;i<nums.length;i++){
    const num=nums[i];
    if (num===0){
        return numsDoubled;                  //returns array without values being doubled after value 0 inside the array
    }
    numsDoubled.push(num*2);
    }
    return numsDoubled;
}
console.log(doubleArray([1,1,3]));