function cookingMasterclass(input) {
    let budget = input[0];
    let students = input[1];
    let flourPrice = input[2];
    let eggPrice = input[3];
    let apronPrice = input[4];

    let fifthPackagesFlour = Math.floor(students / 5);
    let flourPcs = students - fifthPackagesFlour;
    let eggsPcs = students * 10;
    let aprronPcs = Math.ceil(students * 1.2);

    let sum = flourPcs * flourPrice + eggsPcs * eggPrice + aprronPcs * apronPrice;
    let diff = Math.abs(budget - sum);
    if (sum <= budget) {
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }

}
// cookingMasterclass([50,
//     2,
//     1.0,
//     0.10,
//     10.0]);
cookingMasterclass([100,
    25,
    4.0,
    1.0,
    6.0]);
// cookingMasterclass([946, 
//     20, 
//     12.05, 
//     0.42, 
//     27.89]);