import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { RenderHomePageAction } from 'redux/actions/ProductAction';
import Brand from './Brand/Brand'
import MaleProduct from './MaleProduct/MaleProduct';
import FemaleProduct from './FemaleProduct/FemaleProduct';
import NewsHome from './NewsHome/NewsHome'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(RenderHomePageAction())
  }, []);
  const { arr_Male_Product } = useSelector(state => state.ProductReducer)
  const { arr_Female_Product } = useSelector(state => state.ProductReducer)
  const { arr_News} = useSelector(state => state.ProductReducer)
  return (
    <div>
      <Brand/>
      <MaleProduct arrProduct ={arr_Male_Product}/>
      <FemaleProduct arrProduct={arr_Female_Product} />
      <NewsHome arr_News={arr_News} />
    </div>
  )
}
