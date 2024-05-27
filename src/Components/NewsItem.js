import React from "react";

const NewsItem = (props) => {
  let { title, Description, imageUrl, newsUrl, author, date, source } = props;

  // Default placeholder image URL
  const defaultImageUrl = "https://www.pointvisible.com/wp-content/uploads/2018/11/404-picture-not-found.jpg";

  return (
    <div>
      <div className="card my-3">
        <img
          src={imageUrl || defaultImageUrl}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body ">
          <h5 className="card-title">
            {title}
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: '85%', zIndex: '1' }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{Description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
