import React from "react";
import "./item.styles.scss";

const Item = ({ item }) => {
  const {
    name,
    released,
    poster,
    director,
    rating,
    casts,
    rewatch,
    synopsis,
    creater,
  } = item;
  return (
    <div
      className="item"
      style={{
        background: `url(${poster})`,
      }}
    >
      {rewatch === "true" ? <h5>Rewatched</h5> : null}
      <h1>
        {name} (<span>{released}</span>)
      </h1>
      {director ? (
        <h3>
          Directed By: <span>{director}</span>
        </h3>
      ) : null}
      {creater ? (
        <h3>
          Created By: <span>{creater}</span>
        </h3>
      ) : null}

      <div className="casts">
        Starring:
        {casts.map((cast, index) => {
          return <span key={index}>{cast} </span>;
        })}
      </div>
      <h4>
        My rating:<span> {rating}</span>
      </h4>

      <p>
        Synopsis:<span>{synopsis}</span>{" "}
      </p>
    </div>
  );
};
export default Item;
