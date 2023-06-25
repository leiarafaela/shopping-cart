import React from 'react';

import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar/>

      </div>
     
    </header>
  );
}

export default Header;
