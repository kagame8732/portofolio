import { ImCross } from "react-icons/im";
import { BsCheck } from "react-icons/bs";
const Price = () => {
  return (
    <div className="container-4" id="pricing">
      <div className="table basic">
        <div className="price-section">
          <div className="price-area">
            <div className="package-name">
              <h2>Basic</h2>
            </div>
            <div className="area">
              <span className="text">$75</span>
              <p className="txt">Only PSD Services</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Graphical Design</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Web design</span>
          </li>
          <li>
            <span className="icon cross">
              <ImCross />
            </span>
            <span className="list-name">UI/UX</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">HTML/CSS</span>
          </li>
          <li>
            <span className="icon cross">
              <ImCross />
            </span>
            <span className="list-name">SEO Marketing</span>
          </li>
          <li>
            <span className="icon cross">
              <ImCross />
            </span>
            <span className="list-name">Business improve</span>
          </li>
        </div>
        <div className="btn-plan">
          <button>Choose Plan</button>
        </div>
      </div>
      <div className="table premium">
        <div className="ribbon">
          <span className="">Regular</span>
        </div>
        <div className="price-section">
          <div className="price-area">
            <div className="package-name">
              <h2>Standard</h2>
            </div>
            <div className="area">
              <span className="text">$250</span>
              <p className="txt">Half-Complete-Services</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Graphical Design</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Web design</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">UI/UX</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">HTML/CSS</span>
          </li>
          <li>
            <span className="icon cross">
              <ImCross />
            </span>
            <span className="list-name">SEO Marketing</span>
          </li>
          <li>
            <span className="icon cross">
              <ImCross />
            </span>
            <span className="list-name">Business improve</span>
          </li>
        </div>
        <div className="btn-plan">
          <button>Choose Plan</button>
        </div>
      </div>
      <div className="table basic">
        <div className="price-section">
          <div className="price-area">
            <div className="package-name">
              <h2>Premium</h2>
            </div>
            <div className="area">
              <span className="text">$350</span>
              <p className="txt">Complete Services</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Graphical Design</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Web design</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">UI/UX</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">HTML/CSS</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">SEO Marketing</span>
          </li>
          <li>
            <span className="icon check">
              <BsCheck />
            </span>
            <span className="list-name">Business improve</span>
          </li>
        </div>
        <div className="btn-plan">
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
