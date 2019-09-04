var numberOfStudents = 15;
var numberOfMentors = 8;

var studentsPercentage = Math.round(numberOfStudents*100/(numberOfStudents+numberOfMentors));
var mentorsPercentage = Math.round(numberOfMentors*100/(numberOfStudents+numberOfMentors));

console.log('Percantage students: ' + studentsPercentage + '%');
console.log('Percentage mentors: ' + mentorsPercentage + '%');
