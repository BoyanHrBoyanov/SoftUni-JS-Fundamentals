function numbers(input) {
    let array = input.split(" ");
    let arrayOfNum = array.map(str => {
        return Number(str);
    });
    let finalArray = [];
    let allHigherArray = [];
    let sum = 0;

    for (let el of arrayOfNum) {
        sum += el;
    }

    let average = sum / arrayOfNum.length;
    for (let i = 0; i < arrayOfNum.length; i++) {
        if (arrayOfNum[i] > average) {
            allHigherArray.push(arrayOfNum[i]);
        }
    }
    if (allHigherArray.length === 0) {
        console.log('No');
        return;
    }
    for (let i = allHigherArray.length; i > 0; i--) {
        let currentMax = Math.max(...allHigherArray);
        let index = allHigherArray.indexOf(currentMax);
        finalArray.push(allHigherArray[index]);
        allHigherArray.splice(index, 1);
        if (finalArray.length === 5) {
            break;
        }
    }
    console.log(finalArray.join(" "));
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');