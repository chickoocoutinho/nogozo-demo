import { Typography , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    container:{
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        boxShadow: '0px 2px 2px 0px rgba(0,0,0,.2)',
        width: '100%',
        padding: '20px',
        color: '#3468a6',
        marginBottom: '10px',
        '@media(max-width:600px)':{
            padding: '10px'
        },
    },
    statusDiv:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

const ShopSummary = ({isOpen, name ,address}) => {

    const styles= useStyles();
    return (
        <>
        <div className={styles.container}>
            <Typography variant='h4' component='h4'>
                {name}
            </Typography>
            <Typography variant='body1' component='p'>
                {`Address: ${address}`}
            </Typography>
            <div className={styles.statusDiv}>
                <Typography variant='body1' component='p'>
                    Phone: 1234567891
                </Typography>
                {
                    isOpen?
                    <Typography variant='body1' component='p' style={{color: 'greenyellow'}}>
                        Delivering
                    </Typography> : null
                }
            </div>
            <Typography variant='body2' component='p'>
                Free Delivery on this order!
            </Typography>
        </div>
        <Button  onClick={()=>window.open('https://goo.gl/maps/cy56JYQgWiDyUZk48')}
        variant="contained" color="primary" style={{width:'100%'}}>
            Check Location
        </Button>
        </>
    );
}

export default ShopSummary;