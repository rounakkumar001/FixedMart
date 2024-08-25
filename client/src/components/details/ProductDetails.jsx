import React from 'react'


import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';

import { LocalOffer } from '@mui/icons-material';



const LongTitle = styled(Typography)`

    font-size :1.2rem;
    letter-spacing : .5px;

`
const RatingReviews = styled(Box)`
    display : flex;
    font-weight: 500;
    color: #878787;
    margin-top : 10px;
    
`
const FinalPrice = styled(Box)`
    font-size : 1.8rem;
    font-weight : 500;
`

const DisablePrice = styled(Box)`
    
    font-size : 1.1rem;
    font-weight : 500;
    margin : 0px 10px;
    color : #878787;

`

const AvailableOffers = styled(Box)`

    & > P {
        margin : 6px 0px ;
        font-size : .8rem;
        vertical-align: baseline;
        
    }

`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`


const MainDetailContianer = styled(Box)`

margin-left : 20px;

`  







const ProductDetails = ({ product }) => {
    
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <>
        <MainDetailContianer>
            <LongTitle>{product.title.longTitle}</LongTitle>

            <RatingReviews>
                <Typography style={{ fontSize: '.9rem' }}>22,95 Rating And 329 Reviews</Typography>
                <img src={fassured} alt="FlipkartAssured" style={{ height: 22, marginLeft: 10 }} />
            </RatingReviews>

            <Typography style={{ color: '#388e3c', fontWeight: 'bold', marginTop: 15, fontSize: '1rem' }}>Special price</Typography>

            <Typography>
                <FinalPrice component='span'>₹{product.price.cost}</FinalPrice>
                <DisablePrice component='span'><strike>₹{product.price.mrp}</strike></DisablePrice>
                <Box component='span' style={{ color: '#388e3c', fontWeight: 'bold' }}>{product.price.discount} off</Box>
            </Typography>

            <AvailableOffers  >
                <Typography style={{fontWeight : 'bold', margin : '10px 0px'}}>Available offers</Typography>


                <Typography> <LocalOffer style={{ color: '#388e3c', fontSize: '1.2rem', marginRight : 10 ,}} /> <b>Bank Offer</b> 10% instant discount on Federal Bank Credit and Debit Card,up to ₹2000 on orders of ₹5,000 and above T&#38;C</Typography>


                <Typography> <LocalOffer style={{ color: '#388e3c', fontSize: '1.2rem', marginRight : 10 }} /> <b>Bank Offer</b> 10% instant discount on IDFC FIRST Bank Credit Card, up to ₹2,000 on orders of ₹5,000 and above T&#38;C</Typography>


                <Typography> <LocalOffer style={{ color: '#388e3c', fontSize: '1.2rem', marginRight : 10 }} />  <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card T&#38;C</Typography>


                <Typography> <LocalOffer style={{ color: '#388e3c', fontSize: '1.2rem' , marginRight : 10}} /> <b> Partner Offer</b> Buy this product and get upto ₹500 off on Flipkart Furniture Know More</Typography>


                <Typography> <LocalOffer style={{ color: '#388e3c', fontSize: '1.2rem' , marginRight : 10}} /> <b> Partner Offer</b> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500* Know More</Typography>





            </AvailableOffers>


            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="Supercoin"style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>




            </MainDetailContianer>

            {/* <Typography style={{
                marginTop: 5, color: '#878787', fontSize: 14, display: 'flex', alignItems: 'center'
            }}>8 Rating & 1 Reviews
                <Box component='span'><img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>

            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>
                <Box component='span' style={{ color: '#878787', marginLeft: 10, marginRight: 10 }}> <strike>₹{product.price.mrp}</strike></Box>
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography> */}


        </>
    )
}

export default ProductDetails