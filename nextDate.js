function nextDate(year, month, day) {
    let realMonth = month - 1;
    let realDay = day + 1;
    let other = new Date(year, realMonth, realDay).toISOString().split('T')[0].replace(/\b0/g, '');

    console.log(other);

}
nextDate(2016, 9, 30)