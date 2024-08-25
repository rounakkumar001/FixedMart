

import { Button, Box, Typography, Badge,styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { useState, useContext } from 'react';

import { DataContext } from '../../context/dataProvider';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Profile from './profile';

// const Wrapper = styled(Box)`
//     display : flex;
//     align-items: center;
//     height : 50px,

// `

const Wrapper = styled(Box)(({theme}) => ({
    display : 'flex',
    alignItems : 'center',
    height : 50,

    '& > p': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 15,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },

    [theme.breakpoints.down('md')] : {
        flexDirection : 'column',
        padding :' 20px 10px',
        height : '150px',
        justifyContent : 'space-between',
        marginRight     : 50

    }

}))

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration : 'none',
    color : 'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));



const LoginButton = styled(Button)(({theme}) => ({

    color: '#2874f0',
    fontWeight: '500',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '2px',
    height:' 32px',
    padding: '5px 40px',
    border: '1px solid #dbdbdb',
    textTransform : 'none',

    boxShadow : 'none' ,
    marginLeft : '3rem',
    
    '&:hover' : {
        backgroundColor : '#FFFFFF'
    },

    [theme.breakpoints.down('md')] : {
        backgroundColor : '#2874f0',
     
        color : '#fff',


       
    }


}))





const CustomButton = () => {
    const [open, setOpen] = useState(false);
    
    const { account, setAccount } = useContext(DataContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;


    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                    <LoginButton variant='contained' onClick={() => openDialog()} >
                        Login
                    </LoginButton>
            }

            <Typography style={{ fontWeight: 'bold', marginLeft: '3rem', cursor: 'pointer' }}>Become a Seller</Typography>
            <Typography style={{ fontWeight: 'bold',  cursor: 'pointer' }}>More</Typography>


            <Container to='/cart' style={{ cursor: 'pointer' }}>
            <Badge badgeContent={cartItems?.length} color="warning">
                <ShoppingCart />
                </Badge>
                <Typography style={{ fontWeight: 'bold' }}> Cart</Typography>
            </Container>

            <LoginDialog open={open} setOpen={setOpen} />

        </Wrapper>

    )
}

export default CustomButton;