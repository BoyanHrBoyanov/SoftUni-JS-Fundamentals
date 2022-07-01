function charactersInRange(a, b) {
    let num1 = a.charCodeAt(0);
    let num2 = b.charCodeAt(0);
    let high = 0;
    let low = 0;
    let finalString = "";
    if (num1 > num2) {
        high = num1;
        low = num2;
    } else {
        high = num2;
        low = num1;
    }

    for (let i = low + 1; i < high; i++) {
        finalString = finalString + String.fromCharCode(i) + " ";
    }
    console.log(finalString);
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');