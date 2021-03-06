import React from 'react';
import styled from 'styled-components';

const GameNameContainer = styled.div`
  height: 21.54px;
  padding: 10px;
`;

const GameNameStyled = styled.div`
  margin: 0;
  color: #494f5c;
  text-align: left;
  white-space: normal;
  text-transform: uppercase;
  font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
`;


const GameName = (props) => {
  let name = props.name;

  return (
    <GameNameContainer className='OPG-carousel-card-container-card-game-name'>
      <GameNameStyled className='OPG-carousel-card-container-card-game-name-inline'>{props.name}</GameNameStyled>
    </GameNameContainer>
  );
  
};

export default GameName;