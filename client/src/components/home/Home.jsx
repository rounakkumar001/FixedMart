import React, { useEffect } from 'react'

import { Box, styled } from '@mui/material';
// components 
import NavBar from './Navbar';
import Banner from './Banner';
import Slider from './Slider';
import Midslider from './Midslider';
import MidAddSection from './MidAddSection';

import {getProducts} from '../../redux/actions/productActions';
import { useDispatch , useSelector} from 'react-redux';


const Container = styled(Box)`
  padding : 12px 8px ;
  background : #f2f2f2;
  margin-top : 10px ;
  border-top : 1px solid rgb(223, 223, 223);;
  

`

const Home = () => {

  const {products} = useSelector(state => state.getProducts);

  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <Midslider products={products} title="Deals of the Day" timer={true}/>
        <MidAddSection/>
        <Slider products={products} title="Best of Electronics" timer={false}/>
      </Container>
    </>
  )
}

export default Home