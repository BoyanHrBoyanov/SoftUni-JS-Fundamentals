function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    
    let x = num.toFixed(precision);
    let y = Number(x);
    console.log(y);

}

rounding(3.54000, 3)