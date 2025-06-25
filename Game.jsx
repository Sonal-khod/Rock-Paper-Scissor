import React, { useState } from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const Game = () => {
    const [playerVal, setPlayerVal] = useState(null);
    const [computerVal, setComputerVal] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const logic = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 0; // draw
    } else if (
      (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (playerChoice === "PAPER" && computerChoice === "ROCK")
    ) {
      return 1; // player wins
    } else {
      return -1; // computer wins
    }
  };
    const decision = (playerChoice) => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = logic(playerChoice, compChoice);

    setPlayerVal(playerChoice);
    setComputerVal(compChoice);

    if (result === 1) {
      setPlayerScore(playerScore + 1);
    } else if (result === -1) {
      setCompScore(compScore + 1);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col gap-6 pt-10'>
      <h1 className='text-4xl font-bold text-cyan-500 uppercase my-2'>Welcome to Rock, Paper, Scissors Game</h1>
      
    <div className='flex'>
       <button onClick={() => decision("ROCK")} className='bg-purple-500 flex items-center font-semibold px-4 py-2 text-2xl rounded-xl mx-4 gap-2  '><FaHandRock />ROCK</button>
       <button onClick={() => decision("PAPER")} className='bg-purple-500 flex items-center gap-2 font-semibold px-4 py-2 text-2xl rounded-xl mx-4'><FaHandPaper/> PAPER</button>
       <button onClick={() => decision("SCISSORS")} className='bg-purple-500 flex items-center gap-2 font-semibold px-4 py-2 text-2xl rounded-xl mx-4'> <FaHandScissors/>SCISSORS</button>     
    </div>
         <h3 className='text-xl font-semibold text-white ' >Your Choice:  {playerVal}</h3>
        <h3 className='text-xl font-semibold text-white '>Computer Choice: {computerVal}</h3>  
        <h2 className='text-3xl font-semibold text-white '>Your Score: {playerScore} </h2>
        <h2 className='text-3xl font-semibold text-white '>Computer score:  {compScore} </h2>
         
         <button className='bg-green-500 flex items-center font-semibold px-4 py-2 text-2xl rounded-xl mx-4 gap-2  '>Reset</button>

    </div>
  )
}

export default Game;
