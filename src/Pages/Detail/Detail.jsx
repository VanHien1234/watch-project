import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetProductDetailAction } from 'redux/actions/ProductAction';
import DetailTab from './TabComponent/DetailTab';
import RandomProduct from './RandomProduct/RandomProduct';
import { IMG_URL_PRODUCT } from 'API/ApiConfig';
import { IMG_URL_BRAND } from 'API/ApiConfig';
import { AddCheckoutAction } from 'redux/actions/CheckoutAction';
import './Detail.scss'

export default function Detail(props) {
  const dispatch = useDispatch();

  const { arrProductDetail } = useSelector(state => state.ProductReducer)
  const { arrRandomProduct } = useSelector(state => state.ProductReducer)
  const { arrBrandLogo } = useSelector(state => state.ProductReducer)

  function currencyFormat(num) {
    return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND'
  }
  let LOGO = arrBrandLogo?.filter(e => (e.title === arrProductDetail.brand))





  let { id } = props.match.params

  useEffect(() => {
    
    /* console.log('first id', id) */
    dispatch(GetProductDetailAction(id))
    window.scrollTo(0, 0)
  }, [id]);



  const addCheckout = ()=>{
    dispatch(AddCheckoutAction(arrProductDetail))
  }



  console.log('arrbrandlogo',arrProductDetail)
  const e = arrProductDetail;



  return (

    <div className='Detail container'>
      <div className='Detail__Breadcrumb'>
        
        Trang Chu / {`${e.type}`=="nam"? <span>Đồng Hồ Nam</span>:<span>Đồng Hồ Nữ</span>}
      </div>
      <div className="row">
        <div className="col-4 Detail__Img">
          <img src={`${IMG_URL_PRODUCT}/${e.logo}`} alt="" />

        </div>
        <div className="col-5 Detail__Description">
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
            <p>Chính sách bảo hành : {e.guarantee} Năm</p>
          </div>

          <div className='Detail__button mt-5'>

            <div className="row">
              <div className="col-5">
                <button className='btn--page btn--addCheckout' 
                  onClick={addCheckout}
                > Thêm vào giỏ hàng</button>
              </div>

              <div className="col-5 ml-3">
                <button className='btn--page btn--buyNow'> Mua Ngay</button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-3 Detail__warrantyPolicy ">
          <div className='Detail__Logo text-right'>
            <img src={`${IMG_URL_BRAND}/${LOGO[0]?.logo}`} alt="" />
          </div>
          <div className='Detail__Policy mt-3'>
            <div className="row">
              <div className="col-3">
                <i className="fab fa-galactic-senate" />

              </div>
              <div className="col-9 text-left">
                <b>THƯƠNG HIỆU HÀNG ĐẦU</b><span> với hơn 20 năm kinh nghiệm trong lĩnh vực bán lẻ đồng hồ.</span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <i className="fab fa-500px" />

              </div>
              <div className="col-9 text-left">
                <b>BẢO HÀNH LÊN ĐẾN 5 NĂM</b><span> Ngoài bảo hành chính hãng. Khi mua hàng tại VINAWATCH được hỗ trợ thêm.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="Detail__Tab">
        <DetailTab des={arrProductDetail} />
      </div>
      <div className='Detail__Random'>
        <RandomProduct random={arrRandomProduct} />
        <hr />

      </div>
    </div>
  )
}
