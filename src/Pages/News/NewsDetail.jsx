
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RenderDetailPostAction } from 'redux/actions/PostAction';
import './NewsDetail.scss'

export default function NewsDetail(props) {
  const dispatch = useDispatch();

  /* let { id } = props.match.params */
  let { id } = useParams()
 

  useEffect(() => {

    /* console.log('first id', id) */
    dispatch(RenderDetailPostAction(id))
    window.scrollTo(0, 0)
  }, [id]);

  const { arrPostDetail } = useSelector(state => state.PostReducer)
  console.log('arrPostDetail',arrPostDetail)
  let e = arrPostDetail
  const days = e.dateCreate.slice(0, 10);
  return (
    <div className="border-content" >
          {/* <div dangerouslySetInnerHTML={{
            __html:`${e.content}`
          }}>
          </div> */}
          <div className="title">
            <h4>{e.title}</h4>
            <p>{`POSTED ON ${days} BY ADMIN`}</p>
          </div>
            <img
              alt=""
              src={`https://radiant-stream-23882.herokuapp.com/img/post/${e.logo}`}
            ></img>
          <div className="content">
            <p>{e.contentSub}</p>
          </div>
          <div className= "img-fix
            dangerouslySetInnerHTML={{ __html: `${arrPostDetail.content}` }}>
          </div>
        </div>

  )
}


