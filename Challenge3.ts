//This function also works with a series of numbers from N to M
function findMissingNumber(arr: number[]): number  {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != firstElement)
            return firstElement;
        firstElement++;
    }
    return 0;
}
console.log(findMissingNumber([1,2,4,5,6]));
// console.log(findMissingNumber([4,5,6,8,9])); // Returns 7