function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let stepCounter = 0;
    let start = base;
    
    let stoneSum = 0;
    let marbleSum = 0;
    let lapisLazuliSum = 0;
    let goldSum = 0;
    
    for (let i = start; i >= 1; i -= 2) {
        stepCounter++;
        let squareBase = base * base;
        let perimeter = base * 4;
        if (squareBase === 4 || squareBase === 1) {
            gold += squareBase;
            break;
        }
        if (stepCounter % 5 === 0) {
            lapisLazuli += perimeter - 4;
            stone += squareBase - perimeter + 4;
            base -= 2;
            continue;
        }


        marble += perimeter - 4;
        stone += squareBase - perimeter + 4;

        base -= 2;
    }

    stoneSum = stone * increment;
    marbleSum = marble * increment;
    lapisLazuliSum = lapisLazuli * increment;
    goldSum = gold * increment;
    let finalHeight = stepCounter * increment;

    console.log(`Stone required: ${Math.ceil(stoneSum)}`);
    console.log(`Marble required: ${Math.ceil(marbleSum)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliSum)}`);
    console.log(`Gold required: ${ Math.ceil(goldSum)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);

}
thePyramidOfKingDjoser(23, 0.5);