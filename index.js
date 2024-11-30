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

function generateCalcProblem() {
  const variables = getRandom([['a'], ['a', 'b', 'c'], ['a', 'b', 'c', 'd']]);
  const locals = Object.fromEntries(
    variables.map(
      (v, i) => {
        // The first variable should have a number
        if (i === 0) {
          return [v, Math.random() * 10];
        }
        
        // Decide between 'a=2' and 'a=b*c'
        if (getRandom([true, false]) && i < 1) {
          const [operandOne, operandTwo] = [getRandom(variables[:i]), getRandom(variables[:i]);
        } else {
          const [operandOne, operandTwo] = [Math.random() * 10, Math.random() * 10];
        }

        // Decide between 
      }
    )
  );

function getRandom(options) {
  return options[Math.floor(Math.random() * array.length)];
}
