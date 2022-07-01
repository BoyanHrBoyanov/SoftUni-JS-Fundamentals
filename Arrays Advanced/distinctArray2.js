function demo(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultArray.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray.join(" "));
}
demo([5, 5,1, 2,3, 3 ,4 ,4 ,5])