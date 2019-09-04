var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(string){
    return "HELLO " + string.toUpperCase();
}



function percentageStudent(numberOfStudents, numberOfMentors){
    return "Percentage students: " + Math.round(numberOfStudents*100/(numberOfStudents+numberOfMentors)) + '%';
}

function percentageMentor(numberOfStudents, numberOfMentors){
    return "Percentage Mentors: " + Math.round(numberOfMentors*100/(numberOfStudents+numberOfMentors)) + '%'; 
}

var students = percentageStudent(15, 8);
var mentors = percentageMentor(15, 8);

console.log(students);
console.log(mentors);
console.log(shoutyGreeting('Daniel'));
console.log(shoutyGreeting('Irina'));
console.log(shoutyGreeting('Mimi'));
console.log(shoutyGreeting('Rob'));
console.log(shoutyGreeting('Yohannes'));

