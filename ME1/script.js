const items = [
  {
    question: "What is Teemo's alias?",
    choices: [
      "The Swift Scout",
      "The Tiny Master of Evil",
      "The Yordle Gunner",
      "The Little Devil"
    ],
    answer: "The Swift Scout"
  },
  {
    question: "What is Teemo's role?",
    choices: [
      "Assassin",
      "Tank",
      "Marksman",
      "Jungler"
    ],
    answer: "Marksman"
  },
  {
    question: "What is Teemo's passive skill?",
    choices: [
      "Camouflage",
      "Toxic Dart",
      "Guerrilla Warfare",
      "Noxious Trap"
    ],
    answer: "Guerrilla Warfare"
  },
  {
    question: "What is the default hotkey for Teemo's Blinding Dart?",
    choices: [
      "Q",
      "W",
      "E",
      "R"
    ],
    answer: "Q"
  },
  {
    question: "True or False: Teemo's active W ignores unit collision.",
    choices: [
      "True",
      "False",
      "Maybe",
      "Sometimes"
    ],
    answer: "False"
  },
  {
    question: "How many mushrooms can he store at level 2 Noxious Trap?",
    choices: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "4"
  },
  {
    question: "How many mana does Teemo's Toxic Shot cost?",
    choices: [
      "0",
      "25",
      "50",
      "100"
    ],
    answer: "0"
  },
  {
    question: "What is Teemo's Legacy skin?",
    choices: [
      "Omega Squad Teemo",
      "Recon Teemo",
      "Little Devil Teemo",
      "Happy Elf Teemo"
    ],
    answer: "Little Devil Teemo"
  },
  {
    question: "Which of Teemo's skins say <i>\"I've done things I'm not proud of\"</i>?",
    choices: [
      "Omega Squad Teemo",
      "Recon Teemo",
      "Little Devil Teemo",
      "Happy Elf Teemo"
    ],
    answer: "Omega Squad Teemo"
  },
  {
    question: "What do you do when someone bans or chooses Teemo first?",
    choices: [
      "You dodge",
      "You dodge",
      "You dodge",
      "You dodge"
    ],
    answer: "You dodge"
  },
]

const id = id => document.getElementById(id);
const $ = query => document.querySelectorAll(query);

var q, a, f, r, c, l;
var index = 0;
var curr;
var score = 0;

function loadQuestion(ind = index) {
  if ( ind >= items.length ) {
    endGame();
    return;
  }

  curr = items[ind];

  q.innerHTML = curr.question;

  for ( let i = 0; i < 4; ++i ) {
    r[i].value = l[i].innerHTML = curr.choices[i] || "This is not an answer";
  }

  b.setAttribute('data-value', `Question ${index + 1}`);
}

function checkAnswer(ans = false) {
  let res;

  if ( !ans ) ans = $('input[type=radio]:checked')[0].value;

  if ( ans == curr.answer ) {
    score++;
    res = "Correct!";
  } else {
    res = `Wrong! The correct answer is ${curr.answer}`;
  }

  a.textContent = res;
  index++;

  id('flippy').style.transform = "rotateY(180deg)";

  $('button[type=submit]').forEach(item => item.disabled = true);

  setTimeout(() => {
    $('input[type=radio]:checked')[0].checked = false;
    $('button[type=submit]').forEach(item => item.disabled = false);
    id('flippy').style.transform = "rotateY(0)";
    loadQuestion();
    a.textContent = "";
  }, 2000);
}

function reset() {
  c.forEach(item => item.style.display = "flex");
  u.style.display = "hidden";

  score = 0;
  index = 0;
  loadQuestion();
}

function endGame() {
  c.forEach(item => item.style.display = "none");
  b.setAttribute('data-value', "Game End");
  q.textContent = `Congratulations, you got ${score} out of 10 points!`;
  u.style.display = "block";
}

window.addEventListener('DOMContentLoaded', () => {
  q = id('q');
  a = id('a');
  u = id('re');
  b = $('.front')[0];
  f = $('form')[0];
  r = $('input[type=radio]');
  c = $('label');
  l = $('label .card-sm-title');

  f.addEventListener('submit', e => {
    e.preventDefault();
    checkAnswer();
  });

  u.addEventListener('click', reset);

  loadQuestion(0);
});