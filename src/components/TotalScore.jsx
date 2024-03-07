import React from 'react'
import styled from "styled-components";


const TotalScore = ({score}) => {
  return (
    <Scorecontainer>
      <h1>{score}</h1>
     <p>Total Score</p>
    </Scorecontainer>
  )
}

export default TotalScore;


const Scorecontainer = styled.div`
text-align: center;
justify-content: center;
  max-width: 200px;
  h1{
    font-size: 100px;
    line-height: 100px;
    margin: 0px;
  }
  p{
    font-size: 24px;
    font-weight:500px;
    margin: 0px;
  }
  
`;