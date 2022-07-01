function numberModification(num) {
    let stringFromNum = String(num);
    let sum = 0;

    for (let i = 0; i < stringFromNum.length; i++) {
        let currentNum = Number(stringFromNum[i]);
        sum += currentNum;
    }
    if (sum / stringFromNum.length > 5) {
        console.log(num);
        return;
    } else {
        stringFromNum += "9";
        let modifiedNum = Number(stringFromNum);
        numberModification(modifiedNum);
    }
}
numberModification(101);
numberModification(5835);