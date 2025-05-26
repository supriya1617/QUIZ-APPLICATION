const questions = {
    basic: [
        {
           question: "What is the capital city of Australia?",
           options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
           answer: 2
        },
        {
         question : "What is 25% of 200?",
         options : ["25","50","75","100"],
         answer:  0
       },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Earth", "Mars", "Jupiter"],
            answer: 2
         },
         {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: 2
         },
         {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Great White Shark", "Hippopotamus"],
            answer: 1
         },
         {
            question : "which number comes next:2,4,6,8, ?",
            options : ["10","9","12","11"],
            answer : 1
        },
        {
            question : "if 12 pens cost 144, what is the cost of 1 pen? ",
            options : ["10","12","11","13"],
            answer: 1
        },
        {
            question : "what is the average of 10,20,30?",
            options : ["15","20","25","30"],
            answer : 1
        },
        {
            question : "find the odd out: apple,banana,carrot,mango",
            options : ["apple","banana","carrot","mango"],
            answer : 2
        },
        {
            question : "which is the largest state in india by area?",
            options : ["maharastra","uttar pradesh","rajasthan","madhyapradesh"],
            answer : 2
        },
        {
            question : "who is the head of state government?",
            options : ["president","chief minister","governor","prime minister"],
            answer : 1
        },
        {
            question : "which river is called the ganga of the south?",
            options : ["krishna","cauvery","godavari","yamuna"],
            answer : 2
        },
        {
            question : "what does CPU stand for?",
            options : ["central processing unit","computer power point","central program utility","central performance unit"],
            answer : 0
        },
        {
            question : "choose the correct spelling:",
            options : ["accomodate","acommodate","accommodate","acomodate",],
            answer : 2
        }
     
    ],
    medium: [
      {
         question: "What is the capital city of canada?",
         options: ["Toronto", "vancouver", "ottawa", "montreal"],
         answer: 2
      },
      {
         question : "if X + Y =12 and X - Y = 4, find x?",
         answer : ["4","8","6","12"],
         correct : 1
     },
     {
         question : "what comes next: 3, 6, 12, 24, ?",
         answer : ["36","48","50","60"],
         correct : 1
     },
     {
         question : "a shopkeeper gives 10% discount on 500. final price?",
         answer : ["450","460","470","480"],
         correct : 0
     },
     {
         question : "find the missing term: ACE, BDF, ?, DHL",
         answer : ["CEG","CFG","CGL","CEM"],
         correct : 0
     },
     {
         question : "what is the square root of 121?",
         answer : ["9","10","11","12"],
         correct : 2
     },
     {
         question : "who is the current chief election commissoner(2024)?",
         answer : ["shshil chandra","rajiv kumar","sunil arora","om prakash rawat"],
         correct : 1
     },
     {
         question : "how many members are nominated to rajya sabha?",
         answer : ["10","12","14","15"],
         correct : 1
     },
     {
         question : "the Tropic of cancer passes through how many indian states?",
         answer : ["5","6","7","8"],
         correct : 3
     },
     {
         question : "which shortcut is used to paste copied content?",
         answer : ["ctrl+C","ctrl+V","ctrl+X","ctrl+P"],
         correct : 1
     },
     {
         question : "choose the correct synonym for 'Brief'?",
         answer : ["long","short","full","wide"],
         correct : 1
     }
       
   ],
     advanced: [
      {
         question: "As of 2024, what are the only two countries that allow prescription drug ads on TV?",
         options: ["USA & UK", "USA & New Zealand", "Canada & Australia", "Germany & France"],
         answer: 1
      },
      {
         question: "Which river flows into Victoria Falls?",
         options: ["Nile","Zambezi","Congo", "Limpopo"],
         answer: 1
      },
      {
         question : "if X + Y =12 and X - Y = 4, find x?",
         options : ["4","8","6","12"],
         answer : 1
     },
     {
         question : "what comes next: 3, 6, 12, 24, ?",
         options : ["36","48","50","60"],
         answer : 1
     },
     {
         question : "a shopkeeper gives 10% discount on 500. final price?",
         options : ["450","460","470","480"],
         answer : 0
     },
     {
         question : "find the missing term: ACE, BDF, ?, DHL",
         options : ["CEG","CFG","CGL","CEM"],
         answer : 0
     },
     {
         question : "what is the square root of 121?",
         options : ["9","10","11","12"],
         answer : 2
     },
     {
         question : "who is the current chief election commissoner(2024)?",
         options : ["shshil chandra","rajiv kumar","sunil arora","om prakash rawat"],
         answer : 1
     },
     {
         question : "how many members are nominated to rajya sabha?",
         options: ["10","12","14","15"],
         answer : 1
     },
     {
         question : "the Tropic of cancer passes through how many indian states?",
         options : ["5","6","7","8"],
         answer : 3
     },
     {
         question : "which shortcut is used to paste copied content?",
         options : ["ctrl+C","ctrl+V","ctrl+X","ctrl+P"],
         answer : 1
     },
     {
      question: "What is third tallest mountain in the world?",
      options: ["Kangchenjunga", "Lhostse", "MaKalu" ,"Dhaulangiri"],
      answer: 0
   },
   {
      question: "Which country was named after the large amount of found in its rivers?",
      options: ["Cameroon", "Nigeria", "Ghana", "Angola"],
      answer: 0
   },
   {
      question: "How many time zones does Canada have?",
      options: ["5", "6", "7", "4"],
      answer: 1
   }
     
    ]
};

const jokes = [
   "why dont scientists trust atoms? because they make up everything!",
   "i told my computer u needed a break, and it said 'no problem, i'll go to sleep.'",
   "why did the developer go broke? because he used up all his cache.",
   "why do java developers wear glasses? because they don't see sharp.",
   "why did the funtion return early? because it had a date with destiny."
];

let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let timerInterval;
let time = 30;

const scorecard = { basic: [], medium: [], advanced: []};

const levelSelection = document.getElementById('level-selection');
const quizContainer = document.getElementById('quiz-container');
const questionE1 = document.getElementById('question');
const optionsE1 = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultContainer= document.getElementById('result-container');
const scoreE1 = document.getElementById('score');
const jokeContainer = document.getElementById('joke-container');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]] = [array[j], array[i]];
    }
}

function startQuiz(level) {
   currentLevel = level;
   currentQuestionIndex = 0;
   score = 0;
   shuffledQuestions = [...questions[level]];
   shuffle(shuffledQuestions);

   levelSelection.classList.add('hidden');
   quizContainer.classList.remove('hidden');
   resultContainer.classList.add('hidden');
   showQuestion();
   startTimer();

}

function showQuestion() {
   const currentQuestion = shuffledQuestions[currentQuestionIndex];
   questionE1.textContent = currentQuestion.question;

   const shuffledOptions = [...currentQuestion.options];
   shuffle(shuffledOptions);

   optionsE1.innerHTML = '';

   shuffledOptions.forEach((option) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'option';
      input.value = currentQuestion.options.indexOf(option);
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      li.appendChild(label);
      optionsE1.appendChild(li);
   });

   jokeContainer.textContent = '';
}

function nextQuestion() {
   const  selectedOption = document.querySelector('input[name="option"]:checked');
   if (!selectedOption  && time > 0) {
      alert('please select an answer before proceeding');
      return;

   }

   const answer = parseInt(selectedOption?.value);
   if (answer === shuffledQuestions[currentQuestionIndex].answer) {
          score++;
   }

   currentQuestionIndex++;
   if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion();
      displayJoke();
      startTimer();
   }
   else {
      endQuiz();
   }
}

function endQuiz() {
   clearInterval(timerInterval);
      quizContainer.classList.add('hidden');
      resultContainer.classList.remove('hidden');
      scoreE1.textContent = `${score} out of ${questions[currentLevel].length}`;
      scorecard[currentLevel].push(score);
}

function restartQuiz() {
   levelSelection.classList.remove('hidden');
   quizContainer.classList.add('hidden');
   resultContainer.classList.add('hidden');
   clearInterval(timerInterval);
}

function displayJoke() {
   const randomIndex = Math.floor(Math.random() * jokes.length);
   jokeContainer.textContent = jokes[randomIndex];
}


function startTimer() {
   clearInterval(timerInterval);
   time = 30;
   const timerDisplay = document.getElementById('time');
   if (timerDisplay) timerDisplay.textContent = time;

   timerInterval = setInterval(() => {
      time--;
      if (timerDisplay) timerDisplay.textContent = time;
      if (time <= 0) {
         clearInterval(timerInterval);
         nextQuestion();
      }
   }, 1000);
}

function showScoreCard()
{
   let summary = `${currentLevel.toUpperCase()} Scores: ${scorecard[currentLevel].join(', ') || 'None'}`;
   alert(summary);
}