import React , {useState} from 'react'

import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material'
// import { getProductDetails } from '../../redux/actions/productActions';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToCart} from '../../redux/actions/cartActions';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';



const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
      padding: '20px 40px'
  }
}))



const Image = styled('img')({
  width: '90%',
  
  padding : '15px'
})

// const StyledButton = styled(Button)`
//   width : 48%;
//   height : 50px;
//   border-radius : 2px;
// `

const StyledButton = styled(Button)(({theme}) => ({
  width : '48%',
  height : 50, 



}))



const ActionItem = ({ product }) => {
  // const IMAGESRC = 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;


  const [quantity, setQuantity] = useState(1);


  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  }

  return (
    <LeftContainer>
      <Box style={{padding : '10px 20px',marginBottom : 10,borderRadius : 2, border: '1px solid rgb(194, 191, 191)',  width: '88%'}}>
        <Image src={product.detailUrl} alt="product-image" />
      </Box>
      <StyledButton style={{ background: '#ff9f00' }} variant="contained" onClick={()=> addItemToCart()}><Cart />Add to Cart</StyledButton>
      <StyledButton onClick={() => buyNow()} style={{ marginLeft: 10, background: '#fb541b' }} variant="contained"><Flash />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem