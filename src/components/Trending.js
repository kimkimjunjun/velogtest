import React from 'react';
import styled from 'styled-components';
import Posting from './Posting';

function Trending() {
    return (
        <A.title>
            <B.title>
                <S.title>
                    <M.title>
                        <AA.title aria-current="page" class="active" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>트렌딩</AA.title>
                        <AA.title href="/recent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>최신</AA.title>
                        <Line.title/>
                    </M.title>
                    <WEEK.title>
                        이번주
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                    </WEEK.title>
                </S.title>
                
            </B.title>
            <div style={{display:'flex', margin: '-1rem', flexWrap:'wrap'}}>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            <Posting/>
            </div>
        </A.title>
    )
}

export default Trending;

const A = {};
const B = {};
const S = {};
const M = {};
const Line = {};
const AA = {};
const WEEK = {};

A.title = styled.div`
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1919px) {
        width: 1376px;
    }
    @media screen and (max-width: 1440px) {
        width: 1024px;
    }
    @media screen and (max-width: 1056px) {
        width: calc(100% - 2rem);
    }
`

B.title = styled.div`
    margin-top: 1.5rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`

S.title = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`

M.title = styled.div`
    @media screen and (max-width: 944px) {
        width: 10rem;
    }
    display: flex;
    position: relative;
    width: 14rem;
`

Line.title = styled.div`
width: 50%;
height: 2px;
position: absolute;
bottom: 0px;
background: #343A40;
`

AA.title = styled.a`
    width: 7rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 1.125rem;
    text-decoration: none;
    color: #868E96;
    height: 3rem;
    @media screen and (max-width: 944px) {
        font-size: 1rem;
        width: 5rem;
    }
    &:active {
        color: #212529;
        font-weight: bold;
    }
`

WEEK.title = styled.div`
    @media screen and (max-width: 1024px) {
        width: 5.25rem;
        font-size: 0.75rem;
    }
    background: #FFFFFF;
    height: 2rem;
    width: 6rem;
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 600;
    
    font-size: 0.875rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 4px;
    cursor: pointer;
`