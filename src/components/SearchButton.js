import React from 'react'
import styled from 'styled-components';

function SearchButton() {
  return (
    <S.button1>
        <svg width="17" height="17" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clip-rule="evenodd" fill="currentColor"></path></svg>
    </S.button1>
  )
}

export default SearchButton;


const S = {};

S.button1 = styled.button`
  margin-right: 10px;
  width:2.5rem;
  height: 2.5rem;
  border: none;
  background-color: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.titleColor}; // 테마 변경 컬러 지정
  &:hover {
    background-color: ${props => props.theme.colors.bgColor === 'white' ? 'rgba(0,0,0,0.1);' : 'rgba(255,255,255,0.1);'};
  }
  border-radius: 50%;
  cursor: pointer;
  span{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;