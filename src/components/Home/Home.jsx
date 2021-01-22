import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import books from '../../assets/books.jpg';
import craft from '../../assets/craft.jpg';
import dairy from '../../assets/dairy.jpg';
import diwali from '../../assets/diwali.jpg';
import fashion from '../../assets/fashion.jpg';
import food from '../../assets/food.jpg';
import fruits from '../../assets/fruits.jpg';
import grocery from '../../assets/grocery.jpg';

import { Link } from "@reach/router"

const images=[diwali,grocery,food,fruits,dairy,craft,books,fashion];

const useStyles= makeStyles({
    container:{
        margin: '30px 0',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,31%)',
        gridRowGap: '30px',
        gridColumnGap: '3.5%',
        '@media(max-width:768px)':{
            margin: '20px 0',
            gridTemplateColumns: 'repeat(2,47.5%)',
            gridRowGap: '20px',
            gridColumnGap: '5%',    
        }
    },
    paperPadding:{
        padding: '10px',
        width: '100%',
        '& img':{
            width: '100%'
        },
        '&:hover':{
            cursor: 'pointer'
        }
    }
});

const Home = () => {

    const styles= useStyles();
    return (
        <div className={styles.container}>
            {
                images.map((value,id)=>(
                    <Link to='/shops' >
                        <Paper elevation={3} key={id} className={styles.paperPadding}>
                            <img src={value} alt='select items' />
                        </Paper>     
                    </Link>       
                ))
            }
        </div>
    );
}

export default Home;