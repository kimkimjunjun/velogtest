import React from 'react'
import './Event.css'
import styled, {css} from 'styled-components';
import '../home/Darkmode'

function LoginButton(clas) {
  return (
    <S.oginButton>로그인</S.oginButton>
  )
}

export default LoginButton

const S = {};

S.oginButton = styled.button`
  background-color: ${props => props.theme.colors.titleColor};
  color: ${props => props.theme.colors.bgColor}; // 테마 변경 컬러 지정
  &:hover {
    background-color: ${props => props.theme.colors.titleColor === 'black' ? 'rgba(0,0,0,0.7);' : 'rgba(255,255,255,0.7);'};
  }
  border: none;
  border-radius: 1rem;
  height: 2rem;
  width: 5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer; 
`;