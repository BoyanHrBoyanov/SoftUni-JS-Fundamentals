function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let dist1To0 = Math.sqrt((0 - x1) * (0 - x1) + (0 - y1) * (0 - y1));
    let dist2To0 = Math.sqrt((0 - x2) * (0 - x2) + (0 - y2) * (0 - y2));
    let dist1To2 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    
    if (dist1To0 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (dist2To0 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (dist1To2 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);