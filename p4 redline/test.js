const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNQuestions(tries) {
  if (tries <= 0) return;

  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);

  rl.question(`what is ${num1} + ${num2} ? \n`, userInput => {
    let answer = num1 + num2;

    const result =
      userInput.trim() == answer
        ? 'ok'
        : 'no';
    console.log(result);

    askNQuestions(tries - 1);
  });
}

askNQuestions(10);
