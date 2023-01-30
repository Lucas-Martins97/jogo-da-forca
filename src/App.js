//CSS
import './App.css';

//React
import React, { useState } from 'react';

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}

]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)
  console.log(words);
  

  //Palavra
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState('');

  // start Game
  function startGame (){
    setGameStage(stages[1].name)
  }

  // process the letter input
  function verifyLetter (){
    setGameStage(stages[2].name)
  }

  //Retry
  function retry(){
    setGameStage(stages[0].name)
  }



  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
