function spiceMustFlow(yield) {
    let dayCounter = 0;
    let sum = 0;
    let n = Number.MAX_SAFE_INTEGER

    for (let i = 0; i <= n; i++) {
        if (yield < 100) {
            break;
        }
        dayCounter++;
        sum += yield;
        yield -= 10;

        if (sum >= 26){
        sum -= 26
        }
    }
    if (sum >= 26){
        sum -= 26
        }

    console.log(dayCounter);
    console.log(sum);

}
spiceMustFlow(450);