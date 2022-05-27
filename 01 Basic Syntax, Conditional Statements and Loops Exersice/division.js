function division(num) {            //2, 3, 6, 7, 10
    let x;
    let isDivisible = true;

    if (num % 10 === 0) {
        x = 10;
    } else if (num % 7 === 0) {
        x = 7;
    } else if (num % 6 === 0) {
        x = 6;
    } else if (num % 3 === 0) {
        x = 3;
    } else if (num % 2 === 0) {
        x = 2;
    } else {
        isDivisible = false;
    }

    if (isDivisible === true) {
        console.log(`The number is divisible by ${x}`);
    } else {
        console.log('Not divisible');
    }

}

division(14);
division(30);
division(15);
division(12);
division(1643);