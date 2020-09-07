import React from "react";
import "./header.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="https://iminfinity.github.io/quarantine-watchlist/">
          Quarantine-Watchlist
        </a>
      </h1>
      <a href="https://github.com/iminfinity/quarantine-watchlist">
        <Github />
      </a>
    </header>
  );
};

export default Header;
