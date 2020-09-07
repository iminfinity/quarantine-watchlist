import React from "react";
import movies from "./data/movies";
import series from "./data/series";
export const MoviesContext = React.createContext();
export const SeriesContext = React.createContext();

const DataProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={movies}>
      <SeriesContext.Provider value={series}>{children}</SeriesContext.Provider>
    </MoviesContext.Provider>
  );
};

export default DataProvider;
