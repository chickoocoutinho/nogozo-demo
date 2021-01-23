import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Counter from './Counter';

import craft from '../../assets/craft.jpg';


const useStyles = makeStyles({
  card:{
      display: 'grid',
      gridTemplateColumns: '40% 60%',
      marginBottom: '20px',
      '@media(max-width:768px)':{
        marginBottom: '10px',
    }
  },
  image:{
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
  },
  containerDiv:{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  infoDiv:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  itemDescription:{
      display: 'flex',
      flexDirection: 'column',
  }

});

const MenuItem = ({name,quantity,price,count,setCount, id}) => {
    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <img src={craft} alt="pani puri" className={styles.image}/>
            <div className={styles.containerDiv}>
                <Typography variant="h6" component="h2">
                    {name}
                </Typography>
                <div className={styles.infoDiv}>
                    <div className={styles.itemDescription}>
                        <Typography variant="body2" component="p">
                            {quantity}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {`₹ ${price}`}
                        </Typography>
                    </div>
                    <Counter count={count} setCount={setCount} id={id} />
                </div>
            </div>
        </Card>
    );
}

export default MenuItem;