import React, { useContext  } from 'react';
import axios from 'axios';
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('TEST-42872054-5ffc-4331-8889-2afab80d6a15');

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import CartIsEmpty from '../CartIsEmpty/CartIsEmpty';

function Cart(){
  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  function btnPayment(){
    axios({
      method: 'POST',
      url: 'http://localhost:5000/mp/pagamento',
      data:{
        value: totalPrice,
      }
    }).then((response) => {
   
      console.log(response.data.response.init_point);
      window.location.href = response.data.response.init_point;
      
    }).catch(
      (error) => {
        if (error.response) {
          console.log(error.response);
          alert('Erro');
        }
      }
    );

    // window.location.href = preferenceId;

    
  }
   
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
        onClick={btnPayment}
      >Ir para paragamento</button>} 
    
    

    
    </section>

  );
}

export default Cart;
