import axios from "axios";

// import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constants/productsConstants";
// OR 
import * as actionTypes from '../constants/productConstant';

const URL = 'http://localhost:8000';

export const getProducts =  () => async(dispatch) => {
    try{
        // const response = await axios.get(`${URL}/products`)
        const {data} = await axios.get(`/products`)
        // console.log(response);
        dispatch({type : actionTypes.GET_PRODUCTS_SUCCESS, payload : data })
    }
    catch(error){
        // console.log("error while calling getProducts api ", error.message);
        dispatch({type : actionTypes.GET_PRODUCTS_FAIL, payload : error.message });
    }
}



export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type : actionTypes.GET_PRODUCT_DETAILS_REQUEST});


        const {data} = await axios.get(`/product/${id}`);

        dispatch ({type : actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload : data});

    }
    catch(error){
        dispatch ({type : actionTypes.GET_PRODUCT_DETAILS_FAIL, payload : error.message});
    }

}