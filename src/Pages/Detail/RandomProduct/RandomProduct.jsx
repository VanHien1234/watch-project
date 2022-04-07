import React from 'react'
import { Link } from 'react-router-dom';
import { IMG_URL_PRODUCT } from 'API/ApiConfig';

export default function RandomProduct(props) {
    const { random } = props

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND'
    }
    /* console.log('radom111',random) */
    /* function reloadPage(){ 
        window.location.reload()
        window.scrollTo(0, 0);
    } */
    const renderProduct = () => {
        return random.map((e, index) => {
            return <div className='col-4'    key={index}>
                <Link to={`/product/${e._id}`} >
                    <div className="card ml-5"  >
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
        <>
        <div className="row text-center">
        {renderProduct()}

        </div>
        
        </>
    )
}
