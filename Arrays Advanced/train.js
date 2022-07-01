function train(array) {
    let index = 0;
    let result = array[index].split(" ").map(Number);
    index++;
    let capacity = Number(array[index]);
    index++;

    for (index; index < array.length; index++) {
        let command = array[index].split(" ");
        if (command[0] === 'Add') {
            result.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < result.length; i++) {
                if (result[i] + passengers <= capacity) {
                    result[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(result.join(" "));
}
train(['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']);
train(['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']);