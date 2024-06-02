import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../home/Home";
import "./style.css";

const override = css`
  display: block;
  margin: 0 auto;
`;

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/100/photos")
      .then((response) => {
        setStories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Home />
      <div className="stories-list container p-3">
        {loading ? (
          <div className="loader-container">
            <ClipLoader css={override} size={150} color={"#ffffff"} loading={loading} />
          </div>
        ) : (
          <div className="row p-2">
            {stories.map((story) => (
              <div key={story.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src={story.url}
                    alt={story.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <p className="card-text">{story.description}</p>
                    <Link to={`/story/${story.id}`} className="btn custom-button readmorebtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StoriesList;
