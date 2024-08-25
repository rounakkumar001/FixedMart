import React from 'react'

import Slider from './Slider';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    display : flex;
    align-items : center
`

// const LeftContainer = styled(Box)`
//     width : 83%;

// `


const LeftContainer = styled(Box)(({ theme }) => ({
        width : '83%',
        [theme.breakpoints.down('md')] : {
            width : '100%'
        }
}))


// const RightContainer = styled(Box)`
//     background : #ffffff;
//     padding : 3px 5px ;
//     margin-top : 10px;
//     margin-left : 10px;
//     width : 17%;
//     text-align : center;

// `
const RightContainer = styled(Box)(({ theme }) => ({
    background: '#ffffff',
    padding: ' 3px 5px',
    marginTop: '10px',
    marginLeft: '10px',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }

}))

const Midslider = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Container>
            <LeftContainer>
                <Slider products={products} title="Deals of the Day" timer={true} />
            </LeftContainer>
            <RightContainer>
                <img src={adURL} alt="promotion" style={{ width: 213 }} />
            </RightContainer>
        </Container>

    )
}

export default Midslider