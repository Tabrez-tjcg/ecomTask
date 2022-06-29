import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Store/productSlice'
import { Box, Typography } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import CartForSingleProcuct from '../Components/CartForSingleProcuct'

const SingleProduct = () => {
    const dispatch = useDispatch()
    const ThisProduct = useSelector(state => state.products.productCL)

    console.log("The product",ThisProduct);
    const ratingStar = [1,2,3,4,5];
  return (
    <div>
        <Link to='/home'>Back to results</Link>

        <Box style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        }}> 

            <Box>
                <img src={ThisProduct[0].image} 
                style={{ maxHeight: '75vh'}}
                /> 
            </Box>

            <Box> 
                <Typography component="h2" style={{color: '#1f78ff'}}>{ThisProduct[0].name}</Typography>
                <Box aria-label="ratings" style={{color: '#ffc110'}}>
                {
                    ratingStar.map(star => {
                    if(star <= ThisProduct.numReviews){
                        return  <StarIcon />
                    }
                    else{
                        return <StarOutlineIcon />
                    }
                    })
                }
                </Box>
                <Typography component="h6" style={{fontSize: 15}}>({ThisProduct[0].numReviews} Customer reviews)</Typography>
                <Typography component="h6" style={{fontSize: 16}}><b>Price :</b> <span style={{fontWeight: 600, color: '#d15700'}}>${ThisProduct[0].price}</span></Typography>
                <Typography component="h6" style={{fontSize: 16}}><b>Description : </b>{ThisProduct[0].description}</Typography>
                <Typography component="h6" style={{fontSize: 14}}>{ThisProduct[0].comment}</Typography>
            </Box>

            <Box style={{minWidth: '30%'}}>
                <CartForSingleProcuct />
                

            </Box>
        
        </Box>

        
    </div>
  )
}

export default SingleProduct