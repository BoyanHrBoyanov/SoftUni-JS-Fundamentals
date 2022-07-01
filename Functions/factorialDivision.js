function factorialDivision(a, b) {
    let aFactoriel = 0;
    let bFactoriel = 0;
    if (a === 0) {
        aFactoriel = 1;
    }
    if (b === 0) {
        bFactoriel = 1;
    }

    if (aFactoriel === 0) {
        aFactoriel++;
        for (let i = a; i > 0; i--) {
            aFactoriel *= i;
        }
    }
    if (bFactoriel === 0) {
        bFactoriel++;
        for (let i = b; i > 0; i--) {
            bFactoriel *= i;
        }
    }
    let division = aFactoriel / bFactoriel;
    console.log(division.toFixed(2));
    
}
factorialDivision(5, 2);
factorialDivision(6, 2);
factorialDivision(0, 0);