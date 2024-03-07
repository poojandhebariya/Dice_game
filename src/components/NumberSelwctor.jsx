import React, { useState } from 'react'
import styled from "styled-components";

const NumberSelwctor = ({selected,setSelected,error,setError}) => {

    const arr=[1,2,3,4,5,6];
    const numberselectorHandler=(value)=>{
        setSelected(value)
        setError("")
    }    

  return (
    <Numberselectorcontainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {arr.map((value,i)=><Box  isSelected={value===selected} key={i} onClick={()=>numberselectorHandler(value)}>{value}</Box>)}
        </div>
        <p>Select Number</p>
    </Numberselectorcontainer>
  )
}

export default NumberSelwctor;

const Numberselectorcontainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex{
    display: flex;
    gap: 24px;

  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props)=>props.isSelected?"black":"white"};
color: ${(props)=>props.isSelected?"white":"black"};
`;