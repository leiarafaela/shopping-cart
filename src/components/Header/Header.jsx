import React from 'react';

import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

function Header() {
  return (
    <header className="header">
    
      <div className="container">
        <SearchBar/>
        <div className="card-login">
          <CartButton/>
          <a href="/login">Entre</a>
        </div>
        
      </div>
      
      
    </header>
  );
}

export default Header;
