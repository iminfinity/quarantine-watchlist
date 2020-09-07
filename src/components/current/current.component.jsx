import React, { useContext } from "react";
import ItemCarousel from "../carousel/carousel.component";
import { CurrentContext } from "../../dataContext";

import "./current.styles.scss";

const Current = () => {
  const current = useContext(CurrentContext);
  return (
    <div className="current">
      <ItemCarousel items={current} />
      <p className="future-text">
        These are the series/movies I'm currently watching or I'm planning to
        watch next.
      </p>
    </div>
  );
};

export default Current;
