function printNthElement(arr) {
    let arrL = arr.length;
    let n = Number(arr[arrL - 1]);
    let print = "";
    print += arr[0] + " ";

    for (let i = n; i < arrL; i += n) {
        if (i === arrL - 1) {
            break;
        } else {
        print += arr[i] + " ";
        }
    }
    console.log(print);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);