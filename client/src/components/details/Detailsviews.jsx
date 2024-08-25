import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'



import ActionItem from './ActionItem'
import ProductDetails from './ProductDetails';


import { Box, Typography, Grid, styled } from '@mui/material';


const Component = styled(Box)`
    background : #F2F2F2
`


const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))



const RightContainer = styled(Grid)`
    margin-top : 50px;
    
    `


const Detailsviews = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);
   


    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, product, loading])


    console.log(product);

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12} >
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                       
                        
                        <ProductDetails product={product}/>

                    </RightContainer>
                </Container>

            }

            {/* <h1>Hello</h1> */}
        </Component>
    )
}

export default Detailsviews