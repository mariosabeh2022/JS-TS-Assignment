function findMissingNumber(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != firstElement)
            return firstElement;
        firstElement++;
    }
    return 0;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));