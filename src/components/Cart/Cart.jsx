import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import CartIsEmpty from '../CartIsEmpty/CartIsEmpty';

function Cart(){
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
 
   
  return(
    <section className={`cart ${isCartVisible? 'cart--active' :''} `}>
      <div className="cart-items">
        {cartItems.length > 0 ? cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) : <CartIsEmpty/>}
      </div>

      <div className="cart-resumo">Total: {formatCurrency(totalPrice, 'BRL')}</div>
      {cartItems.length > 0 && 
      <button 
        type="button" 
        className="button__payment"
      >Ir para paragamento</button>}  
      
    </section>

  );
}

export default Cart;
