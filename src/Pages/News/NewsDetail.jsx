import React , { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RenderDetailPostAction } from 'redux/actions/PostAction'
import './NewsDetail.scss'
export default function NewsDetail(props) {
  const dispatch = useDispatch(); 

  let { id } = props.match.params
  useEffect(() => {
    
     console.log('first id', id) 
    dispatch(RenderDetailPostAction(id))
    window.scrollTo(0, 0)
  }, [id]);
  const {arrPost} = useSelector(state => state.PostReducer)
  console.log('arrPost',arrPost)

  return (
      <div className="container">
        <div>
            <div className= "img-fix"
                dangerouslySetInnerHTML={{ __html: `${arrPost.content}` }}>
              </div>
        </div>
      </div>
  )
}
