const codeArea = document.getElementById('code');
const answerArea = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');

// Global state 
let answer;

// Initialize
generateCode();
answerArea.focus();

submitButton.addEventListener(() => {
  submitButton.classList = ['button'];
  proceedButton.classList = ['button', 'active'];
  answerArea.disabled = true;
  
  const userAnswer = answerArea.value;
  const result = checkAnswer(userAnswer, answer);
  answerArea.classList = [ result ? 'correct' : 'wrong', ];
});
proceedButton.addEventListener(() => {
  submitButton.classList = ['button', 'active'];
  proceedButton.classList = ['button'];
  answerArea.disabled = false;
  answerArea.focus();
  answerArea.value = '';
  answerArea.classList = [];
  generateCode();
});

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer == correctAnswer;
}

function generateCode() {
  const [code, correctAns] = generateCalcProblem();
  codeArea.innerHTML = code;
  answer = correctAns;
}

// Problems
const linePatterns = [
  (v) => `${v} = ${Math.random() * 10}`,
  (v1, v2) => `${v1} = ${v2 ?? Math.random() * 10}`,
  (v1, v2, v3) => `${v1} = ${v2 ?? Math.random() * 10} ${getRandomOp()} ${v3 ?? Math.random() * 10}`,
];

function generateCalcProblem() {
  const variables = getRandom([['a'], ['a', 'b', 'c'], ['a', 'b', 'c', 'd']]);
  const numLines = Math.random() * 4;
  const lines = 


function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}
function getRandom(options) {
  return options[getRandomNum(options.length)];
}

function getRandomOp() {
  return getRandom(['+', '-', '*', '/']);
}
