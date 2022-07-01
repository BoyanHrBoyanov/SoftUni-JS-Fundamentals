function bonusScoringSystem(input){
    let inputNums = input.map(Number);
    let numOfLectures = inputNums[1];
    let additionalBonus = inputNums[2];
    let attendances = inputNums.slice(3)
    attendances.sort((a,b) => b - a);

    let totalBonus = ((1.0 * attendances[0]) / numOfLectures) * (5 + additionalBonus);

    console.log(`Max Bonus: ${Math.round(totalBonus)}.`);
    console.log(`The student has attended ${attendances[0]} lectures.`);

}
bonusScoringSystem([
  '1',  '1', '0',
  '1']);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);