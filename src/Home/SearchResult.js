import React from "react";
import "./CSS/SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} />
      <FavoriteBorderIcon className="searchResult-heart" />
      <div className="searchResult-info">
        <div className="searchResult-info-top">
          <p>{location}</p>
          <h1>{title}</h1>
          <p>______</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-info-bottom">
          <div className="searchResult-stars">
            <StarIcon className="searchResult-stars-icon" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
