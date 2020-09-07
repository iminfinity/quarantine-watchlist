import React, { useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";

import DataContext from "./dataContext";
function App() {
  const [whichItem, setWhichItem] = useState("0");

  const setItem = (item) => {
    setWhichItem(item);
  };
  return (
    <DataContext>
      <div className="App">
        <Header setItem={setItem} />
        <List whichItem={whichItem} />
      </div>
    </DataContext>
  );
}

export default App;
