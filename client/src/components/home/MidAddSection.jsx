import React from 'react'
import { imageURL } from '../../constants/Data'
import { Grid, styled } from '@mui/material'

const Container = styled(Grid)`

    display : flex;
    margin-top : 13px;
    
`


const MidAddSection = () => {
    // const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Container container lg={12} md={12} xs={12}  >
                {
                    imageURL?.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12} >

                            <img src={image} alt="promotion" style={{ width: '100%' }} />

                        </Grid>
                    ))
                }
            </Container>
            {/* <img src={url} alt="covid19_add" style={{width : '100%'}} /> */}
        </>
    )
}

export default MidAddSection