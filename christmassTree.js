function demo(n){
    let k = 1;
    let odd = "# ";
    let even = "$ ";
    let space = " ";

    for (let i = 1; i <= n; i++) {
        let m = n - k;
        if (k % 2 ===0) {
            console.log(`${space.repeat(m)}${even.repeat(k)}`);
        } else {
            console.log(`${space.repeat(m)}${odd.repeat(k)}`);
        }

        k++
    }

}
demo(10)