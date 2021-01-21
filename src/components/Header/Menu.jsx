import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';

import AllInboxIcon from '@material-ui/icons/AllInbox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Drawer } from '@material-ui/core';
import { useState } from 'react';
import ShoppingCart from '../../assets/shopping-cart-promotion.png';
import Divider from '@material-ui/core/Divider';

const useStyles= makeStyles({
    width100:{
        width: 'calc(100% - 10px)',
    },
    primaryColor:{
        color: '#3468a6'
    },
    white:{
        color:'#fff',
    },
    container:{
        display: 'flex',
        alignItems: 'center',
    },
    link:{
        margin: '5px 0 10px 5px',
        padding: '5px',
        display: 'grid',
        gridTemplateColumns: '25px auto',
        gridColumnGap: '5px',
        backgroundColor: 'transparent',
        transition: '0.2s',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'rgba(255,255,255,0.2)'
        },  
    },
    primaryColorContainer:{
        display: 'flex',
        alignItems: 'end',
        flexDirection: 'column',
        backgroundColor: '#3468a6',
        width:'60vw',
        padding: '10px 0',
        '@media(max-width:430px)':{
            width:'70vw'
        } 
    }
});

const Menu = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);

    const matches = useMediaQuery('(min-width:620px)');
    const styles= useStyles();
    return (
        <>
        {
            !matches?
            <>
            <PersonIcon className={styles.white} onClick={()=>setIsDrawerOpen(true)} />
            <Drawer anchor={'right'} open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
                <div className={styles.primaryColorContainer}>
                    <img src={ShoppingCart} alt="Shopping cart" style={{paddingLeft:'10px'}}/>
                    <div className={clsx(styles.link,styles.width100,styles.white)}>
                        <AccountBoxIcon className={styles.white} />
                        Benito Coutinho
                    </div>
                    <div className={clsx(styles.link,styles.width100,styles.white)}>
                        <ContactMailIcon className={styles.white} />
                        dummyemail@gmail.com
                    </div>
                    <div className={clsx(styles.link,styles.width100,styles.white)}>
                        <PhoneIcon className={styles.white} />
                        1234567899
                    </div>
                </div>
                <div className={clsx(styles.link,styles.width100,styles.primaryColor)}>
                    <AllInboxIcon className={styles.primaryColor} />
                    Orders
                </div>
                <div className={clsx(styles.link,styles.width100,styles.primaryColor)}>
                    <AccountBoxIcon className={styles.primaryColor}/>
                    Profile
                </div>
                <div className={clsx(styles.link,styles.width100,styles.primaryColor)}>
                    <ContactSupportIcon className={styles.primaryColor} />
                    Contact us
                </div>
                <Divider />
                <div className={clsx(styles.link,styles.width100,styles.primaryColor)}>
                    <ExitToAppIcon color='secondary' />
                    Sign out
                </div>
            </Drawer>
            </>:
            <div className={styles.container}>
                <div className={clsx(styles.link,styles.white)}>
                    <AllInboxIcon className={styles.white} />
                    Orders
                </div>
                <div className={clsx(styles.link,styles.white)}>
                    <AccountBoxIcon className={styles.white}/>
                    Profile
                </div>
                <div className={clsx(styles.link,styles.white)}>
                    <ContactSupportIcon className={styles.white} />
                    Contact us
                </div>
                <div className={clsx(styles.link,styles.white)}>
                    <ExitToAppIcon color='secondary' />
                    Sign out
                </div>
            </div>
        }
        </>
    );
}

export default Menu;