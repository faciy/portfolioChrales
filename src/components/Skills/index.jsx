import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Compétences</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          {/* <li>Node.js</li> */}
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Librairies:</strong>
          <li>Bootstrap</li>
          {/* <li>Express.js</li> */}
          <li>Material-ui</li>
          <li>React.js</li>
          <li>React.native</li>
          <li>WordPress</li>
        </div>
        <div>
          <strong>Outils:</strong>
          {/* <li>Eslint</li> */}
          {/* <li>Webpack</li> */}
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
        {/* <div>
          <strong>Uint Test:</strong>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>React-test</li>
          <li>SupperTest</li>
        </div> */}
      </div>
    </div>
  );
};

export default About;
