import React, { useState } from 'react'
import { styled } from 'styled-components';

const Roledice=({currentDice,roleDice})=> {


  return (
    <Dicecontainer>
      <div onClick={roleDice} className='Dice'>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click On Dice To Roll</p>
    </Dicecontainer>
  )
}

export default Roledice;


const Dicecontainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;
}
.Dice{
    cursor: pointer;
}
`;