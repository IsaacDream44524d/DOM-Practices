const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { quote: "Optimism is an occupational hazard of programming.", author: "Kent Beck" },
  { quote: "Code is like humor. When you have to explain it, its bad.", author: "Cory House" },
  { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { quote: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { quote: "Programming isnt about what you know; its about what you can figure out.", author: "Chris Pine" },
  { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { quote: "Good code is its own best documentation.", author: "Steve McConnell" },
  { quote: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
  { quote: "Any sufficiently advanced bug is indistinguishable from a feature.", author: "Rich Kulawiec" },
  { quote: "Deleted code is debugged code.", author: "Jeff Sickel" },
  { quote: "The most damaging phrase in software development is We have always done it this way.", author: "Grace Hopper" }
];

let qouteText = document.querySelector('.qoute');
let person = document.querySelector('.author');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * quotes.length);

    qouteText.textContent = quotes[randomNum].quote;
    person.textContent = quotes[randomNum].author;
})