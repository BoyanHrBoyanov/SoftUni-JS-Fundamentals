function computerStore(arr) {
    let clientType = arr.pop();
    let sum = 0;
    let sumTaxes = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let currentPrice = Number(arr[i]);
        if (arr[i] <= 0) {
            console.log("Invalid price!");
        } else {
            sum += currentPrice;
            sumTaxes += currentPrice * 0.2;
        }
    }
    let totalPrice = sum + sumTaxes;
    if (clientType === "special") {
        totalPrice *= 0.9;
    }
    if (sum === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${sumTaxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([ '1050', '200', '450', '2', '18.50', '16.86', 'special']);
//computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
//computerStore(['regular']);