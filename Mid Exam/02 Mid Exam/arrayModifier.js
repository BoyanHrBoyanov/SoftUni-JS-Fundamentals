function arrayModifier(input) {
    let initialArray = Array(input.shift());
    initialArray = initialArray[0].split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let commandToDo = command[0];

        switch (commandToDo) {
            case "swap":
                initialArray = swap(initialArray, command[1], command[2]);
                break;
            case "multiply":
                initialArray = multiply(initialArray, command[1], command[2]);
                break;
            case "decrease":
                initialArray = decrease(initialArray);
                break;
            case "end":
                console.log(initialArray.join(", "));
                break;
        }
    }
    function swap(arr, a, b) {
        let holder = arr[a];
        arr[a] = arr[b];
        arr[b] = holder;
        return arr;
    }
    function multiply(arr, a, b) {
        arr[a] = arr[a] * arr[b];
        return arr;
    }
    function decrease(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i]--;
        }
        return arr;
    }
}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0',
    'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3',
    'multiply 1 2', 'decrease', 'end']);