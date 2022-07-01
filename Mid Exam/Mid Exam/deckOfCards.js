function deckOfCards(data) {
    let index = 0;
    let listOfCards = data[index].split(", ");
    index++;
    let n = Number(data[index]);
    index++;

    for (let i = 0; i < n; i++) {
        let commandLine = data[index].split(", ");
        let command = commandLine[0];
        let indexToRemove = 0;

        switch (command) {
            case "Add": 
                if (!listOfCards.includes(commandLine[1])) {
                listOfCards.push(commandLine[1]);
                console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;
            case "Remove": 
                if (listOfCards.includes(commandLine[1])) {
                    indexToRemove = listOfCards.indexOf(commandLine[1]);
                    listOfCards.splice(indexToRemove, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }
                break;
            case "Remove At": 
                indexToRemove = Number(commandLine[1]);
                if (indexToRemove >= 0 && indexToRemove < listOfCards.length) {
                    listOfCards.splice(indexToRemove, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;
            case "Insert": 
                let a = Number(commandLine[1]);
                if (a < 0 || a >= listOfCards.length) {
                    console.log("Index out of range");
                    break;
                } else {
                    if (listOfCards.includes(commandLine[2])) {
                        console.log("Card is already added");
                    } else {
                        listOfCards.splice(a, 0, commandLine[2]);
                        console.log("Card successfully added");
                    }
                }
                break;
        }

        index++;
    }
    console.log(listOfCards.join(", "));

}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"]);