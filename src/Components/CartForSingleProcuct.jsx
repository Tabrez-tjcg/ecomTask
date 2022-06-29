import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel } from '@material-ui/core';

import addToCart from '../Store/productSlice';

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

export default function CartForSingleProcuct() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  const dispatch = useDispatch();

  const ThisProduct = useSelector(state => state.products.productCL);

  const addToCartHandler = (ThisProduct) => {
    dispatch(addToCart(ThisProduct))
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

      <Typography component="h6" style={{fontSize: 16}}><b>Price :</b> <span style={{fontWeight: 600, color: '#d15700'}}>${ThisProduct[0].price}</span></Typography>
      <Typography component="h6" style={{fontSize: 15}}>State : {ThisProduct[0].numReviews}</Typography><Typography component="h6" style={{fontSize: 16}}>({ThisProduct[0].numReviews} Customer reviews)</Typography>

      <FormControl variant="outlined" className={classes.formControl} >
        <label className="form-group flex-column">Qty: 
            <input type="number" className="form-control" style={{maxWidth: '80px'}}/>
        </label>       
      </FormControl>




      </CardContent>
      <CardActions>
        <Button size="large" fullWidth="true" style={{backgroundColor: '#e0a800'}} onClick={() => addToCartHandler(ThisProduct)}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
