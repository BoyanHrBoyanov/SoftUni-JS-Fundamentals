function radioCrystals(arr) {
    let desiredThickness = arr[0];
    
    
    for (let i = 1; i < arr.length; i++) {
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let currentThickness = arr[i];
        let reducedThickness = currentThickness
        console.log(`Processing chunk ${currentThickness} microns`);

        if (reducedThickness / 4 >= desiredThickness) { // Cut
        while (reducedThickness / 4 >= desiredThickness) {
            reducedThickness /= 4;
            cutCounter++;
        }
    }
        if (cutCounter > 0) {
            reducedThickness = Math.floor(reducedThickness);
            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');
        }
        if (reducedThickness * 0.8 >= desiredThickness) { // Lap
            while (reducedThickness * 0.8 >= desiredThickness) {
                reducedThickness *= 0.8;
                lapCounter++;
            }
        }
        if (lapCounter > 0) {
            reducedThickness = Math.floor(reducedThickness);
            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');
        }

        if (reducedThickness - 20 >= desiredThickness) { // Grind
            while (reducedThickness - 20 >= desiredThickness) {
                reducedThickness -= 20;
                grindCounter++;
            }
        }
        if (grindCounter > 0) {
            reducedThickness = Math.floor(reducedThickness);
            console.log(`Grind x${grindCounter}`);
            console.log('Transporting and washing');
        }

        if (reducedThickness - 2 >= desiredThickness - 1) { // Etch
            while (reducedThickness - 2 >= desiredThickness - 1) {
                reducedThickness -= 2;
                etchCounter++;
            }
        }
        if (etchCounter > 0) {
            reducedThickness = Math.floor(reducedThickness);
            console.log(`Etch x${etchCounter}`);
            console.log('Transporting and washing');
        }

        if (reducedThickness + 1 === desiredThickness) { // X-ray
            reducedThickness++;
            console.log('X-ray x1');
        }
        if (reducedThickness === desiredThickness) {
            console.log(`Finished crystal ${desiredThickness} microns`);
        }
    }
}
//radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
