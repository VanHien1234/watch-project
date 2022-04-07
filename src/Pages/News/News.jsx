import React, { useEffect } from "react";
import { RenderPostAction } from "redux/actions/PostAction";
import News_post from "./News_post";
import News_slide from "./News_slide";
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

export default function News() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RenderPostAction());
  }, []);
  const { arrPost } = useSelector(state => state.PostReducer);

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <News_post arrPost={arrPost} />
        </div>
        <div className="col-3">
          <News_slide/>
        </div>
      </div>
    </div>
  );
}
