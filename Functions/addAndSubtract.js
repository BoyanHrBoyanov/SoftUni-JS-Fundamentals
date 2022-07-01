function addAndSubtract(a, b, c) {
    console.log(subtract(c));

    function subtract(subtracter) {
        return sum(a, b) - subtracter;
    }

    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);