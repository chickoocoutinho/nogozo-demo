import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    bottomCart:{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        margin: 'auto',
        padding: '20px 0',
        backgroundColor: '#3468a6',
        textAlign: 'center',
        color: '#fff',
    }
});

const CartButtonDisplay = ({totalItemsCost}) => {

    const styles= useStyles();
    return (
        <div className={styles.bottomCart}>
            <Typography variant='outline' component='p'>
                {`Total: ₹ ${totalItemsCost.cost}`}
            </Typography>
            <Typography variant='button' component='p'>
                Go to Cart &gt;&gt;
            </Typography>
        </div>
    );
}

export default CartButtonDisplay;