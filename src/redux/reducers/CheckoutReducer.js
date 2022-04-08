import { ADD_CHECKOUT } from "redux/types/CheckoutType"

const stateDefault = {
    numberCart: 0,
    Carts: [],
    _products: [],
    arrCheckout: [],
}

export const CheckoutReducer = (state = stateDefault, action) => {

    let clonedState = { ...state }
    
    switch (action.type) {
        case ADD_CHECKOUT:
            {
                
                if(clonedState.arrCheckout.length === 0){
                    let cart ={
                        id:action.arrCheckout._id,
                        quantity:1,
                        name:action.arrCheckout.name,
                        logo:action.arrCheckout.logo,
                        price:action.arrCheckout.price,
                    }
                    clonedState.arrCheckout.push(cart);

                }
                else{
                    let check = false;
                    clonedState.arrCheckout.map((e,key)=>{

                        if(e.id==action.arrCheckout._id){
                            console.log('truong hop 2.1',e.id)
                            clonedState.arrCheckout[key].quantity++;
                            check=true;
                        }
                    })
                    if(!check){
                        let cart ={
                            id:action.arrCheckout._id,
                            quantity:1,
                            name:action.arrCheckout.name,
                            logo:action.arrCheckout.logo,
                            price:action.arrCheckout.price,
                        }
                        clonedState.arrCheckout.push(cart);

                    }


                }
                return clonedState

            }



        default:
            return clonedState
    }
}





/*
if (clonedState.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                clonedState.Carts.push(cart);
            }
            else {
                let check = false;
                clonedState.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        clonedState.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    clonedState.Carts.push(_cart);
                }
            }
            return {
                clonedState,
                numberCart: clonedState.numberCart + 1
            }  */




/*                 console.log('checkout',action.arrCheckout)
    let cart ={
        id:action.arrCheckout._id,
        quantity:1,
        name:action.arrCheckout.name,
        logo:action.arrCheckout.logo,
        price:action.arrCheckout.price,

    }
    clonedState.arrCheckout.push(cart);
    console.log('state2',clonedState)
    localStorage.setItem(clonedState, JSON.stringify(clonedState))
    

    

    return clonedState */