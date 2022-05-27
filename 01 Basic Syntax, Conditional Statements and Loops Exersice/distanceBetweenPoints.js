function distanceBetweenPoints(x, y, xx, yy) {
    let xPoints = xx - x;
    let xSquare = xPoints * xPoints;
    let yPoints = yy - y;
    let ySquare = yPoints * yPoints;
    let sum = xSquare + ySquare;
    let d = Math.sqrt(sum);

    console.log(d);

}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);