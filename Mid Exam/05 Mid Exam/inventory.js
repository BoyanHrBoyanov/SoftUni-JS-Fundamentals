function inventory(arr) {
    let currentInventory = arr.shift().split(", ");

    for (let i = 0; i < arr.length; i++) {
        let commandLine = arr[i].split(" - ");
        let command = commandLine[0];
        let index = 0;
        switch (command) {
            case "Collect": 
                if (!currentInventory.includes(commandLine[1])) {
                    currentInventory.push(commandLine[1]);
                }
                break;
            case "Drop": 
                if (currentInventory.indexOf(commandLine[1]) >= 0) {
                    index = currentInventory.indexOf(commandLine[1]);
                    currentInventory.splice(index, 1);
                }
                break;
            case "Combine Items": 
                let items = commandLine[1].split(":");
                if (currentInventory.includes(items[0])) {
                    index = currentInventory.indexOf(items[0]);
                    currentInventory.splice(index+1, 0, items[1]);
                }
                break;
            case "Renew": 
                if (currentInventory.includes(commandLine[1])) {
                    index = currentInventory.indexOf(commandLine[1]);
                    currentInventory.splice(index, 1);
                    currentInventory.push(commandLine[1]);
                }
                break;
            case "Craft!": 
                console.log(currentInventory.join(", "));
                break;
        }
    }
}
// inventory(['Iron, Wood, Sword', 
// 'Collect - Gold', 
// 'Drop - Wood', 
// 'Craft!'
// ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );