var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('John', 1990, 'teacher');
var mark = new Person('Mark', 1976, 'developer');
var ali = new Person('Ali', 1988, 'logistics');

console.log(john);

// Prototype

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

mark.calculateAge();

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);  // creates 27 because age is a primitive
console.log(obj.city); // San Francisco


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// Functions returning Functions

function interviewQuestion(job) {
    var a = ', can you please explain what UX design is?';
    var b = 'What subject do you teach, ';
    var c=  ', what do you do?';
        return function(name) {
            if (job === 'designer') {
            console.log(name + a);
            } else if (job === 'teacher') {
            console.log(b + name + '?');
            } else {
            console.log('Hello ' + name + c);
            }
        }
}

var teacherQuestion = interviewQuestion('teacher'); // Burada aslinda bir fonksiyon tanimliyoruz.---|
var designerQuestion = interviewQuestion('designer');    //                                         |
                                                         //                                         |        
                                                         //                                         |         
teacherQuestion('John');  // daha sonra fonksiyon bir isim almasi gerekiyor ----------------------- |
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

// kisa yoldan bu sekilde de yapabiliriz
interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('Gamze');

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();




(function (){

function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
       console.log(i + ': ' + this.answers[i])
    }
}

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer. Try again :)');
    }
}

q1 = new Question('Who are you?', ['Ali', 'Veli', 'Huso'], 0);
q2 = new Question('Is css bullshit?', ['yes', 'no', 'maybe'], 1);
q3 = new Question('What is your profession?', ['teacher', 'designer', 'developer', 'police officer'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);

})();

