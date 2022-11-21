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

const inputParticipants = argv[2];
const inputHeight = 4
printLadder(inputParticipants, inputHeight);