var mathMarks = 75.25;
var biogloyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biogloyMarks + chemistryMarks + physicsMarks + banglaMarks;
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
averageTwoDecimal = parseFloat(averageTwoDecimal)
console.log(averageTwoDecimal);