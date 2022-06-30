import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { removeFromCart }  from '../Store/cartSlice'

import { updateCart } from '../Store/cartSlice'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const CartItem = (props) => {


  console.log("We Got the ID to perform deletion", props.id)
    // const [name, image, price, quantity] = props;
    
    const classes = useStyles();
    // const MyCart = useSelector(state => state.cart.cart);

    const [qty, setQty] = useState(props.quantity);
    console.log('Qty: ', props.quantity)
    const [total, setTotal] = useState(props.total);

  
    const onChangeQtyHandler = (e) => {
      if(e.target.value < 1) {
        e.target.value = 1;
      }
      setQty(e.target.value);
      setTotal(props.price * qty);
      console.log("The Qty: ", qty)
      console.log("Total: ", total)
      dispatch(updateCart(qty))
    }

    const dispatch = useDispatch();

    const HandleDeleteProdcut = (itemID) => {
      // alert("This item is gonna be delete!!", itemID)
        dispatch(removeFromCart(itemID));
    }


  return (

    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e5e5', paddingTop: 20, paddingBottom : 30 }}>
    <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Box style={{marginRight: 30}}>
        <img src={props.image} 
        style={{ maxWidth: '100px'}}
        /> 
    </Box>
    <div>
        <Typography component="h6" style={{color: '#1f78ff'}}>{props.title}</Typography>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
        <FormControl variant="outlined" className={classes.formControl} >
            <label className="form-group flex-column" style={{ marginBottom: 0}}>Qty: 
                <input type="number" value={qty} className="form-control" style={{maxWidth: '80px'}} onChange={(e) => onChangeQtyHandler(e)}/>
            </label>       
        </FormControl>

        <Button variant="outlined" style={{marginLeft: 10}} onClick={() => HandleDeleteProdcut(props.id)}>Delete</Button>
        </div>

      </div>
      </Box>
      <Typography component="h6" style={{fontSize: 16}}><span style={{fontWeight: 600}}>${total}</span></Typography>



    </div>
  )
}

export default CartItem