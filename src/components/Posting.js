import React from 'react'
import styled, {keyframes} from 'styled-components';
import './posting.css'

function Posting() {
  return (
    <M.listt>
        <B.listt>
            <T.listt>
                <I.listt>
                    <AK.listt>
                        <DI.listt>
                            <img style={{position:'absoulte', width:'100%', height:'100%'}} src='https://velog.velcdn.com/images/eunbinn/post/1db97b15-37a6-4cda-8bae-f735c41166c7/image.webp' alt=''/>
                        </DI.listt>
                    </AK.listt>
                    <M.munza>
                        <AK.listt>
                            <AK.h>[번역] ES2023에서 도입된 자바스크립트의 새로운 배열 복사 메서드</AK.h>
                            <div class="description-wrapper"><AK.p>최근 확정된 ES2023에서는 기존 배열이 아닌 복사본을 변경하여 연산을 수행하는 `toSorted`, `toReversed`, `toSpliced` 와 같은...</AK.p></div>
                        </AK.listt>
                        <div class="sub-info"><span>2023년 5월 23일</span><span class="separator">·</span><span>1개의 댓글</span></div>
                    </M.munza>
                </I.listt>
            </T.listt>
        </B.listt>
    </M.listt>
  )
}

export default Posting


const M = {};
const B = {};
const T = {};
const I = {};
const AK = {};
const DI = {};

const moveUp = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
`

const moveDown = keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

M.munza = styled.div`
    padding: 1rem;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
`

AK.h = styled.h4`
font-size: 1rem;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--text1);
`

AK.p = styled.p`
margin: 0px 0px 1.5rem;
word-break: break-word;
overflow-wrap: break-word;
font-size: 0.875rem;
line-height: 1.5;
height: 3.9375rem;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
color: #495057;
`

M.listt = styled.div`
    display: flex;
    margin-top: 2rem;
`

B.listt = styled.main`
    flex: 1 1 0%;
`

T.listt = styled.div`
    display: flex;
    margin: -1rem;
    flex-wrap: wrap;
    @media screen and (max-width: 767px) {
        margin: 0px;
    }
`

I.listt = styled.div`
    width: 20rem;
    background: #FFFFFF;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    margin: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media screen and (max-width: 767px) {
        margin: 0px;
        width: 100%;
    }
    @media screen and (max-width: 1056px) {
        width: calc(50% - 2rem);
    }
    &:hover {
        animation: ${moveUp} 0.3s forwards;
    }
    &:not(:hover) {
        animation: ${moveDown} 0.3s forwards;
    }
`

AK.listt = styled.a`
    display: block;
    color: inherit;
    text-decoration: none;
`

DI.listt = styled.div`
    width: 100%;
    position: relative;
`