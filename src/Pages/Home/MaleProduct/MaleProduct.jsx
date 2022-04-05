import React from 'react';
import { IMG_URL_PRODUCT } from 'API/ApiConfig';
import '../Card_Product.scss'
import { Link } from 'react-router-dom';

const MaleProduct = (props) => {
    const {arrProduct} = props
    console.log('arrProduct',arrProduct)
    function currencyFormat(num) {
        return  num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND'
    }

    const renderProduct = () => {
        return arrProduct.map((e, index) => {
            return <div className='col-3' key={index}>
                <Link to={`/product/${e._id}`}>
                <div className="card" >
                    <img className="card-img-top" src={`${IMG_URL_PRODUCT}/${e.logo}`} alt="Card image" style={{ width: '100%' }} />
                    <i className="fas fa-shopping-cart card__cart "></i>
                    <div className="card-body mt-2 text-center">
                        <h4 className="card-title">{`${e.name}`.length > 15 ? <span>{e.name.slice(0, 15)} ...</span> : <span>{e.name}</span>}</h4>
                        <p className="card-text">{currencyFormat(e.price)} </p>
                    </div>
                </div>
                
                </Link>
                

            </div>
        })
    }

    return (
        <div className='container mt-5'>
             <div className="head-title">
                <span>ĐỒNG HỒ NAM</span>
            </div>
            <div className="row">
                {renderProduct()}
            </div>
            
            <div className="Home__button text-center mt-5 pb-3">
                <Link to={'/'}>
                    <button className='btn--page btn--all'>View All</button>

                </Link>
                
            </div>

        </div>
    );
}

export default MaleProduct;
