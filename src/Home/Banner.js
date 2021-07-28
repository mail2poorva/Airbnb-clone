import React, { useState } from "react";
import "./CSS/Banner.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner-search">
        <Button
          variant="outlined"
          className="banner-search-btn"
          onClick={() => setshowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>

        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
export default Banner;
