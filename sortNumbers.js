function sortNumbers(a, b, c) {
    let nums = [a, b, c];
    let sorted = nums.sort(function(a, b){return a-b});

    console.log(sorted[2]);
    console.log(sorted[1]);
    console.log(sorted[0]);
}
sortNumbers(-2, 1, 3)