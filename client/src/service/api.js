import axios from 'axios';

    const URL = 'http://localhost:8000';
export const authenticateSignup = async(data) => {
    try{
        return await axios.post(`${URL}/signup`, data);
    }
    catch(e){
        console.log('error while authenticating user',e);
    }
}



export const authenticateLogin = async(Ldata) => {
    try{
        return await axios.post(`${URL}/login`, Ldata);
    }
    catch(e){
        console.log('error while authenticating user Login',e);
        return e.response;
    }
}



export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}

