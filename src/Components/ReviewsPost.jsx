import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box, Button, Typography } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import WriteReview from './WriteReview';
import { BlockTwoTone } from '@material-ui/icons';

const ReviewsPost = () => {

    const [ToggleReview, setToggleReview] = useState(true);


    const ToggleReviewBox = () => {
        setToggleReview(!ToggleReview)
        alert("Toggle ", ToggleReview)
    }

    const ratingStar = [1,2,3,4,5]

    const AllProducts = useSelector(state => state.products.AllProducts)

    const ShowProduct = useSelector(state => state.products.ShowProduct)
  return (
    <div>        
        <h1>Reviews</h1>
        <p>There is no reviews</p>

        <div>
            {AllProducts.map( review => {
                return(
                <div>
                    {/* {alert(review[0].name)} */}
                    <Box aria-label="ratings" style={{color: '#ffc110'}}>
                        {
                            ratingStar.map(star => {
                            if(star <= review[0].rating){
                                return  <StarIcon />
                            }
                            else{
                                return <StarOutlineIcon />
                            }
                            })
                        }
                    </Box>
                    <p>{review[0].name}</p>
                    <p>{review[0].comment}</p>
                    <p>{review[0].createdAt}</p>
                </div>
                )
            })}

        <Button size="large" style={{backgroundColor: '#e0a800'}} onClick={() => ToggleReviewBox()}>Write Review</Button>

        <WriteReview
        // product_id={ShowProduct.id}
         style={{
            display: 'none',
            ...ToggleReview && {display: 'block'}
        }}/>

            {/* {console.log("Reviews", Reviews.reviews.comment)} */}
        </div>


    </div>
  )
}

export default ReviewsPost