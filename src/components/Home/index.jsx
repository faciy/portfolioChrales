import { Link, useLocation } from "react-router-dom";
import azertyu from '../../assets/azertyu.jpg'

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Bonjour,</p>
          <p>Je me nomme Yao Kouassi Charles Oth-Niel</p>
          <p>Développeur Front-End (Web & Mobile)</p>
        </h1>
        <Link to="about">
          <button>Plus d'Infos</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={azertyu}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
