import React from "react";
import "./home.styles.scss";

const Home = ({ setItem }) => {
  return (
    <div className="homepage">
      <h1>Hi fellow quarantined human</h1>
      <h2>If you're reading this, I hope you are okay</h2>
      <p>
        I have watched a lot of movies and tv series while sitting home during
        quarantine. This site contains list of all movies and series I watched.
        If you have a movie suggestion that you want me to watch send me message
        :{" "}
        <a
          href="https://suwarnathapa.com#messageMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          suwarnathapa.com
        </a>
      </p>
      <div className="home-bottom">
        <ul>
          <li onClick={(event) => setItem(event.target.innerText)}>Movies</li>
          <li onClick={(event) => setItem(event.target.innerText)}>Series</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
