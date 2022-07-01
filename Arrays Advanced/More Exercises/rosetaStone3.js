function rosettaStone(arr) {
    let arrModified = [];
    let templateMatrix = [];
    for (let el of arr) { // format matrix to numbers
        arrModified.push(el.split(" ").map(Number));
    }
    let n = arrModified.shift()[0];

    let isN1 = false;
    if (n === 1) {
        templateMatrix = arrModified.shift();
        isN1 = true;
    } else if (n <= 0) {
    	templateMatrix = [0];
    } else {
    for (let i = 0; i < n; i++) { // create the template
    
        templateMatrix.push(arrModified[i]);
    }
}
    
let arrOfNums = [];
    if (!isN1) {
    for (let i = n; i < arrModified.length; i++) { // base array to work with
        arrOfNums.push(arrModified[i].slice(0, arrModified.length - 1));
    }
} else {
    arrOfNums = arrModified.slice();
}
    if (templateMatrix.length > 0) {
    let a = 0;
    let b = 0; // arrOfNums + template !!!
    for (let i = 0; i < arrOfNums.length; i++, a++) { 
        b = 0;
        for (let j = 0; j < arrOfNums[0].length; j++, b++) {
            if (a >= templateMatrix.length) {
                a = 0;
            }
            if (b >= templateMatrix.length) {
                b = 0;
            }
            if (!isN1) {
            arrOfNums[i][j] += templateMatrix[a][b];
            } else if (isN1) {
                arrOfNums[i][j] += templateMatrix[b];
            }
        }
    }
    }

    let finalString = ""; //convert numbers to letters
    for (let i = 0; i < arrOfNums.length; i++) {
        for (let j = 0; j < arrOfNums[0].length; j++) {
            let num = arrOfNums[i][j];
            while (num > 26) {
            	num = num - 27;
            }
            if (num === 0) {
                finalString += " ";
            } else {
                finalString += String.fromCharCode(num + 64);
            }
            
        }
    }
    console.log(finalString);
   } 
   rosettaStone([ '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 99998',
     ]);