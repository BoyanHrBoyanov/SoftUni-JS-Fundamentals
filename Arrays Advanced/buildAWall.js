function buildAWall(array) {
    let newArray = array.slice();
    let sumConcrete = 0;
    let dailyArray = []
    for (let i = 1; i <= 30; i++) {
        let sumConcreteDaily = 0;
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] < 30){
                sumConcreteDaily += 195;
                newArray[j]++;
            }
        }
        if (sumConcreteDaily === 0) {
            break;
        }
        dailyArray.push(sumConcreteDaily);
        sumConcrete += sumConcreteDaily;
        
    }
    console.log(dailyArray.join(", "));
    console.log(`${sumConcrete * 1900} pesos`);
}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);