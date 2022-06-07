function rotateArray(arr) {
    let rotations = Number(arr.pop());

    while (rotations > 0) {
        let elementToMove = arr.pop();
        arr.unshift(elementToMove);

    rotations--;
    }
    console.log(arr.join(" "));
    
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);