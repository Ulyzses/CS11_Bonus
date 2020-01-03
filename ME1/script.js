const items = [
  {
    question: "What is Teemo's alias?",
    choices: [
      "The Swift Scout",
      "uwu",
      "uwu",
      "uwu"
    ],
    answer: "The Swift Scout"
  },
  {
    question: "What is Teemo's role?",
    choices: [
      "",
      "",
      "Marksman",
      ""
    ],
    answer: "Marksman"
  },
  {
    question: "What is Teemo's passive skill?",
    choices: [
      "",
      "",
      "Guerrilla Warfare",
      ""
    ],
    answer: "Guerrilla Warfare"
  },
  {
    question: "What is the default hotkey for Teemo's Blinding Dart?",
    choices: [
      "",
      "",
      "Q",
      ""
    ],
    answer: "Q"
  },
  {
    question: "True or False: Teemo's active W ignores unit collision.",
    choices: [
      "",
      "",
      "False",
      ""
    ],
    answer: "False"
  },
  {
    question: "How many mushrooms can he store at level 2 Noxious Trap?",
    choices: [
      "",
      "4",
      "",
      ""
    ],
    answer: "4"
  },
  {
    question: "How many mana does Teemo's Toxic Shot cost?",
    choices: [
      "0",
      "",
      "",
      ""
    ],
    answer: "0"
  },
  {
    question: "What is Teemo's Legacy skin?",
    choices: [
      "",
      "",
      "Little Devil Teemo",
      ""
    ],
    answer: "Little Devil Teemo"
  },
  {
    question: "Which of Teemo's skins say <i>\"I've done things I'm not proud of\"</i>?",
    choices: [
      "",
      "Omega Squad Teemo",
      "",
      ""
    ],
    answer: "Omega Squad Teemo"
  },
  {
    question: "What do you do when someone bans or chooses Teemo first?",
    choices: [
      "You dodge",
      "",
      "",
      ""
    ],
    answer: "You dodge"
  },
]

const id = id => document.getElementById(id);
const $ = query => document.querySelectorAll(query);

var q, r, c, l;
var index = 0;
var curr;

function loadQuestion(ind = index) {
  curr = items[ind];

  q.innerHTML = curr.question;

  for ( let i = 0; i < 4; ++i ) {
    r[i].value = l[i].innerHTML = curr.choices[i] || "This is not an answer";
  }
}

function checkAnswer(ans) {
  console.log(ans);
}

window.addEventListener('DOMContentLoaded', () => {
  q = id('q');
  r = $('input[type=radio]');
  c = $('label');
  l = $('label .card-sm-title');

  l.forEach(item => {
    item.addEventListener('dblclick', e => {
      checkAnswer(e.target.innerHTML);
    });
  });
});