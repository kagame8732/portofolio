import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import img1 from "../images/home/img1.png";

const Home = () => {
  const style = {
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    color: "#777",
    marginTop: "5rem",
    cursor: "pointer",
  };
  return (
    <div className="links-introduction">
      <div className="links-menus">
        <FaFacebookF style={style} />
        <FaTwitter style={style} />
        <FaInstagram style={style} />
        <FaLinkedinIn style={style} />
      </div>
      <div className="intro-description">
        <h2>
          <span className="intro-description-greeting">hello i'm</span>
          <span className="intro-description-names">johthan smith</span>
          <span className="intro-description-job">
            professional freelancer & web developer
          </span>
        </h2>
        <p className="intro-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id minima
          dolor delectus? Dolore iusto eaque cupiditate ipsum ducimus
        </p>
        <button className="btn-hire-me">Hire me</button>
      </div>
      <div className="intro-description-text">
        <img src={img1} alt="background image" />
      </div>
    </div>
  );
};
export default Home;
