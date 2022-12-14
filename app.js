import { argv } from 'node:process';

function programStart(participants) {
  const [MIN, MAX] = [2, 8];

  if(participants < MIN || participants > MAX) {
    console.error('Input error');
    process.exit();
  } else {
    return Number(participants);
  }
}

function printLadder(participants, height) {
  const participant = programStart(participants) - 1;

  let ladder = Array(height).fill().map(() =>
    Array(participant).fill().map(() => Math.floor(Math.random() * 2)));

  ladder.forEach((steps) => {
    let randomStep = '|';

    steps.forEach((step) => {
      if(step === 0) {
        randomStep += ' |';
      }
      else {
        randomStep += '-|';
      }
    });

    console.log(randomStep);
  });
}

const inputParticipants = argv[2];
const inputHeight = 4;
printLadder(inputParticipants, inputHeight);