// import { ActionTypes } from '@mui/base';
import * as actonType from '../constants/productConstant';


export const getProductsReducer  = (state = {products : [] }, action) =>  {
    switch(action.type){
        case actonType.GET_PRODUCTS_SUCCESS : 
            return {products : action.payload};
        case actonType.GET_PRODUCTS_FAIL :
            return {error : action.payload};
        default : 
            return state ;

    }
}



export const getProductDetailsReducer = (state = { product :{}}, action) => {
    switch(action.type){
       case  actonType.GET_PRODUCT_DETAILS_REQUEST :
           return {loading : true}
                
       case  actonType.GET_PRODUCT_DETAILS_SUCCESS :
           return {loading : false, product : action.payload}

       case  actonType.GET_PRODUCT_DETAILS_FAIL :
           return {loading : false, error : action.payload}

       case  actonType.GET_PRODUCT_DETAILS_RESET :
           return {product : {}}

        default : 
            return state

    }
}