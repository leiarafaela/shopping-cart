import React, { useContext, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { initMercadoPago } from '@mercadopago/sdk-react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import CartIsEmpty from '../CartIsEmpty/CartIsEmpty';
import LoadingButton from '../LoadingButton/LoadingButton';
initMercadoPago('TEST-42872054-5ffc-4331-8889-2afab80d6a15');


function Cart(){
  const [loading, setLoading] = useState();
  const { cartItems, isCartVisible} = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
  const logged = localStorage.getItem('email');
  const navigate = useNavigate();

  function btnPayment(){
    setLoading(true);
    logged?
      axios({
        method: 'POST',
        url: 'http://localhost:5000/mp/pagamento',
        data:{
          value: totalPrice,
        },
      }).then((response) => {
        console.log(response.data.response.init_point);
        window.location.href = response.data.response.init_point;
        setLoading(false);
      
      }).catch(
        (error) => {
          if (error.response) {
            console.log(error.response);
            setLoading(false);
            alert('Ocorreu um erro!');
          }
        }
      ): navigate('/login');  
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
      >{loading ? <LoadingButton/> : 'Ir para paragamento'}</button>} 
    
    

    
    </section>

  );
}

export default Cart;
