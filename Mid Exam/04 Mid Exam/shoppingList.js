function shoppingList(input) {
    let list = input[0].split("!");
    
    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(" ");
        let index = list.indexOf(command[1]);
        
        switch (command[0]) {
            case "Urgent":                
                if (index < 0) {
                    list.splice(0, 0, command[1]);
                }
                break;
            case "Unnecessary":
                if (index >= 0) {
                    list.splice(index, 1);
                }
                break;
            case "Correct": 
                if (index >= 0) {
                    list.splice(index, 1, command[2]);
                }
                break;
            case "Rearrange":
                if (index >= 0) {
                    list.splice(index, 1);
                    list.push(command[1]);
                }
                break;
            case "Go": 
                console.log(list.join(", "));
                break;
        }
    }
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
;