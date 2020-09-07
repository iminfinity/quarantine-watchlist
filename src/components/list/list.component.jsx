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
      return movies.map((movie, index) => {
        return <Item item={movie} key={index} />;
      });
    } else if (whichItem.toLowerCase() === "series") {
      return series.map((serie, index) => {
        return <Item item={serie} key={index} />;
      });
    } else {
      return <Home setItem={setItem} />;
    }
  };
  return <div className="list">{helperFunction()}</div>;
};

export default List;
