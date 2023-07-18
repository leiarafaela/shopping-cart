import React from 'react';

import Provider from '../../context/Provider';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

function Home(){
  return(
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default Home;
