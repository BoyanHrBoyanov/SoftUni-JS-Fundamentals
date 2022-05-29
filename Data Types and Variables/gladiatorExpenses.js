function gladiatorExpenses(lostFights, helmetPrice, swordPrice,
    shieldPrice, armorPrice) {
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCounter++;
        }
        if (i % 3 === 0) {
            swordCounter++;
        }
        if (i % 6 === 0) {
            shieldCounter++;
        }
        if (i % 12 === 0) {
            armorCounter++;
        }
    }
    let expenses = helmetCounter * helmetPrice + swordCounter * swordPrice
        + shieldCounter * shieldPrice + armorCounter * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);


}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);