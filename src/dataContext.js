import React from "react";
import movies from "./data/movies";
import series from "./data/series";
import current from "./data/current";
export const MoviesContext = React.createContext();
export const SeriesContext = React.createContext();
export const CurrentContext = React.createContext();

const DataProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={movies}>
      <SeriesContext.Provider value={series}>
        <CurrentContext.Provider value={current}>
          {children}
        </CurrentContext.Provider>
      </SeriesContext.Provider>
    </MoviesContext.Provider>
  );
};

export default DataProvider;
