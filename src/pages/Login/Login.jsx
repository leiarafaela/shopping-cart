import React, { useState } from 'react';

import propTypes from 'prop-types';

import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login(props){

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  
  const navigate = useNavigate();

  function handleChange(event){
    const {value, name} = event.target;
    setLoginForm(prevNote => ({
      ...prevNote, [name]: value
    })
    );}

  function btnLogin(event) {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/login/token',
      data:{
        email: loginForm.email,
        password: loginForm.password,
      }
    }).then(
      (response) =>{
        console.log(response);
        props.setToken(response.data.access_token);
        alert('Successfully login');
        localStorage.setItem('email', loginForm.email);
        navigate('/home');

      } 
    ).catch(
      (error) => {
        if (error.response) {
          console.log(error.response);
          alert('Erro');
        }
      }
    );
    event.preventDefault();
  }

  return(
    <div>
      <header className="header-login">
        <h1>Shopping Cart</h1>
        
      </header>
      <div className="login-body">
        <section className="login">
          <form>
            <div>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={loginForm.email} onChange={handleChange} placeholder="Email"/>
            </div>
            
            <div>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={loginForm.password} onChange={handleChange} placeholder="Senha"/>
            </div>

            <button type="submit" onClick={btnLogin}>Entrar</button>
            <a href="/signup">Não é cadastrado? Cadastre-se</a>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;

Login.propTypes = {
  data: propTypes.object
}.isRequired;
