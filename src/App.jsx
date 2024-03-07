import { useState } from 'react';
import './App.css'
import Start from './components/Start'
import '@fontsource/poppins';
import GamePlay from './components/GamePlay';



function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <Start   toggle={toggleGameplay}  />}
    </>
  )
}

export default App
