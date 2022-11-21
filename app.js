import { argv } from 'node:process';

function programStart(participants) {
  const [min, max] = [2, 8];

  if(participants >= min && participants <= max) {
    return Number(participants);
  } else {
    console.error('Input error');
    process.exit();
  };
}

function printLadder(participants, height) {
  const participant = programStart(participants) - 1;

  const ladder = Array(height).fill().map(() =>
  Array(participant).fill().map(() => Math.floor(Math.random() * 2)));

  ladder.forEach((steps) => {
    let randomStep = [];

    steps.forEach((step) => {
      if(step === 0) {
        randomStep.push(' ');
      }
      else {
        randomStep.push('-');
      }
    })

    const result = '|' + randomStep.join('|') + '|';
    console.log(result);
  });
}

const inputParticipants = argv[2];
const inputHeight = 4
printLadder(inputParticipants, inputHeight);