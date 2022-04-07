import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route, Switch, useRouteMatch
} from "react-router-dom";
import { RenderPostAction } from "redux/actions/PostAction";
import NewsDetail from "./NewsDetail";
import NewsPost from "./News_post";
import NewsSlide from "./News_slide";

export default function News() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RenderPostAction());
  }, [dispatch]);

  const { arrPost } = useSelector(state => state.PostReducer);

  let { path } = useRouteMatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <Switch>
            <Route path={`${path}/:id`}>
              <NewsDetail />
            </Route>
            <Route path={path}>
              <NewsPost arrPost={arrPost} />
            </Route>
          </Switch>
        </div>
        <div className="col-3">
          <NewsSlide />
        </div>
      </div>
    </div>
  );
}
