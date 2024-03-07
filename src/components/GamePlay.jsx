import NumberSelwctor from "./NumberSelwctor";
import Roledice from "./Roledice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay =()=>
{
    const [selected,setSelected]=useState();
    const [currentDice,setCurrentDice]= useState(1);
    const [score,setScore] = useState(0);
    const [error,setError] = useState('.');
    const [showRules, setShowRules] = useState(false);


    const generaterandomnumber = (min,max) => {
        return (Math.floor(Math.random()*(max-min)+min));
        
        
    };

    const roleDice =()=>{

        if(!selected) 
        return setError("You Have Not Selected Any Number");

        const randomNumber = generaterandomnumber(1,7);

        setCurrentDice((_prev)=>randomNumber);

        

        if(selected===randomNumber)
        {
            setScore((prev)=>prev+10);
        }
        else{
            setScore((prev)=>prev-1);
        }

        setSelected(undefined);
    };

    const resetScore = () => {
        setScore(0);
      };

    return(
        <Maincontainer>
            <div className="Top-section">
            <TotalScore score={score}/>
            <NumberSelwctor selected={selected} setSelected={setSelected} error={error} setError={setError}/>
            </div>
            <Roledice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <Button onClick={resetScore}>Reset</Button>
                <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
        </Maincontainer>
    )
}

export default GamePlay;

const Maincontainer = styled.main`

border: 1px solid transparent;
.Top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;