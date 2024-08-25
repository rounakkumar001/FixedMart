

import React, { useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled, IconButton, InputAdornment } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { DataContext } from '../../context/dataProvider';
// API MODULES BELOW
import { authenticateSignup, authenticateLogin } from '../../service/api';

import { Visibility, VisibilityOff } from '@mui/icons-material';



const Right = styled(Box)`
    display : flex;
    flex-direction  : column;
    padding : 2rem;
    width : 50%;
    overflow : scroll;
    
`

const OR = styled(Typography)`
    text-align : center;
    color : #878787;
    font-size : .8rem;
`
const CreateAccount = styled(Typography)`
    text-align : center;
    font-size : .9rem;
    cursor : pointer;
    color : #2874f0;
`
const LoginButton = styled(Button)`
    background: #fb641b;
    box-shadow : none;
    border: none;
    color: #fff;
    padding: 10px 20px;
    text-transform : unset;
    font-weight : bold;
    border-radius : 2px; 
    &:hover{
        background: #fb641b;
        color: #fff;
        box-shadow : none;
    }
`

const Container = styled(Box)`
    display : flex;
    width : 100%;
    height : 100%;
    
`

const Left = styled(Box)`
    padding : 2rem;
    background : #2874f0;
    color : white;
    display : flex;
    flex-direction : column;
    justify-content : space-between  ;
    width : 35%;
`

const LogInHead = styled(Typography)`
    font-weight : bold;
    font-size : 1.6rem ;
`

const LoginsubHead = styled(Typography)`
    font-size : 1.1rem;
    margin-top : 1rem;
`

const Instruction = styled(Typography)`
    font-size : .7rem;
`
const OTPButton = styled(Button)`
border: none;
line-height: 180%;
text-align: center;
color: #2874f0;
background-color: #fff;
margin-top: 16px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
width: 100%;
height: 48px;
font-size: 15px;
text-transform : unset;

`

const Error = styled(Typography)`
    color : #ff6161;
    font-size : 12px;


`

const LoginUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png';

const accountInitialValue = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValue = {

    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    alt_phone: "",
    gender: "",
    house_no: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postal: ""
}

const loginInitialValue = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setsignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);

    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { setAccount } = useContext(DataContext);

    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setError(false);
        toggleAccount(accountInitialValue.login);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setsignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);

    }


    const signupUser = async () => {
        const response = await authenticateSignup(signup);
        // console.log(response);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);

    }



    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }

    const LoginUser = async () => {
        const response = await authenticateLogin(login);
        console.log(response);

        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else {
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} PaperProps={{ sx: { maxWidth: '45%', height: "75%" } }} >
            <Container>
                <Left>
                    <Box>
                        <LogInHead>{account.heading}</LogInHead>
                        <LoginsubHead>{account.subHeading}</LoginsubHead>
                    </Box>
                    <img src={LoginUrl} alt="" />


                </Left>
                {account.view === "login" ?
                    <Right>
                        <TextField
                            label="Enter Username"
                            variant="standard"
                            onChange={(e) => onValueChange(e)}
                            name="username"
                        />

                        {error && <Error>Please Enter valid username and password</Error>}

                        {/* <TextField
                            label="Enter Password"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onValueChange(e)}
                            name="password"
                        /> */}
                        <TextField
                            label="Enter Password"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onValueChange(e)}
                            name="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Instruction style={{ marginTop: '2rem' }}>By continuing, you agree to Flipkart's <span style={{ color: '#2874f0' }}>Terms of Use </span>  and <span style={{ color: '#2874f0' }}>Privacy Policy</span> .</Instruction>
                        <LoginButton variant="contained" style={{ marginTop: '1rem' }} onClick={LoginUser}>Login</LoginButton>
                        <OR style={{ marginTop: '1rem' }}>OR</OR>
                        <OTPButton variant="text">Request OTP</OTPButton>
                        <CreateAccount style={{ marginTop: '6rem' }} onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                    </Right>
                    :
                    <Right>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#2975f0', marginBottom: '.5rem' }}>Personal Details</Typography>
                        <TextField
                            label="Enter First name"
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name="firstname"
                            required
                        />
                        <TextField
                            label="Enter Last name"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="lastname"
                        />
                        <TextField
                            label="Enter Username"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="username"
                        />
                        <TextField
                            label="Enter Email"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="email"
                        />
                        <TextField
                            label="Enter Password"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="password"
                        />
                        <TextField
                            label="Enter Phone"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="phone"
                        />
                        <TextField
                            label="Enter Alternative Phone"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="alt_phone"
                        />
                        <FormControl component="fieldset" style={{ marginTop: '1rem' }}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="gender"
                                onChange={(e) => onInputChange(e)}
                            >
                                <FormControlLabel value="F" control={<Radio />} label="Female" />
                                <FormControlLabel value="M" control={<Radio />} label="Male" />
                                <FormControlLabel value="" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#2975f0', marginTop: '2rem', marginBottom: -2 }}>Address</Typography>

                        <TextField
                            label="House no."
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="house_no"
                        />
                        <TextField
                            label="Street"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="street"
                        />
                        <TextField
                            label="City"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="city"
                        />
                        <TextField
                            label="State"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="state"
                        />
                        <TextField
                            label="Country"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="country"
                        />
                        <TextField
                            label="Postal Code"
                            variant="standard"
                            style={{ marginTop: '1rem' }}
                            onChange={(e) => onInputChange(e)}
                            name="postal"
                        />

                        {/* <Instruction style={{ marginTop: '2rem' }}>By continuing, you agree to Flipkart's <span style={{ color: '#2874f0' }}>Terms of Use </span>  and <span style={{ color: '#2874f0' }}>Privacy Policy</span> .</Instruction> */}
                        <LoginButton variant="contained" style={{ marginTop: '2rem' }} onClick={() => signupUser()}>Continue</LoginButton>
                        {/* <OR style={{ marginTop: '1rem' }}>OR</OR>
                        <OTPButton variant="text">Request OTP</OTPButton>
                        <CreateAccount style={{ marginTop: '6rem' }}>New to Flipkart? Create an account</CreateAccount> */}
                    </Right>

                }

            </Container>
        </Dialog>
    )
}

export default LoginDialog