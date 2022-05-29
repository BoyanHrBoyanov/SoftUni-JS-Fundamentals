function sumDigits(num) {
    let text = String(num);
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let currentDigit = Number(text[i]);
        sum += currentDigit;
    }
    console.log(sum);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);

