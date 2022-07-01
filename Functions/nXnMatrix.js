function nXnMatrix(n) {
    let newArray = Array.from(Array(n), () => {
        return new Array(n).fill(n);
    })
    newArray.forEach(row => console.log(row.join(" ")));
}
nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);