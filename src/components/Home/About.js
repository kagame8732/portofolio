import img2 from "../images/about/img2.png";
const About = () => {
  return (
    <div id="about-us" class="about">
      <section class="about-us">
        <div class="all-1">
          <div class="container-1">
            <div class="image">
              <img src={img2} alt="a man showing some text" />
            </div>
            <div class="about-txt">
              <h1 class="hire-me">Why you hire me!</h1>
              <p class="reason-to-hire">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.In
                accusamus saepe dolorem a quis dolor magnam recusandae quae
                doloribus quaerat sequi veniam repudiandae modi repellat ipsa
                quibusdam facere commodi molestiae eveniet, aliquid earum eaque,
                velit, aperiam ut.
              </p>
              <div class="skills">
                <div class="skill">
                  <div class="skill-name">ui/ux Design</div>
                  <div class="skill-bar">
                    <div
                      class="skill-per"
                      per="85%"
                      style={{ maxWidth: "85%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill">
                  <div class="skill-name">Web Design</div>
                  <div class="skill-bar">
                    <div
                      class="skill-per"
                      per="75%"
                      style={{ maxWidth: "75%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill">
                  <div class="skill-name">HTML/CSS</div>
                  <div class="skill-bar">
                    <div
                      class="skill-per"
                      per="90%"
                      style={{ maxWidth: "90%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill">
                  <div class="skill-name">Wordpress</div>
                  <div class="skill-bar">
                    <div
                      class="skill-per"
                      per="65%"
                      style={{ maxWidth: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
