function searchForANumber(nums, indexes) {
    let numbersToTake = indexes[0];
    let elementsToDelete = indexes[1];
    let numberToSearch = indexes[2];

    let result = nums.slice(0, numbersToTake);
    result = result.splice(elementsToDelete, result.length);

    let counter = 0;

    while (result.indexOf(numberToSearch) >= 0) {
        result.splice(result.indexOf(numberToSearch), 1);
        counter++;
    }
    console.log(`Number ${numberToSearch} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);