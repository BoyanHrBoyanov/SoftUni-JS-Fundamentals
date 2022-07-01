function heartDelivery(input) {
    let neighborhood = input[0].split("@").map(Number);
    let index = 0;
    let isMissionSuccessful = true;
    let failedCounter = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(" ");
        let jumpLength = Number(command[1]);

        if (command[0] === "Jump") {
            if (jumpLength + index >= neighborhood.length) {
                index = 0;
            } else {
                index += jumpLength;
            }
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} already had Valentine's day.`);
            } else {
            neighborhood[index] -= 2;
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
            }
        } else {
            console.log(`Cupid's last position was ${index}.`);
            for (let j = 0; j < neighborhood.length; j++) {
                if (neighborhood[j] > 0) {
                    failedCounter++;
                    isMissionSuccessful = false;
                }
            }
            if (isMissionSuccessful) {
                console.log(`Mission was successful.`);
            } else {
                console.log(`Cupid has failed ${failedCounter} places.`);
            }
        }
    }
}
//heartDelivery(["10@10@10@2",
//"Jump 1",
//"Jump 2",
//"Love!"]);
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]
);