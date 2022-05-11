import "../styles/Home/service.css";
import { VscPaintcan } from "react-icons/vsc";
import { RiCodeSSlashFill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { VscGitPullRequestClosed } from "react-icons/vsc";
const Service = () => {
  const style = {
    height: "45px",
    width: "45px",
    fontSize: "30px",
    color: "#198686",
    backgroundColor: "#fff",
    lineHeight: "40px",
    borderRadius: "4px",
    marginBottom: "25px",
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  return (
    <div id="service-menu" className="service-menu">
      <h1>Service</h1>
      <section className="services">
        <div className="graphic">
          <VscPaintcan style={style} />
          <h2 className="content">Graphic Design</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
        <div className="web">
          <CgScreen style={style} />
          <h2 className="content">Web Design</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
        <div className="ui-ux">
          <VscGitPullRequestClosed style={style} />
          <h2 className="content">UI/UX Design</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
        <div className="html">
          <RiCodeSSlashFill style={style} />
          <h2 className="content">Html/Css</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
        <div className="business">
          <GiSteeringWheel style={style} />
          <h2 className="content">Business analysis</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
        <div className="marketing">
          <BsFillMegaphoneFill style={style} />
          <h2 className="content">SEO Marketing</h2>
          <p className="sub-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consectetur!
          </p>
        </div>
      </section>
    </div>
  );
};
export default Service;
