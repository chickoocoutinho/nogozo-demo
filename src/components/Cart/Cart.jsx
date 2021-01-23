import { Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CartInstructions from './CartInstructions';
import { useNavigate } from '@reach/router';

const useStyles=makeStyles({
    container:{
        marginTop: '20px',
    },
    totalContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    confirmButton:{
        position: 'fixed',
        bottom: '10px',
        width: '1024px',
        margin: 'auto',
        '@media(max-width:1030px)':{
          width: '90%',
        },
        '@media(max-width:430px)':{
          width: '96%',
        }
    }
});
  

const Cart = ({location}) => {
    const { cost, items }= location.state.totalItemsCost;

    const handleOrderConfirm= ()=>{
        alert("Your Order Is Confirmed");
        navigate('/',{replace: true});
    }

    const navigate= useNavigate();
    const styles=useStyles();
    return (
        <div className={styles.container}>
            <Typography variant='outline' component='p' style={{color: 'rgba(0,0,0,0.6)'}} paragraph>
                ITEMS
            </Typography>
            {   
                items.map((value,id)=>(
                    <Typography variant='body1' component='p' key={id}>
                        {`${value.quantity} X ${value.name}`}
                    </Typography>
                ))
            }
            <Divider />
            <CartInstructions />
            <Divider />

            <div className={styles.container}>
                <div className={styles.totalContainer}>
                <Typography variant='subtitle2' component='p' style={{color: 'rgba(0,0,0,0.6)'}} >
                    Item total
                </Typography>
                <Typography variant='subtitle2' component='p' style={{color: 'rgba(0,0,0,0.6)'}}>
                {`₹ ${cost}`}
                </Typography>
                </div>
                <div className={styles.totalContainer}>
                <Typography variant='subtitle2' component='p' style={{color: 'rgba(0,0,0,0.6)'}}>
                    Delivery Charges
                </Typography>
                <Typography variant='subtitle2' component='p' style={{color: 'rgba(0,0,0,0.6)'}}>
                    Free Delivery
                </Typography>
                </div>
                <div className={styles.totalContainer}>
                <Typography variant='h5' component='p' >
                    Grand Total
                </Typography>
                <Typography variant='h5' component='p' >
                {`₹ ${cost}`}
                </Typography>
                </div>
            </div>
            <Button onClick={handleOrderConfirm}
            variant='contained' color='primary' className={styles.confirmButton}>
                Confirm Order
            </Button>
        </div> 
    );
}

export default Cart;