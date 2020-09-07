import React from "react";
import "./header.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";

const Header = ({ setItem, whichItem }) => {
  const getClassName = (item) => {
    if (item === whichItem.toLowerCase()) {
      return "active";
    }
    return " ";
  };
  return (
    <header className="header">
      <h1 onClick={() => setItem("home")}>Quarantine-Watchlist</h1>
      <div className="header-left">
        <ul className="movies-series ">
          <li
            onClick={(event) => setItem(event.target.innerText)}
            className={getClassName("movies")}
          >
            Movies
          </li>
          <li
            onClick={(event) => setItem(event.target.innerText)}
            className={getClassName("series")}
          >
            Series
          </li>
        </ul>
        <a href="https://github.com/iminfinity/quarantine-watchlist">
          <Github />
        </a>
      </div>
    </header>
  );
};

export default Header;
