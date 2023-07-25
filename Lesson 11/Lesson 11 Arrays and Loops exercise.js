const nums=[10,20,30];
nums[2]=99;


function getLastValue(array){
    const lastIndex=array.length-1;
    return array[lastIndex];
}
console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hi','hello','good']));


function arraySwap(array) {
    const lastIndex = array.length - 1;
    const lastValue = array[lastIndex];
    const firstValue = array[0];
    array[0] = lastValue;
    array[lastIndex] = firstValue;
    return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));


for (let i=0;i<=10;i+=2){
    console.log(i);
}

for (let i=10;i>=0;i-=5){
    console.log(i);
}
{
let i=0;
while(i<=10){
    console.log(i);
    i+=2;
}}

{
let i=10
while(i>=0){
    console.log(i);
    i-=5
}}


const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
}

console.log(result);


function addOne(array){
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1);
    }
    return result
}

console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));


function addNum(array,num){
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }
    return result
}
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));
console.log(addNum([1,2,3],3));


function addArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));


function countPositive(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result++;
        }
    }return result;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive(-2,3-5,7,10));


function minMax(nums){

}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));