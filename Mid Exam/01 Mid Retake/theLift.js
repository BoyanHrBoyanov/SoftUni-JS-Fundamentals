function theLift(input) {
    let peopleWaiting = Number(input[0]);
    let currentState = input[1].split(" ");
    let isZeroLeft = true;

    for (let i = 0; i < currentState.length; i++) {
        let currCabState = Number(currentState[i]);
        let freeInCabin = 4 - currCabState;
        if (peopleWaiting > 0) {
            peopleWaiting -= freeInCabin;
            if (peopleWaiting < 0) {
                currentState[i] = 4 + peopleWaiting;
                peopleWaiting = 0;
                break;
            } else if (peopleWaiting === 0) {
                currentState[i] = 4;
                break;
            } else if (peopleWaiting > 0) {
                currentState[i] = 4;
            }
        }
    }
    if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    } else {
        for (let el of currentState) {
            if (el === 4) {
                continue;
            } else {
                isZeroLeft = false;
                break;
            }
        }
        if (!isZeroLeft) {
            console.log("The lift has empty spots!");
        }
    }
    console.log(currentState.join(" "));
}
theLift(["12", "0 0 0"]);
//theLift(["20", "0 2 0"]);