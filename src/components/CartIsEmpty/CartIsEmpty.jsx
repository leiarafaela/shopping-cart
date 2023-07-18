import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartIsEmpty.css';

function CartIsEmpty(){
  return(
    <section className="cart-is-empty">
      <div className="empty-cart">
        <AiOutlineShoppingCart/>
      </div>
      <p>Seu carrinho está vazio</p>
    </section>
  );
}

export default CartIsEmpty;
