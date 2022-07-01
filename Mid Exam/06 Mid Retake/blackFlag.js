function blackFlag(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let sum = 0;
    let thirdDayPlunder = dailyPlunder * 0.50;

    for (let i = 1; i <= days; i++) {
        sum += dailyPlunder;
        if (i % 3 === 0) {
            sum += thirdDayPlunder;
        } 
        if (i % 5 === 0) {
            sum = sum * 0.70;
        }
    }
    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (sum / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5",
"40",
"100"]);
// blackFlag(["10",
// "20",
// "380"]);
