import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button, TextareaAutosize } from '@material-ui/core';
import Api from '../Api/Api';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function WriteReview() {
  const classes = useStyles();
  const [ratings, setRatings] = React.useState('');
  const [comment, setCommet] = React.useState('');
  
  const handleChange = (event) => {
    setRatings(event.target.value);
    console.log("Rating handle", ratings)
  };

  const onChangeCommentHadler = (e) =>{
    setCommet(e.target.value);
    console.log("Comment handle", comment)
  }


//   const HandleReviewSubmit = (e) => {
//       e.preventDefault();

        
    // const { prodctsState } = useSelector(state => state.products);
    const fetchProducts = async () => {
        Api.post(`/products/?id=62b1a2caa0591d12560ef288`, {
            ratings: ratings,
            comment: comment
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    useEffect(() => {
        fetchProducts();
    }, [])    

    // }

  return (
    <div style={{sidplay: 'flex', flexDirection: 'column', width:'14%', marginBottom: 20}}>

    <form onSubmit={fetchProducts()}> 

      <FormControl className={classes.margin} style={{width:'100%'}}>
        <InputLabel htmlFor="demo-customized-select-native">Ratings</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={ratings}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </NativeSelect>
      </FormControl>
      

      <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" onChange={onChangeCommentHadler}/>

      <Button type="submit" size="large" style={{backgroundColor: '#e0a800'}} >Submit</Button>
      </form>
      
    </div>
  );
}
