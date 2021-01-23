import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";
import ShopItemsData from "./dummyShopItemsData";
import CartButtonDisplay from '../Cart/CartButtonDisplay';

import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    listContainer:{
        position: 'relative',
        padding: props=> props.showCart? '20px 0 88px 0': '20px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,47.5%)',
        gridRowGap: '20px',
        gridColumnGap: '5%',    
        '@media(max-width:600px)':{
            gridTemplateColumns: '100%',
        }
    }
});

const ShopDetails = () => {
    const [shopItemsQuantity,setShopItemsQuantity]= useState([
        0,0,0,0,0
    ]);
    const [showCart,setShowCart]= useState(false);
    const [totalItemsCost, setTotalItemsCost]= useState(0)

    useEffect(()=>{
        const totalItem= shopItemsQuantity.reduce((a, b) => a + b, 0);
        if(totalItem>0){
            let itemsArray=[];
            let totalCost= 0;
            shopItemsQuantity.forEach((value,index)=>{
                if(value>0){
                    itemsArray.push({
                        name: ShopItemsData[index].name,
                        quantity: value,
                    });
                    totalCost += value*ShopItemsData[index].price;
                };
            });
            setTotalItemsCost({
                cost: totalCost,
                items: itemsArray,
            });    
            setShowCart(true);
        }
        else
            setShowCart(false);
    },[shopItemsQuantity]);

    const styles= useStyles({showCart});
    return (
        <>
        <div className={styles.listContainer}>
            {
                ShopItemsData.map((value,id)=>(
                    <MenuItem name={value.name} quantity={value.quantity} price={value.price}
                        count={shopItemsQuantity[id]} setCount={setShopItemsQuantity}
                        id={id} key={id} />
                ))
            }
        </div>
        {
            showCart?
            <CartButtonDisplay totalItemsCost={totalItemsCost} />:
            null
        }
        </>
    );
}

export default ShopDetails;