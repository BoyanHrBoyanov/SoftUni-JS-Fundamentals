function nonDecreasingSubset(arr){
    let currentNumber = arr[0];
    let newArray = [currentNumber];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= currentNumber) {
            currentNumber = arr[i];
            newArray.push(currentNumber);
        }
    }
    console.log(newArray.join(" "));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);