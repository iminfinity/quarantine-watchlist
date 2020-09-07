import React from "react";
import "./list.styles.scss";
import { useContext } from "react";
import { MoviesContext } from "../../dataContext";
import { SeriesContext } from "../../dataContext";
import Item from "../item/item.component";
import Home from "../home/home.component";
import ItemCarousel from "../carousel/carousel.component";
import Current from "../../components/current/current.component";
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
    } else if (whichItem.toLowerCase() === "current") {
      return <Current />;
    } else {
      return <Home setItem={setItem} />;
    }
  };
  const carousel = () => {
    if (whichItem.toLowerCase() === "movies") {
      return <ItemCarousel items={movies} />;
    } else if (whichItem.toLowerCase() === "series") {
      return <ItemCarousel items={series} />;
    } else {
      return <Home setItem={setItem} />;
    }
  };
  return <div className="list">{helperFunction()}</div>;
  // return <div className="list">{isMobile ? helperFunction() : carousel()}</div>;
};

export default List;
