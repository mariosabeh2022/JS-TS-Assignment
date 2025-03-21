//This function also works with a series of numbers from N to M
function findMissingNumber(arr: number[]): number  {
    //Validating if the array is sorted
    for (let i=0;i<arr.length-1;i++){
        for (let k=0;k<arr.length-i-1;k++){
            if (arr[k]>arr[k+1]){
                let temp=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=temp;
            }
        }
    }
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