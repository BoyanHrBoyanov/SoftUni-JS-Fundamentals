function guineaPig(array) {
    let food = Number(array[0]);
    let hay = Number(array[1]);
    let cover = Number(array[2]);
    let weight = Number(array[3]);

    if (food <= 9) {
        console.log("Merry must go to the pet store!");
        return;
    }
    for (let i = 1; i <= 30; i++) {
        food -= 0.3;
        if (i % 2 === 0) {
            hay = hay - food * 0.05;
        }
        if (i % 3 === 0) {
            cover = cover - weight / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
}
guineaPig(["10",
"5", 
"5.2", 
"1"]);
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
]);
guineaPig(["9",
"5",
"5.2",
"1"]);