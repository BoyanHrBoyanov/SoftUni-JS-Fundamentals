function addAndSubstract(input) {
    let originalArraySum = 0;
    let newArraySum = 0;
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        originalArraySum += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArraySum += currentNumber;
        newArray.push(currentNumber);
    }
    console.log(newArray);
    console.log(originalArraySum);
    console.log(newArraySum);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);