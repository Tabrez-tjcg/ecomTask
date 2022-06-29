import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ratingStar = [1,2,3,4,5];

  const showThisProduct = () =>{
    navigate('/SingleProduct')
  }

  return (
    <Card className={classes.root} style={{margin: 10, minWidth: 250, minHeight: 300}} onClick={showThisProduct}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name} 
      />
      <CardContent>
      <Typography component="h2" style={{color: '#1f78ff'}}>{props.name}</Typography>
      <Typography component="small" 
        style={{
          fontSize: 12
        }}>{props.brand}
      </Typography>
      <Typography component="h6" style={{fontWeight: 600}}>{props.price}</Typography>
      </CardContent>
      <CardActions disableSpacing style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box aria-label="ratings" style={{color: '#ffc110'}}>
          {
            ratingStar.map(star => {
              if(star <= props.numReviews){
                return  <StarIcon />
              }
              else{
                return <StarOutlineIcon />
              }
            })
          }
          {/* <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarOutlineIcon /> */}
        </Box>
      <Typography component="h6" style={{fontSize: 15}}>{props.numReviews}</Typography>
      </CardActions>
    </Card>
  );
}
