import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './News_slide.scss'


export default function News_post(props) {
  const { arrPost } = useSelector(state => state.PostReducer);
  console.log('arrPost', arrPost);
    const renderPost = () => {    
        return (
            <div className="slide-content">
            <h4>Bài viết mới</h4>
                {
                    arrPost?.map((e, index) => {
                        return <div key={index}>
                            <p>{e.title}</p>
                        </div>
                    })}
            </div>
        )
  }
  return (
    <div>
      {renderPost()}
    </div>
  )
}