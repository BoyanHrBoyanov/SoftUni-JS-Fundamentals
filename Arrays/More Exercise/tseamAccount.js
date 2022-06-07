function tseamAccount(arr) {
    let finalArray = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Play!') {
            break;
        } else {
        let newArray = arr[i].split(" ");
        let command = newArray[0];
        let game = newArray[1];

        switch (command) {
            case "Install": 
            if (finalArray.includes(game)) {
                break;
            } else {
                finalArray.push(game);
                break;
            }
            case "Uninstall": 
            if (finalArray.includes(game)) {
                let position = finalArray.indexOf(game);
                finalArray.splice(position, 1);
            } 
            break;
            case "Update": 
            if (finalArray.includes(game)) {
                let position = finalArray.indexOf(game);
                finalArray.splice(position, 1);
                finalArray.push(game);
             } break;
            case "Expansion": 
            let expansionArray = game.split("-");
            let gameToExpansion = expansionArray[0];
            let expansion = expansionArray[1];
            let expanded = gameToExpansion + ":" + expansion;
            if (finalArray.includes(gameToExpansion)) {
                let position = finalArray.indexOf(gameToExpansion);
                finalArray.splice(position + 1, 0, expanded);
            } break;
        }
    }
    }
    console.log(finalArray.join(" "));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 
'Update Diablo', 'Expansion CS-Go', 'Play!']);
//tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 
//'Update WoW', 'Expansion Civ-V', 'Play!']);