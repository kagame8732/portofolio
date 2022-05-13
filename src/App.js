import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Service from "./components/Home/Service";
import Price from "./components/Home/Price";
import Contact from "./components/Home/Contact";
import ErrorPage from "./components/Home/ErrorPage";
import "./components/styles/Home/price.css";
import "./components/styles/Home/contact.css";
import "./components/styles/Home/service.css";
import "./components/styles/Home/about.css";
import "./components/styles/Home/home.css";
import "./components/styles/Home/app.css";
import { FaBars } from "react-icons/fa";

function App() {
  const style = {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "400",
    color: "#fff",
    background: "#198686",
    borderRadius: "5px",
    padding: ".5rem",
    textTransform: "uppercase",
    fontWeight: "600",
  };
  return (
    <Router>
      <nav>
        <h1>
          <span className="logo-designer-1">Desig</span>
          <span className="logo-designer-2">ner</span>
        </h1>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>

        <ul>
          <li>
            <Link to={"/"} style={style}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} style={style}>
              About us
            </Link>
          </li>
          <li>
            <Link to={"/service"} style={style}>
              Service
            </Link>
          </li>
          <li>
            <Link to={"/price"} style={style}>
              Price
            </Link>
          </li>
          <li>
            <Link to={"/contact"} style={style}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <div>Footer</div> */}
    </Router>
  );
}

export default App;
