import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SortingProducts() {
  const classes = useStyles();
  const [sortingOptions, setSortingOptions] = React.useState('');

  const handleChange = (event) => {
    setSortingOptions(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sortingOptions}
          onChange={handleChange}
          label="Sorting"
        >
          <MenuItem value='newest'>Newest</MenuItem>
          <MenuItem value='this week'>This Week</MenuItem>
          <MenuItem value='this month'>This Month</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}
