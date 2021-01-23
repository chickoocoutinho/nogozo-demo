import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    container:{
        width: '60px',
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        fontSize: '18px'
    },
    counterButton:{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: '0 5px',
        '&:hover':{
            cursor: 'pointer',
        }
    }
});

const Counter = ({count, setCount, id}) => {

    const handleIncrement=()=>{
        if(count===9)
            return null;
        setCount((prevState)=>{
            let countValue= [...prevState];
            countValue[id] += 1;
            return countValue; 
        });
    };

    const handleDecrement=()=>{
        if(count===0)
            return null;
        setCount((prevState)=>{
            let countValue= [...prevState];
            countValue[id] -= 1;
            return countValue; 
        });    
        };

    const styles= useStyles();
    return (
        <Paper className={styles.container} >
            <span onClick={handleDecrement}
            style={{color: 'green'}} className={styles.counterButton}>
                –
            </span>
            <span style={{padding:'0 5px'}}>
                {count}
            </span>
            <span onClick={handleIncrement}
            style={{color: 'greenyellow'}} className={styles.counterButton}>
                +
            </span>
        </Paper>
    );
}

export default Counter;