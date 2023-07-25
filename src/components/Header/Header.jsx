import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import { useNavigate } from 'react-router-dom';


function Header(props) {

  const navigate = useNavigate();

  function logMeOut(){
    axios({
      method: 'POST',
      url: 'http://localhost:5000/logout',
    }).then(
      () =>{
        props.token();
        localStorage.removeItem('email');
        navigate('/login');
      } 
    ).catch(
      (error) => {
        if (error.response) {
          console.log(error.response);
          alert('Erro');
        }
      }
    );
  }

  const logged = localStorage.getItem('email') ;

  return (
    <header className="header">
    
      <div className="container">
        <SearchBar/>
        <div className="card-login">
          <CartButton/>
          {logged? <a href="/login" onClick={logMeOut}>Sair</a>: <a href="/login">Entre</a>}
        </div>
      </div> 
    </header>
  );
}

export default Header;

Header.propTypes = {
  data: propTypes.object
}.isRequired;
