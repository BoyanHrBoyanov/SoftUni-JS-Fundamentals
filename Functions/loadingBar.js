function loadingBar(num) {
    let reducedNum = num / 10;
    let diff = 10 - reducedNum;
    if (num === 100) {
        console.log('100% Complete!');
    } else if (num === 0) {
        console.log("0% [..........]");
        console.log('Still loading...');
    } else {
        console.log(`${num}% [${"%".repeat(reducedNum)}${".".repeat(diff)}]`);
        console.log('Still loading...');
    }

}
loadingBar(0);
//loadingBar(50);
//loadingBar(100);