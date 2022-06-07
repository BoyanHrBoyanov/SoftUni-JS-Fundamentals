function orbit(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let x = input[2];
    let y = input[3];
    let counter = 2;
    let counterToStop = 1;

    let arr = Array.from(Array(w), () => {
        return new Array(w).fill(0)
    })
    
    let k = 1;
    while (counterToStop <= w * h) {
    for (let i = x - k; i <= x + k; i++) {
        if (i >= w || i < 0) {
            continue;
        }
        for (let j = y - k; j <= y + k; j++) {
            if (j >= h || j < 0) {
                continue;
            }
            if (arr[i][j] === 0) {
            arr[i][j] = counter;
            counterToStop++;
            } else {
                continue;
            }
        }
    
    }
    counter++;
    k++;
}
    arr[x][y] = 1;
    arr.forEach(row => console.log(row.join(" ")));
}
orbit([5, 5, 2, 2]);
orbit([4, 4, 0, 0]);
orbit([3, 3, 2, 2]);