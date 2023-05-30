import React from 'react';
import styled from 'styled-components';
import "./Event.css"

function ModeButton({title, click, clas, styl}) {

    return (
        <S.ModeButton className={clas} onClick={click} style={styl}>
            <span>{title}</span>
        </S.ModeButton>
    );
};


export default ModeButton;

const S = {};

S.ModeButton = styled.button`
  padding-top: 3px;
  width:2.5rem;
  height: 2.5rem;
  border: none;
  background-color: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.titleColor}; // 테마 변경 컬러 지정
  border-radius: 50%;
  cursor: pointer;
  span{
    font-size: 1.6rem;
    font-weight: bold;
  }

`;