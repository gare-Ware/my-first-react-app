import React, {useState} from "react"
import useWordGame from "./hooks/useWordGame"
import { FaWind, FaRunning } from 'react-icons/fa'

function App() {
  const [gameTime, setGameTime] = useState(0)
  
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
} = useWordGame(gameTime)
  
  const handleGameTime = e => setGameTime(e.target.value)

  return (
    <div className="container">
      <h1><FaWind className="icon wind"/><FaRunning className="icon"/>speed typing</h1>
      <textarea
          ref={textBoxRef}
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
      />
      {isTimeRunning
        ? <div className="stats">
            <h4>Time remaining: {timeRemaining}</h4>
          </div>
        : <div className="game-time-input">
            <h4>Enter seconds:</h4>
            <input 
              type="number"
              min="1"
              name={gameTime}
              value={gameTime}
              onChange={handleGameTime}
            />
          </div>}
      <button 
          onClick={startGame}
          disabled={isTimeRunning}
      >
          Start
      </button>
      <h4>Word count: {wordCount}</h4>
  </div>
  );
}

export default App;
