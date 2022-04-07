import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useRouteMatch } from "react-router-dom";
import "./News_post.scss";

export default function News_post() {
  const { arrPost } = useSelector((state) => state.PostReducer);
  
  let { url } = useRouteMatch();
  console.log('url',url)
  const renderPost = () => {
    return arrPost?.map((e, index) => {
      const days = e.dateCreate.slice(0, 10);
      return (
        <div className="border-content" key={index}>
          <div className="title">
            <h4>{e.title}</h4>
            <p>{`POSTED ON ${days} BY ADMIN`}</p>
          </div>
          <Link to={`/news/${e._id}`} >
            <img alt="" src={`https://radiant-stream-23882.herokuapp.com/img/post/${e.logo}`}></img>
            </Link>
          <div className="content">
            <p>{e.contentSub}</p>
            <Link to={`${url}/${e._id}`} >
            <button>CONTINUE READING
            <i className="fas fa-arrow-right"></i>
            </button>

            </Link>
            
          </div>
        </div>
      );
    });
  };
  return <div>{renderPost()}</div>;
}
