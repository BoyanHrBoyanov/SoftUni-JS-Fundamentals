function login(input) { //firstTry, secondTry, thirdTry, fourthTry
    let index = 0;
    let userName = input[index];
    index++;

    let numOfDigits = Number(userName.length);
    let end = numOfDigits - 1;
    let pass = "";

    for (let i = end; i >= 0; i--) {
        let currentLetter = userName.charAt(i);
        pass += currentLetter;
    }

    for (let j = 1; j <= 4; j++) {
        let answear = input[index];
        index++;
        
        
        if (answear === pass) {
            console.log(`User ${userName} logged in.`);
            break;
        }
        if (j === 4) {
            console.log(`User ${userName} blocked!`)
            break;
        }
        if (answear !== pass) {
            console.log("Incorrect password. Try again.");
        }

}
}

login(['Acer','login','go','let me in','recA']);