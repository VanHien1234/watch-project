import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsHome.scss";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get(
          "https://radiant-stream-23882.herokuapp.com/api/v1/posts"
        );
        console.log("22", result.data.data);
        setNews(result.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const renderNews = () => {
    return (
      <div className="container">
        <div className="head-title">
          <span>BÀI VIẾT MỚI</span>
        </div>
        <div class="row text-center">
          {news?.map((e, index) => {
            return (
              <>
                <div key="index" class="col-sm">
                  <div class="card">
                    <img alt="" src={`https://radiant-stream-23882.herokuapp.com/img/post/${e.logo}`}></img>
                    <div class="card-body ">
                      <h5 class="card-title ">{e.title}</h5>
                      <p class="card-text ">{e.contentSub}</p>
                    </div>
                  </div>
                </div>
              </>
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
