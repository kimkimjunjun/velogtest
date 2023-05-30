import React from 'react';
import Darkmode from './Darkmode';
import LoginButton from '../components/LoginButton';
import SearchButton from '../components/SearchButton';
import Header from './Header';
import Trending from '../components/Trending';
import Posting from '../components/Posting';

function Mainpage() {
  return (
    <div style={{width:'100%'}}>
      <Header/>
      <Trending>
        <Posting/>
      </Trending>
    </div>
  );
}

export default Mainpage;