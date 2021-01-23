import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { useNavigate } from "@reach/router"

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles= makeStyles({
    primaryColor:{
        color: '#3468a6',
    },
    cardContainer:{
        padding: '10px',
        marginBottom: '20px',
        '&:hover':{
            cursor: 'pointer',
        }
    },
    addressDiv:{
        display: 'grid',
        gridTemplateColumns: '25px auto',
        gridColumnGap: '5px',
        alignItems: 'center'
    },
    restaurantStatus:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5px'
    }
});

const ShopItem = ({name, address, isOpen, homeBusiness}) => {

    const navigate = useNavigate()
    const styles= useStyles();
    return (
        <Card className={styles.cardContainer} 
        onClick={()=>navigate(`/shopDetails`,{ state: { isOpen , name } })}>
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            <div className={styles.addressDiv}>
                <LocationOnIcon className={styles.primaryColor} />
                {address}
            </div>     
            <div className={styles.restaurantStatus}>
                <Typography variant="outline" component="p" style={{color:'green'}}>
                    {isOpen?'OPEN':'CLOSE'}
                </Typography>
                {
                    homeBusiness?
                    <span className={styles.primaryColor}>Home delivery</span>:null
                }
            </div>
        </Card>
    );
}

export default ShopItem;