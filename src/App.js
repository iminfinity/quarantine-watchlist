import React, { useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";

import DataContext from "./dataContext";
function App() {
  const [whichItem, setWhichItem] = useState("home");

  const setItem = (item) => {
    setWhichItem(item);
  };
  return (
    <DataContext>
      <Header setItem={setItem} whichItem={whichItem} />
      <div className="App">
        <List whichItem={whichItem} setItem={setItem} />
      </div>
    </DataContext>
  );
}

export default App;
