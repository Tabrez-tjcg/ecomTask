import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Store/productSlice'
import { Box, Typography } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import CartForSingleProcuct from '../Components/CartForSingleProcuct'
import ReviewsPost from '../Components/ReviewsPost'

const SingleProduct = () => {
    const dispatch = useDispatch()
    const ThisProduct = useSelector(state => state.products.productCL)

    console.log("The product will render in single product page",ThisProduct);
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
                <img src={ThisProduct.image} 
                style={{ maxHeight: '75vh'}}
                /> 
            </Box>

            <Box> 
                <Typography component="h2" style={{color: '#1f78ff'}}>{ThisProduct.name}</Typography>
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
                <Typography component="h6" style={{fontSize: 15}}>({ThisProduct.numReviews} Customer reviews)</Typography>
                <Typography component="h6" style={{fontSize: 16}}><b>Price :</b> <span style={{fontWeight: 600, color: '#d15700'}}>${ThisProduct.price}</span></Typography>
                <Typography component="h6" style={{fontSize: 16}}><b>Description : </b>{ThisProduct.description}</Typography>
                <Typography component="h6" style={{fontSize: 14}}>{ThisProduct.comment}</Typography>
            </Box>

            <Box style={{minWidth: '30%'}}>
                <CartForSingleProcuct />
                

            </Box>
        
        </Box>

        <ReviewsPost />

        
    </div>
  )
}

export default SingleProduct