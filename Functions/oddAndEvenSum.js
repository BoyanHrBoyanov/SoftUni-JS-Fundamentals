function oddAndEvenSum(num) {
    let stringFromNum = String(num);
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < stringFromNum.length; i++) {
        let currentDigit = Number(stringFromNum[i]);
        if (currentDigit % 2 === 0) {
            sumEven += currentDigit;
        } else {
            sumOdd += currentDigit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);