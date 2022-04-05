import React from 'react'
import { useSelector } from 'react-redux'
import "./Checkout.scss"
import { IMG_URL_PRODUCT } from 'API/ApiConfig';
import { InputNumber } from 'antd';

export default function Checkout(  props ) {

    const { arrCheckout } = useSelector(state => state.CheckoutReducer)
    
    var totalPrice = []
    var totalQuantity = []

  

    function onChange(value) {
        console.log('changedvalue', value);

    }

    const RenderCart = () => {
        return arrCheckout?.map((e, index) => {
            {totalPrice.push(e.price*e.quantity)}
            {totalQuantity.push(e.quantity)}
            
            return <tr key={index}>
                <td><img  src={`${IMG_URL_PRODUCT}/${e.logo}`} alt=""  /></td>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td><InputNumber size="small" min={0} max={100000} defaultValue={e.quantity} onChange={()=>{onChange(e)}} /></td>
                <td >{e.price*e.quantity}</td>


            </tr>
        })
    }

    return (
        
        <div className="Checkout">
            
            <div className='Checkout__Table'>
                <table style={{ width: '100%' }}>
                    <tbody><tr>

                        <th>Qty</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Totaly</th>
                        <th>Actions</th>
                    </tr>
                        {RenderCart()}
                    </tbody></table>

                    <h3>Total : {totalPrice.reduce((a, b) => a + b, 0)}</h3>
                    <h3>TotalQuan : {totalQuantity.reduce((a, b) => a + b, 0)}</h3>

            </div>

        </div>

    )
}
