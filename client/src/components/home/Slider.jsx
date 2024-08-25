
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';

import { Box, Typography, Divider, Button, styled } from '@mui/material';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Container = styled(Box)`
    margin-top : 10px;
    background : #ffffff;
`
const Deal = styled(Box)`
    padding : 15px 20px;
    display : flex;

`

const CountdownContainer = styled(Box)`
    display : flex;
    align-items : center;
    margin-left : 15px;
`

const DealTitle = styled(Typography)`
    font-size : 22px;
    font-weight : 600; 
`

const ViewAllButton = styled(Button)`
    margin-left : auto;
    border-radius : 2px;
    background : #2874f0;
    font-size : 13px;
    font-weight : 500;
    &:hover{
        
        background : #2874f0;
    }

`
const ProductImg = styled('img')({
    width: 'auto',
    height: 150
})


const Discount = styled(Typography)`
    color : #388e3c;
`
const Tagline = styled(Typography)`
    color : #212121;
    opacity : 0.6
`



const renderer = ({ hours, minutes, seconds }) => {

    return <span style={{ color: '#7f7f7f', fontWeight: '400' }}>{hours} : {minutes} : {seconds} Left</span>;
};


const Slider = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Container>
            <Deal>
                <DealTitle>{title}</DealTitle>
                {
                    timer &&
                    <CountdownContainer>
                        <img src={timerURL} alt="countdown-clock" style={{ width: 20, marginRight: 5 }} />
                        <Countdown date={Date.now() + 6.48e+7} renderer={renderer} />
                    </CountdownContainer>
                }

                <ViewAllButton variant="contained">VIEW ALL</ViewAllButton>
            </Deal>
            <Divider />
            < Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                infinite={true}
                autoPlaySpeed={4000}

                autoPlay={true}
                containerClass="carousel-container"


                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={true}
                keyBoardControl={true}

            >

                {
                    products?.map(data => (
                        <Link to={`/product/${data.id}`} style={{textDecoration : 'none'}} key={data.id}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <ProductImg src={data.url} alt="products" />
                                <Typography style={{ fontSize: 14, fontWeight: 600 }}>{data.title.shortTitle}</Typography>
                                <Discount style={{ fontSize: 14 }}>{data.discount}</Discount>
                                <Tagline style={{ fontSize: 14 }}>{data.tagline}</Tagline>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Container>
    )
}

export default Slider;