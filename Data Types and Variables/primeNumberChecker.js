function primeNumberChecker(n) {
    let counter = 0;
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            counter++;
        }
    }
    if (counter > 0) {
        console.log('false');
    } else {
        console.log('true');
    }
}
primeNumberChecker(7);