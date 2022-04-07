import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./News_post.scss";

export default function News_post() {
  const { arrPost } = useSelector((state) => state.PostReducer);
  console.log("arrPost", arrPost);
  const renderPost = () => {
    return arrPost?.map((e, index) => {
      const days = e.dateCreate.slice(0, 10);
      return (
        <div className="border-content" key={index}>
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
            <Link to={`/news/${e._id}`} >
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
