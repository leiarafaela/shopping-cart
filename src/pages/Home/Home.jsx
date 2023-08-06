import React from 'react';

import Provider from '../../context/Provider';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';
import useToken from '../../services/useToken';

function Home(){

  const {removeToken} = useToken();

  return(
    <Provider>
      <Header token={removeToken}/>
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default Home;
