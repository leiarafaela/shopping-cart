import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import useToken from './services/useToken';

function App() {

  const {token, setToken} = useToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home token={token} setToken={setToken} /> } />
        <Route path="/login" element={ <Login setToken={setToken}/> } />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
