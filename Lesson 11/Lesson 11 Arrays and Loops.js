const firstArray= [10,20,30];   // an array is a value with a value list and can be saved inside an variable
console.log(firstArray);
console.log(firstArray[0]);     //shows first value
firstArray[0]=2;        // changes first value to 2
[10,'hi',true,{name:'socks'}[1, 2]] // an array can contain any type of value even an array
Array.isArray([1,2]) // will check if it is an array
firstArray.length // will tell us how many values are inside this array
firstArray.push(100)// will at a value to the array
firstArray.splice(0,2) // removes 2 values starting at the index 0


let i=1;                     // loop variable
while(i<=5){                         //loop condition    //while loop
    console.log(i);
    i++;                     //increment step
}



for (let t=1; t<=5;t++){
    console.log(t);
}

let randomNumber=0;                    //Non standard loop so use while and not for
while (randomNumber<0.5){
    randomNumber=Math.random();
}



const List=[                           // looping through an array
    'make food',
    'wash dishes',
    'repeat'
];
for(let index =0; index<List.length ;index++){
    const value=List[index]
    console.log(value)}

const nums=[1,1,3];                   //Accumulator Pattern
let total= 0;

for (let i=0;i<nums.length;i++){
    const num=nums[i];
    total =total +num;
} console.log(total)

const numsDoubled =[];                      // to double numbers [2,2,6]
for (let i=0;i<nums.length;i++){
    const num=nums[i];
    numsDoubled.push(num*2);

}