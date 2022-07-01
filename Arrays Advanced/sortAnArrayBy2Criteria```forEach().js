function sortAnArrayBy2Criteria(array) {
    let sortedArray = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArray.forEach(el => console.log(el));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);