import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsHome.scss";
import { Link,useRouteMatch } from "react-router-dom";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  const [callPostApi,setCallPostApi]= useState(true)
  let { url } = useRouteMatch();

  useEffect(() => {

      const fetchData = async () => {
        if(callPostApi){
          try {
            let result = await axios.get(
              "https://radiant-stream-23882.herokuapp.com/api/v1/posts"
            );

            setNews(result.data.data);
          } catch (error) {
            console.log("error", error);
          }

        }
      };
      fetchData();
    return () => {
      setCallPostApi(false)
      
  }
  }, [url]);

  const renderNews = () => {
    return (
      <div className="container">
        <div className="head-title">
          <span>BÀI VIẾT MỚI</span>
        </div>
        <div className="row text-center">
          {news?.map((e, index) => {
            return (
              
                <div key={index} className="col-sm">
                  <Link to={`/news/${e._id}`} >
                  <div className="card">
                    <img alt="" src={`https://radiant-stream-23882.herokuapp.com/img/post/${e.logo}`}></img>
                    <div className="card-body ">
                      <h5 className="card-title ">{e.title}</h5>
                      <p className="card-text ">{e.contentSub}</p>
                    </div>
                  </div>
                  </Link>
                </div>

            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="Brand px-3 text-center">
      <div>{renderNews()}</div>
    </div>
  );
};

export default NewsHome;
