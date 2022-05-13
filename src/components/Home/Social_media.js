import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/Home/social.css";
import img1 from "../images/home/img1.png";
const Social_media = () => {
  return (
    <div className="links-introduction">
      <div className="links-menus">
        <a href="#" className="facebook">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="intro-descripti  <About_us />on">
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
        <img className="img-home" src={img1} alt="background image" />
      </div>
    </div>
  );
};
export default Social_media;
