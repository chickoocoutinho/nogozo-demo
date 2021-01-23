import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import AssignmentIcon from '@material-ui/icons/Assignment';
import { useState } from 'react';

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
  

const Cart = () => {
    const [paymentOption, setPaymentOption] = useState(1);

    const handleChange = (event) => {
        setPaymentOption(event.target.value);
    };

    return (
        <>
        <FormControl style={{width: '100%', margin: '10px 0'}}>
            <Select
            value={paymentOption}
            onChange={handleChange}
            input={<BootstrapInput />}
            >
            <MenuItem value={1}>Pay On Delivery</MenuItem>
            <MenuItem value={2}>Pay Online</MenuItem>
            </Select>
        </FormControl>
        <TextField style={{width: '100%', marginBottom: '20px'}}
            placeholder='Instructions for shop'
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <AssignmentIcon style={{color: '#3468a6'}} />
                </InputAdornment>
            ),
            }}
        />
        </>
    );
}

export default Cart;