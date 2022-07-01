function sorting(array) {
    let newArray = array.slice().sort((a, b) => b - a);
    let result = [];
    let cycles = Math.ceil(array.length / 2);
    


    for (let i = 0; i < cycles; i++) {
        result.push(newArray.shift());
        result.push(newArray.pop());
    }
    console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);