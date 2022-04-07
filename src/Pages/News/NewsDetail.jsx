import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RenderDetailPostAction } from 'redux/actions/PostAction'
import News_slide from "./News_slide";

export default function NewsDetail(props) {
  const dispatch = useDispatch();

  let { id } = props.match.params
  useEffect(() => {

    /* console.log('first id', id) */
    dispatch(RenderDetailPostAction(id))
    window.scrollTo(0, 0)
  }, [id]);

  const { arrPostDetail } = useSelector(state => state.PostReducer)


  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div
            dangerouslySetInnerHTML={{ __html: `${arrPostDetail.content}` }}>
          </div>

        </div>
        <div className="col-3">
          <News_slide />
        </div>
      </div>
    </div>
  )
}


