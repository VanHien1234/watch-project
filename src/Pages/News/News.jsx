import React, { useEffect } from "react";
import { RenderPostAction } from "redux/actions/PostAction";
import News_post from "./News_post";
import { useDispatch, useSelector } from "react-redux";

export default function News() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RenderPostAction());
  }, []);
  const { arrPost } = useSelector(state => state.PostReducer);
  /* console.log('11',arrPost); */
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <News_post arrPost={arrPost} />
        </div>
        <div className="col-3"></div>
      </div>
      
    </div>
  );
}
