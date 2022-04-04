import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetProductDetailAction } from 'redux/actions/ProductAction';
import DetailTab from './TabComponent/DetailTab';
import { IMG_URL_PRODUCT } from 'API/ApiConfig';
import { IMG_URL_BRAND } from 'API/ApiConfig';

export default function Detail(props) {
    const dispatch = useDispatch();

    function currencyFormat (num) {
      return  num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND'
  }



    useEffect(() => {
        let { id } = props.match.params
        console.log('first id',id)
        dispatch(GetProductDetailAction(id))
        window.scrollTo(0, 0)
    }, []);
    const {arrProductDetail} = useSelector(state =>state.ProductReducer)
    console.log('arrProductDetail',arrProductDetail)
    const e = arrProductDetail;
  return (

    <div className='Detail container'>
      <div className='Detail__Breadcrumb'>
        Trang Chu / Dong Ho Nam
      </div>
      <div className="row">
        <div className="col-4 Detail__Img">
          <img src={`${IMG_URL_PRODUCT}/${e.logo}`} alt="" />

        </div>
        <div className="col-4 Detail__Description">
          <div className='Product__Title'>
            <b>{e.title}</b>
          </div>
          <hr />
          <div className='Product__Price'>
              <p>Giá : {currencyFormat(e.price)}</p>
          </div>
          <div className='Product__Amount'>
              <p>Số lượng : {e.amount}</p>
          </div>
          <div className='Product__Guarantee'>
              <p>Chính sách bảo hành : {e.guarantee}</p>
          </div>

          <div className='Detail__button mt-5'>
            <div className="row">
              <div className="col-5">
                <button className='btn--page btn--addCheckout'> Thêm vào giỏ hàng</button>
              </div>
              <div className='col-2'></div>
              <div className="col-5">
              <button className='btn--page btn--buyNow'> Mua Ngay</button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-4 Detail__warrantyPolicy">
          
        </div>
      </div>
      <div className="Detail__Tab">
      <DetailTab/>
      </div>
    </div>
  )
}
