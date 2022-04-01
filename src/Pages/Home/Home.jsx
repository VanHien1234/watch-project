import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { RenderHomePageAction } from 'redux/actions/ProductAction';
import Brand from './Brand/Brand'
import MaleProduct from './MaleProduct/MaleProduct';

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(RenderHomePageAction())
  }, []);
  const {arr_Male_Product} = useSelector(state =>state.ProductReducer)
  return (
    <div>
      Home1323
      <Brand/>
      <MaleProduct arrProduct ={arr_Male_Product}/>

    </div>
  )
}
