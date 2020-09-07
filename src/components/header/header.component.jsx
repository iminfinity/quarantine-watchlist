import React from "react";
import "./header.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";

const Header = () => {
  const handleClick = (value) => {
    alert(value);
  };
  return (
    <header className="header">
      <h1>
        <a href="https://iminfinity.github.io/quarantine-watchlist/">
          Quarantine-Watchlist
        </a>
      </h1>
      <div className="header-left">
        <ul>
          <li onClick={(event) => handleClick(event.target.innerText)}>
            Movies
          </li>
          <li onClick={(event) => handleClick(event.target.innerText)}>
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
