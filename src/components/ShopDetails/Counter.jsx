import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

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

const Counter = () => {
    const [count, setCount] =useState(0)

    const styles= useStyles();
    return (
        <Paper className={styles.container} >
            <span onClick={()=>setCount(count-1)}
            style={{color: 'green'}} className={styles.counterButton}>
                –
            </span>
            <span style={{padding:'0 5px'}}>
                {count}
            </span>
            <span onClick={()=>setCount(count+1)}
            style={{color: 'greenyellow'}} className={styles.counterButton}>
                +
            </span>
        </Paper>
    );
}

export default Counter;