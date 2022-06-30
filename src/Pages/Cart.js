import React, { useState } from 'react'
import CartItem from '../Components/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import ProceedToCheckOut from '../Components/ProceedToCheckOut';

const Cart = () => {
    const CartItems = useSelector(state => state.cart.cart);
    console.log(CartItems);
    // console.log("cart items ID : ", CartItems[0][0]['id']);

  return (
    <div style={{display: 'flex',  justifyContent: 'space-between'}}>
      <div style={{width: '100%', padding: 20}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}> 
            <h4 style={{fontWeight:400}}><b>Shopping Cart</b></h4>
            <h5 style={{fontWeight:400, margin: 0, padding: 0}}><b>Price</b></h5>
        </div>
        <hr />


        {CartItems.map(item => {
            return <CartItem 
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.image}
            price={item.price}
            total={item.AdditionalData.total}
            quantity={item.AdditionalData.quantity}
            /> 
        })}

      </div>
        

        <ProceedToCheckOut />
        

    </div>
  )
}

export default Cart