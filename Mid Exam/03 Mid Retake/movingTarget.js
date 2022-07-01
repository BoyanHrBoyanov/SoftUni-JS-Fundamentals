function movingTarget(array) {
    let sequence = array.shift().split(" ").map(Number);

    for (let i = 0; i < array.length; i++) {
        let currentComand = array[i].split(" ");
        let index = Number(currentComand[1]);
        switch (currentComand[0]) {
            case "Shoot": sequence = shoot(sequence, currentComand); break;
            case "Add":
                if (index < 0 || index >= sequence.length) {
                    console.log("Invalid placement!");
                    continue;
                } else {
                    sequence = add(sequence, currentComand);
                }
                break;
            case "Strike":
                let radius = Number(currentComand[2]);
                if (index - radius < 0 || index + radius >= sequence.length) {
                    console.log("Strike missed!");
                } else {
                    sequence = strike(sequence, currentComand);
                }
                break;
            case "End": console.log(sequence.join("|")); break;
        }
    }

    function shoot(sequence, currentCommand) {
        let index = Number(currentCommand[1]);
        let power = Number(currentCommand[2]);
        let shotTarget = sequence[index] - power;
        if (index < 0 || index >= sequence.length) {
            return sequence;
        } else if (shotTarget < 0) {
            sequence[index] = 0;
        } else {
            sequence[index] = shotTarget;
        }
        if (shotTarget <= 0) {
            sequence.splice(index, 1);
        }
        return sequence;
    }

    function add(sequence, currentComand) {
        let index = Number(currentComand[1]);
        let value = Number(currentComand[2]);
        sequence.splice(index, 0, value);
        return sequence;
    }

    function strike(sequence, currentComand) {
        let index = Number(currentComand[1]);
        let radius = Number(currentComand[2]);
        let radiusStart = index - radius;
        let radiusEnd = index + radius;
        let elementsToRemove = radiusEnd - radiusStart + 1;

        sequence.splice(radiusStart, elementsToRemove)
        return sequence;
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
//movingTarget(["1 2 3 4 5",
//"Strike 0 1",
//"End"]);