function softUniReception(input) {
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let studentsOnReception = Number(input[3]);
    let sumAnswearsForHour = firstEmployee + secondEmployee + thirdEmployee;
    let hoursPassed = 0;
    let questionsLeft = studentsOnReception;

    while (questionsLeft > 0) {
        hoursPassed++;
        if (hoursPassed % 4 === 0) {
            continue;
        }
        questionsLeft -= sumAnswearsForHour;
    }
    console.log(`Time needed: ${hoursPassed}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);