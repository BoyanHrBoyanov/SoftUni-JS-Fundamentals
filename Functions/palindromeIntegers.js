function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let stringFromNum = String(arr[i]);
        let newString = "";
        for (let j = stringFromNum.length - 1; j >= 0; j--) {
            newString += stringFromNum[j];
        }
        let rotatedNum = Number(newString);
        if (arr[i] === rotatedNum) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);