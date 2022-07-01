function smallestOfThreeNumbers(a, b, c) {
    let smallest = a;
    
    if (b < c && b < a) {
        smallest = b;
    } else if (c < b && c < a) {
        smallest = c;
    }
    console.log(smallest);
}
smallestOfThreeNumbers(2, 5, 3 );
smallestOfThreeNumbers(600, 342, 123 );
smallestOfThreeNumbers(25, 21, 4 );
smallestOfThreeNumbers(2, 2, 2 );