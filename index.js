const codeArea = document.getElementById('code');
const answerArea = document.getElementById('answer');
const correct = document.getElementById('correct');
const submitButton = document.getElementById('submit');
const proceedButton = document.getElementById('proceed');

// Problems
const linePatterns = [
  (v) => `${v} = ${getRandomNum(9) + 1}`,
  (v1, v2) => `${v1} = ${v2 ?? getRandomNum(9) + 1}`,
  (v1, v2, v3) => `${v1} = ${v2 ?? getRandomNum(9) + 1} ${getRandomOp()} ${v3 ?? getRandomNum(9) + 1}`,
];

// Initialize
generateCode();
answerArea.focus();

submitButton.addEventListener('click', () => {
  submitButton.classList.remove('active');
  proceedButton.classList.add('active');
  answerArea.disabled = true;
  correct.textContent = `答えは：${codeArea.dataset.answer}`;
  
  const userAnswer = answerArea.value;
  const result = checkAnswer(userAnswer, codeArea.dataset.answer);
  answerArea.classList.add( result ? 'correct' : 'wrong' );
});
proceedButton.addEventListener('click', () => {
  submitButton.classList.add('active');
  proceedButton.classList.remove('active');
  answerArea.disabled = false;
  answerArea.focus();
  answerArea.value = '';
  answerArea.classList.remove('correct');
  answerArea.classList.remove('wrong');
  correct.textContent = '';
  generateCode();
});

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer == correctAnswer;
}

function generateCode() {
  const [code, correctAns] = generateCalcProblem();
  codeArea.innerHTML = code;
  codeArea.dataset.answer = correctAns;
}

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
  lines.forEach(line => {
    let [v, val] = line.split('=').map(s => s.trim());
    window[v] = eval(val);
  });
  return varsToPrint.map(v => window[v]);
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
