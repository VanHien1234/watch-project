import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { RenderHomePageAction } from 'redux/actions/ProductAction';
import Brand from './Brand/Brand'
import MaleProduct from './MaleProduct/MaleProduct';
import FemaleProduct from './FemaleProduct/FemaleProduct';
import NewsHome from './NewsHome/NewsHome'

export default function Home() {
  const dispatch = useDispatch()
  let nam = "nam";
  let nu = "nu";
  useEffect(() => {

    dispatch(RenderHomePageAction(nam,nu))
  }, [dispatch]);
  const { arr_Male_Product } = useSelector(state => state.ProductReducer)


  const {arr_Female_Product } = useSelector(state => state.ProductReducer)
  const {arrBrandLogo } = useSelector(state => state.ProductReducer)
  const { isLoading } = useSelector(state => state.LoadingReducer);
  return (
    <>
      { !isLoading?
      <div>
        <Brand arrLogo={arrBrandLogo}/>
        <MaleProduct arrProduct ={arr_Male_Product}/>
        <FemaleProduct arrProduct ={arr_Female_Product}/>
        <NewsHome/>
      </div>
      : ''}
    </>

  )
}
