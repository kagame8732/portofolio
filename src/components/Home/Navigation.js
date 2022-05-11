import "../styles/Home/navigation.css";
import Social_media from "./Social_media";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="headers-menu">
        <h1>
          <span className="logo-designer-1">Desig</span>
          <span className="logo-designer-2">ner</span>
        </h1>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <FaBars />
        </label>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
      <Social_media />
    </div>
  );
};
export default Navigation;
