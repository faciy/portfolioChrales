import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contactez moi!</h1>
      {/* <iframe
        src=""
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe> */}
      <iframe src="https://www.google.com/maps/d/embed?mid=1k5OgI5zJQULUt75LJdTs7JCF7sA&hl=fr" width="640" height="480"></iframe>

      <h4>Téléphone</h4>
      <p>07 68 06 09 90</p>

      <h4>Email</h4>
      <p>kouassicharlesothniel@gmail.com</p>

      <h4>Addresse</h4>
      <p>Abidjan - Yopougon</p>
    </div>
  );
};

export default About;
