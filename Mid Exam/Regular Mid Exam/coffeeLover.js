function coffeeLover(data) {
    let index = 0;
    let coffeeList = data[index].split(" ");
    index++;
    let n = Number(data[index]);
    index++;

    for (let i = 0; i < n; i++) {
        let commandLine = data[index].split(" ");
        let command = commandLine[0];

        switch (command) {
            case "Include": coffeeList.push(commandLine[1]); break;
            case "Remove": 
            let n = Number(commandLine[2]);
                if (n <= coffeeList.length) {
                    if (commandLine[1] === "first") {
                        coffeeList.splice(0, n);
                    } else {
                        for (let j = 0; j < n; j++){
                            let removed = coffeeList.pop();
                        };
                    }
                }
                break;
            case "Prefer": 
                let a = Number(commandLine[1]);
                let b = Number(commandLine[2]);
                if (a >= 0 && a < coffeeList.length) {
                    if (b >= 0 && b < coffeeList.length) {
                        let coffee = coffeeList[a];
                        coffeeList[a] = coffeeList[b];
                        coffeeList[b] = coffee;
                    }
                }
                break;
            case "Reverse": coffeeList.reverse(); break;
        }
        index++;
    }
    console.log(`Coffees:\n${coffeeList.join(" ")}`);
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"1",
"Remove last 7",]
);