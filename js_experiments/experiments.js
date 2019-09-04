const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const temperatureToday = 86;

if (temperatureToday === 86) {
  console.log("it is too damn hot");
} else {
  console.log("it is fine. maybe");
}

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("cool, now I have a lot of nachosto myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("woow turn on the dance music!");
}

// loops

let friend = 0;

friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;
friend = friend + 1;

console.log(friend);

// instead of writing top you can use loop

// let friend = 0: (we didnt decleare since it has already been )
while (friend < 10) {
  friend = friend + 1;
}
console.log(friend);

let friends = 0;
for (let i = 0; i <= 10; i++) {
  friends++;
}
console.log(friends);

const character = "a";
const timesToRepeat = 50;
let answer = " ";
// as long as i<=timesToRepeat answer = character
for (let i = 0; i <= timesToRepeat; i++) {
  answer += character;
}

console.log(answer);
console.log(answer.length);

function greet(firstName, lastName, honorific, greeting) {
  return (
    greeting +
    " " +
    honorific +
    " " +
    lastName +
    " " +
    "I am extremely pleased you could join us," + //
    " " +
    firstName +
    " I hope you enjoy your stay, " +
    honorific +
    " " +
    lastName +
    "."
  );
  // this can be written like that
  //return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us,
  // ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
logOutYourHome("Cayeli", "Rize", "Turkey");

// OBJECTS

const person = {
  name: "Ali Pehlivan",
  city: "Rize",
  state: "Greater Rize",
  favoriteFood: "Hamsi",
  wantsTeaRightNow: true,
  numberOfTeaWanted: 1,
  address: {
    street: "Crown lane",
    no: "8"
  }
};

console.log(person);
console.log(person.name);
console.log(person.address.street);
console.log(person["name"]); // this is not used. just when u see it know itgit

/*
//fizzBuzz

console.log(
    Array.apply(null, {length: 100}).map(function(val, index) {
      index++;
      if (index % 15 == 0){return "FizzBuzz";}
      if (index % 3 == 0){return "Fizz";}
      if (index % 5 == 0){return "Buzz";}
      return index;
    }).join('\n')
  );

  for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

  */

const person1 = {
  name: "Ali",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you will like Ibrahim Tatlises.");
  } else if (person.ageRange === "65-75") {
    console.log("You are obviously going to like Hakki Bulut.");
  } else {
    console.log("Uh, maybe try Sezen Aksu? Everyone likes Sezen Aksu, right?");
  }
}

suggestMusic(person1);
suggestMusic(person2);

const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};

dog.speak();

const me = {
  name: {
    first: "Ali",
    last: "Pehlivan"
  },
  location: {
    city: "Rize",
    state: "Greater Rize",
    country: "Turkey"
  }
};

console.log(me);
console.log(me.location.state);

const alphabet = "abcdefghilmnopqrstuvwxyzA".split("");
const vowels = "aeiou".split("");
let val = "A";

function LetterChanges(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    val = alphabet[alphabet.indexOf(str[i]) + 1];
    if (vowels.includes(val)) {
      console.log(val.toUpperCase());
    } else {
      console.log(val);
    }
  }
}

console.log(LetterChanges("zaman"));

var languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};

var arrLanguages = Object.keys(languages);

//   function greet(language) {
//    if (arrLanguages.includes(language)){
//      return  languages.language;
//   }
//   else {return languages.english}
//   }

console.log(languages.polish);
//


function compareTriplet(a, b) {
  var arr = [];
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      arr[0] += 1;
    } if (a[i] < b[i]) {
      arr[1] += 1;
    }
  }
  return arr;
}

console.log(compareTriplet([1, 6, 3], [3, 2, 1]));



function validateDate(date){
  
  let arrDate = date.split("/").map(Number);
  let day = arrDate[0];
  let month = arrDate[1];
  let year = arrDate[2];

  var currentDate = new Date();

  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based
  var currentYear = currentDate.getFullYear();
  var daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year < currentYear) {
    return false;
  } else if (year === currentYear && month < currentMonth) {
    return false;
  } else if (year === currentYear && month === currentMonth && day < currentDay) {
    return false;
  } else if (month > 12 || month < 1) {
    return false;
  } else if (month === 1 || month > 2) {
    if (day > daysOfMonths[month - 1] || day < 1) {
      return false;
}
  }  else if (month === 2) {
    if (year % 4 === 0 && day > 29) {
      return false;
    } else if (year % 4 !== 0 && day > daysOfMonths[month - 1]) {
      return false;
    }}
    return true;
  }
console.log(validateDate('01/03/2019'));