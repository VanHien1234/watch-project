import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CategoryProductAction } from 'redux/actions/ProductAction';
import {
    Link, useRouteMatch
} from "react-router-dom";
import { IMG_URL_PRODUCT } from 'API/ApiConfig';

export default function CategoryRender(props) {
    const { urlTitle } = props
    let { url } = useRouteMatch();
    console.log('urlTitle', urlTitle)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CategoryProductAction(urlTitle.type, urlTitle.brand))
    }, [url]);

    const { arrCategory } = useSelector(state => state.ProductReducer)
    console.log('arrCategory', arrCategory)

    const { isLoading } = useSelector(state => state.LoadingReducer);

    console.log('isLoading Category',isLoading)

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND'
    }
    const renderProduct = () => {
        return arrCategory?.map((e, index) => {
            return <div className='col-lg-3 col-6' key={index}>
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
        <>{ !isLoading?
        <div className='container'>
            <h3 className='text-center mt-3 mb-3'>
                {urlTitle.title}
            </h3>
            <div className="row">
                {renderProduct()}
            </div>
        </div>: ''}
        </>
        
    )
}
