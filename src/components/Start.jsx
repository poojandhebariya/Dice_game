import styled from "styled-components";
import { Button } from "../styled/Button";

const Start=({toggle})=> {



  return (
    <Container>
        <div className="img"><img src='/images/d1.png'/></div>
        <div className='content'> 
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Start;


 

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
scroll-behavior: none;
gap: 150px;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
        margin: 0px;
    }
    
}
`;