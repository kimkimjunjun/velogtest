import React from 'react';
import Darkmode from './Darkmode';
import LoginButton from '../components/LoginButton';
import SearchButton from '../components/SearchButton';

function Header() {
  return (
    <div style={{width:'100%', height:'4rem '}}>
      <Darkmode>
        <SearchButton/>
      </Darkmode>
    </div>
  );
}

export default Header;