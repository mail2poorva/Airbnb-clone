import React from "react";
import Logo from "../images/logo.png";
import "./CSS/header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="header-img" />
      </Link>

      <div className="header-center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default header;
