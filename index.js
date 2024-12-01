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
  (v) => `${v} = ${getRandomNum(10)}`,
  (v1, v2) => `${v1} = ${v2 ?? getRandomNum(10)}`,
  (v1, v2, v3) => `${v1} = ${v2 ?? getRandomNum(10)} ${getRandomOp()} ${v3 ?? getRandomNum(10)}`,
];

function generateCalcProblem() {
  const variables = getRandom([['a', 'b'], ['a', 'b', 'c'], ['a', 'b', 'c', 'd']]);
  const lines = variables.map(
    (v, i) => getRandom(linePatterns)(v, variables[i - 2], variables[i - 1])
  );
  const varsToPrint = evalPy(lines, variables.slice(-2));
  const operatorToPrint = getRandomOp();
  const correctAnswer = eval(`${varsToPrint[0]}${operatorToPrint}${varsToPrint[1]}`);
  return [
    lines.concat([`print(${variables.slice(-2, -1)} ${operatorToPrint} ${variables.slice(-1)})`]).join('\n'), 
    correctAnswer,
  ];
}

function evalPy(lines, varsToPrint) {
  const globals = {};
  lines.forEach(line => {
    let [v, val] = line.split('=').map(s => s.trim());
    Object.keys(globals).forEach( ident => {
      val.replace(ident, globals[ident]);
    });
    globals[v] = eval(val);
  });
  return varsToPrint.map(v => globals[v]);
}
  
function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}
function getRandom(options) {
  return options[getRandomNum(options.length)];
}

function getRandomOp() {
  return getRandom(['+', '-', '*', '/']);
}
