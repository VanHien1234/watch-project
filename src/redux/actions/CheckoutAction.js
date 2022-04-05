import { ADD_CHECKOUT, REMOVE_CHECKOUT } from "redux/types/CheckoutType";

export const AddCheckoutAction = (obj)=>{
    return (dispatch) =>{
        try{ 
            
            dispatch({
                type : ADD_CHECKOUT,
                arrCheckout : obj
            })

        }
        catch{

        }
    }
}