import React from "react";

export const MoviesContext = React.createContext();
export const SeriesContext = React.createContext();
const movies = [
  "movies1",
  "movies3",
  "movies4",
  "movies5",
  "movies6",
  "movies7",
  "movies7",
  "movies2",
];
const series = [
  "series1",
  "series3",
  "series4",
  "series5",
  "series6",
  "series7",
  "series7",
  "series2",
];
const DataProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={movies}>
      <SeriesContext.Provider value={series}>{children}</SeriesContext.Provider>
    </MoviesContext.Provider>
  );
};

export default DataProvider;
