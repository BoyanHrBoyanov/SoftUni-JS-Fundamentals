function triangleOfNumbers(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        string = i + " ";
        console.log(`${string.repeat(i)}`);
    }

}

triangleOfNumbers(6);