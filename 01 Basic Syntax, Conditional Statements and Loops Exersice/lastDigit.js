function lastDigit(num) {
    let a = num % 10;
    let b = "";
    
    if (a === 0) {
        b = "zero";
    } else if (a === 1) {
        b = "one";
    } else if (a === 2) {
        b = "two";
    }  else if (a === 3) {
        b = "three";
    } else if (a === 4) {
        b = "four";
    } else if (a === 5) {
        b = "five";
    } else if (a === 6) {
        b = "six";
    } else if (a === 7) {
        b = "seven";
    } else if (a === 8) {
        b = "eight";
    } else if (a === 9) {
        b = "nine";
    } 
    
    console.log(b);
      
}
lastDigit(3456);