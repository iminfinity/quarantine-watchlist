import React from "react";
import "./list.styles.scss";
import { useContext } from "react";
import { MoviesContext } from "../../dataContext";
import { SeriesContext } from "../../dataContext";
const List = ({ whichItem }) => {
  const movies = useContext(MoviesContext);
  const series = useContext(SeriesContext);

  const helperFunction = () => {
    if (whichItem.toLowerCase() === "movies") {
      return <h1>Movies</h1>;
    } else if (whichItem.toLowerCase() === "series") {
      return <h1>Series</h1>;
    } else {
      return <h1>HomePage</h1>;
    }
  };
  return <div className="list">{helperFunction()}</div>;
};

export default List;
