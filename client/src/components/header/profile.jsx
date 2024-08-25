import React, { useState } from 'react'
import { Typography, Box, styled, Menu, MenuItem } from '@mui/material'
import { Verified, PowerSettingsNew } from '@mui/icons-material';


const Name = styled(Typography)`
    
    cursor : pointer;
    font-weight : bold;
`

const Wrapper = styled(Box)`

    display : flex;
    align-items : center;
    justify-content : center;
    margin-left : 2rem;

`
const LogoutDialog = styled(Menu)`
    margin-top : .5rem;
`


const Profile = ({ account, setAccount }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(false);
  };

  const Logout = () => {
    setAccount("");
  }

  return (
    <>
      <Wrapper>
        <Name onClick={handleClick} >{account}</Name><Verified style={{fontSize : 15, marginLeft : 2}} />
      </Wrapper>
      <LogoutDialog

        anchorEl={anchorEl}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleClose(); Logout(); }}>
          <PowerSettingsNew color={'primary'} fontSize={'small'} />
          <Typography style={{ marginLeft: '8px' }}> Logout</Typography>
        </MenuItem>
      </LogoutDialog>



    </>


  )
}

export default Profile