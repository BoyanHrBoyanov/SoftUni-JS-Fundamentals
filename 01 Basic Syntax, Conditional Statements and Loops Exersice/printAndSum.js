function printAndSum(x, y) {
    let sum = 0;
    let string = "";
    let finalString = "";
    for (let i = x; i <= y; i++) {
        string = i;
        finalString = finalString + `${i} `;
        sum += i;
        
    }
    console.log(finalString);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);