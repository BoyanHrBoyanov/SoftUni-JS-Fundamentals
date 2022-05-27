function bitcoinMining(input) {
    let dayCounter = 0;
    let minedForTheDay = 0;
    let forBase = input.length - 1;
    let sumMoney = 0;
    let dayFirstBitcoin = 0;
    let bougthBitcoin = 0;

    for (let i = 0; i <= forBase; i++) {
        dayCounter++;
        minedForTheDay = input[i];
        if (dayCounter % 3 === 0) {
            minedForTheDay *= 0.7;
        }
        sumMoney += minedForTheDay * 67.51;

        if (sumMoney >= 11949.16 && dayFirstBitcoin === 0) {
            dayFirstBitcoin = dayCounter;
        }
    }

    bougthBitcoin = Math.floor(sumMoney / 11949.16);
    let moneyLeft = sumMoney % 11949.16;

    console.log(`Bought bitcoins: ${bougthBitcoin}`);
    if (bougthBitcoin !== 0) {
    console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
    

}
bitcoinMining([3124.15, 504.212, 2511.124]);