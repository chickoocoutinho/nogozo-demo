import {makeStyles} from '@material-ui/core/styles';
import Container from '../Container/Container';
import SearchBox from './SearchBox';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCart from '../../assets/shopping-cart-promotion.png';
import Menu from './Menu';

const useStyles= makeStyles({
    backgroundContainer:{
        backgroundColor: '#3468a6',
        width: '100%',
        position: 'sticky',
        top: '0',
    },
    logoDiv:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
    },
});
  
const Header = () => {

    const styles= useStyles();

    return (
        <div className={styles.backgroundContainer}>
            <Container>
                <div className={styles.logoDiv}>
                    <img src={ShoppingCart} alt="Shopping cart"/>
                    <Menu />
                    {//<PersonIcon style={{color:'#fff'}} />
}
                </div>
                <SearchBox />
            </Container>
        </div>
    );
}

export default Header;