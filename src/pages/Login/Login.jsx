import React from 'react';

import './Login.css';
import Header from '../../components/Header/Header';
import Provider from '../../context/Provider';

function Login(){
  return(
    <div>
      <Provider>
        <Header />
      </Provider>
      <div className="login-body">
        <section className="login">
          <label>Email</label>
          <input type="email"/>

          <label>Senha</label>
          <input type="password"/>

          <button type="submit">Entrar</button>
        </section>
      </div>
    </div>
  );
}

export default Login;
