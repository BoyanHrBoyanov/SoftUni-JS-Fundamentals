function jansNotation(arr) {
    let numsArray = [];
    let operatorsArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            numsArray.push(arr[i]);
        } else {
            operatorsArray.push(arr[i]);
            if (numsArray.length >= 1 && operatorsArray.length === 0) {
                console.log("Error: not enough operands!");
                return;
            }
            
            while (numsArray.length > 1 && operatorsArray.length > 0) {
                    let result = 0;
                    let b = numsArray.pop();
                    let a = numsArray.pop();
                    let operator = operatorsArray.shift();
                    switch (operator) {
                        case "+": result = a + b; break;
                        case "-": result = a - b; break;
                        case "*": result = a * b; break;
                        case "/": result = a / b; break;
                    }
                    numsArray.push(result);
            }
        }
    }
    if (numsArray.length === 1 && operatorsArray.length === 0) {
        console.log(numsArray[0]);
    } else if (numsArray.length > 1 && operatorsArray.length === 0) {
        console.log("Error: too many operands!");
    } else if (numsArray.length <= 1 && operatorsArray.length >= 1) {
        console.log("Error: not enough operands!");
    }

}
// jansNotation([3, 4, '+']);
// jansNotation([5, 3, 4, '*', '-']);
// jansNotation([15, '/']);
jansNotation([-1, 1,'+', 101,'*', 18,'+', 3,'/']);