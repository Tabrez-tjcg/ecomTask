import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';

const ProceedToCheckOut = () => {

  const MyCart = useSelector(state => state.cart.AdditionalData);

  const HandleProceedToCheckOut = () => {
    alert('checkOut to Proceed Clicked')
  }

  const GrandTotal = () => {
    MyCart.map(item => {
      // return item.total += item.total
    })
  }

  const TotalItems = () => {
    MyCart.map(item => {
      // return item.AdditionalData.quantity += item.quantity      
    })
  }

  return (
    <div style={{minWidth: '30%', height: '50vh', backgroundColor: '#d5d5d5', padding: 30}}>

    <Typography component="h6" style={{fontSize: 20, fontWeight: 600, marginBottom: 10}}>Sub Total {TotalItems} : ${GrandTotal}</Typography> 

    <Button variant="outlined" fullWidth='true' style={{backgroundColor: '#e0a800'}} onClick={() => HandleProceedToCheckOut()}>Proceed To Checkout</Button>


    </div>
  )
}

export default ProceedToCheckOut