import React from 'react'
import { Box, Typography, styled } from '@mui/material'

import navData from '../../constants/Data';


// const Container = styled(Box)`
//     display : flex;
//     margin : 70px 130px 0px 130px;
//     justify-content : space-between;
//     text-align : center;
//     // background : green;
//     height : 90px; 
//     align-items : center;

// `

/* width */
// ::-webkit-scrollbar {
//     width: 10px;
//   }
  
//   /* Track */
//   ::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }
  
//   /* Handle */
//   ::-webkit-scrollbar-thumb {
//     background: #888;
//   }
  
//   /* Handle on hover */
//   ::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }

const Container = styled(Box)(({ theme }) => ({

    display: 'flex',
    margin: '70px 130px 0px 130px',
    justifyContent: 'space-between',
    textAlign: 'center',
    // background : green;
    overflow: 'overlay',
    // overflow : 'hidden',
    height: '90px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        // margin : '70px 130px 0px 0px',   
        margin: 0,
        justifyContent: 'center',
        // paddingBottom: 30,
        overflow: 'hidden'
    }

}))






const Text = styled(Typography)`
line-height : 18px;
font-weight : 500;
font-family : inherit;
font-size : 14px;

`

const ItemContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginLeft: 5,
        marginRight: 5
    }
}))

const NavBar = () => {
    return (
        <>
            <Container>
                {
                    navData.map(Data => (
                        <ItemContainer key={Data.url}>
                            <img src={Data.url} alt="NavData" style={{ width: 64 }} />
                            <Text>{Data.text}</Text>
                        </ItemContainer>
                    ))
                }

            </Container>
        </>
    )
}

export default NavBar