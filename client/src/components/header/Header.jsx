import React , {useState} from 'react'

import { AppBar, Toolbar, Box, Typography, Drawer,List, styled } from '@mui/material'
import {Menu} from '@mui/icons-material';

import { Link } from 'react-router-dom';

// Our imported external components written below 
import Search from './Search';
import CustomButton from './CustomButton';

import FixedMartLogo from '../../img/fixedMartLog.png';


const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
    box-shadow : none;
  
    
    
    
`
const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
    &:hover{

        text-decoration : underline;
    }
   
    

`
const PlusIcon = styled(Box)`
    color : yellow;

`

const PlusLogo = styled('img')({
    width: 10

})

const Component = styled(Box)`
    margin-left : 12%;
    line-height : 0px;
    cursor : pointer;

`
const MenuIconcontainer = styled(Box)(({ theme }) => ({
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))


const CustomButtonWrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')] : {
        display : 'none'
    }
}))


const Header = () => {

    const [openDrawer,setOpenDrawer] = useState(false);

    const openHandler = ()=> {
        setOpenDrawer(true);
    }

    const closeDrawer = () => {
        setOpenDrawer(false);
    }


   

    const list = () => (
        <Box  onClick={closeDrawer}>
            <List>
                <listItem button>
                    <CustomButton />
                </listItem>
            </List>
        </Box>
    );

 



    const FlipkartIcon = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const SubPlusIcon = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

    return (
        <StyledHeader>

            <Toolbar style={{ minHeight: 55 }}>
                <MenuIconcontainer onClick={openHandler}>
                    <Menu />
                </MenuIconcontainer>

                <Box>
                <Drawer
                    // anchor={anchor}
                    open={openDrawer}
                    onClose={closeDrawer}   
                >
                   {list()}
                </Drawer>
                </Box>

                <Component >
                    <Link to={'/'} style={{ textDecoration: 'none' }} >
                        <img src={FixedMartLogo} alt="Flipkart" style={{ width: 120 }} />
                        {/* <Box>
                            <SubHeading> <span style={{ color: '#fff' }}>Explore</span>
                                <PlusIcon component='span'> Plus </PlusIcon>
                                <PlusLogo src={SubPlusIcon} alt="PlusLogo" />
                            </SubHeading>
                        </Box> */}
                    </Link>
                </Component>

                <Search />
                <CustomButtonWrapper>
                <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header