function biggestOf3(a, b, c) {
    let biggest = Number.MIN_SAFE_INTEGER;

    if (a > biggest) {
        biggest = a;
    }
    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }

    console.log(biggest);
}
biggestOf3(-2, 7, 3);
biggestOf3(130, 5, 99);
biggestOf3(43, 43.2, 43.1);
biggestOf3(2, 2, 2);