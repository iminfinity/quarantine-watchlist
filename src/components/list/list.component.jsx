import React from "react";
import "./list.styles.scss";
import { useContext } from "react";
import { MoviesContext } from "../../dataContext";
import { SeriesContext } from "../../dataContext";
import Item from "../item/item.component";
import Home from "../home/home.component";
const List = ({ whichItem, setItem }) => {
  const movies = useContext(MoviesContext);
  const series = useContext(SeriesContext);

  const helperFunction = () => {
    if (whichItem.toLowerCase() === "movies") {
      return movies.map((movie) => {
        return <Item item={movie} />;
      });
    } else if (whichItem.toLowerCase() === "series") {
      return series.map((serie) => {
        return <Item item={serie} />;
      });
    } else {
      return <Home setItem={setItem} />;
    }
  };
  return <div className="list">{helperFunction()}</div>;
};

export default List;
