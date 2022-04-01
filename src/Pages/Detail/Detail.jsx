import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetProductDetailAction } from 'redux/actions/ProductAction';

export default function Detail(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params
        console.log('first id',id)
        dispatch(GetProductDetailAction(id))
        window.scrollTo(0, 0)
    }, []);
    const {arrProductDetail} = useSelector(state =>state.ProductReducer)
    console.log('arrProductDetail',arrProductDetail)
  return (

    <div>Detail</div>
  )
}
