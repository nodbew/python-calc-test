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
