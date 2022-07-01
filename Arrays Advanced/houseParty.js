function houseParty(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let isGoing = false;
        let command = array[i].split(" ");
        let name = command[0];

        if (command.indexOf("not") < 0) {
            isGoing = true;
        }
        if (result.indexOf(name) < 0 && isGoing) {
            result.push(name);
        } else if (result.indexOf(name) >= 0 && isGoing) {
            console.log(`${name} is already in the list!`);
        } else if (result.indexOf(name) < 0 && !isGoing) {
            console.log(`${name} is not in the list!`);
        } else if (result.indexOf(name) >= 0 && !isGoing) {
            result.splice(result.indexOf(name), 1);
        }
    }
    console.log(result.join('\n'));
}
houseParty(['Allie is going!','George is going!','John is not going!',
            'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 
            'Garry is going!', 'Jerry is going!']);