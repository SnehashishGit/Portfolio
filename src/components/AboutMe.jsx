import "../dist/styles.css";


import About_me from "../images/about_me.jpg"

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
             
              <img src={About_me} alt="mee" className="img-side__main-img" />
              <span>
              
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
              Elevating User Journeys: Navigating the Digital Realm as a  <br /> Front-End Sorcerer.
                📍
              </h4>
              <p>
              Hello there! I'm Snehashish Gaikwad, a dynamic second-year Computer Science student at VIT AP University. As a junior developer, I specialize in front-end technologies, wielding the power of React to bring ideas to life. Proficient in crafting responsive and visually appealing interfaces, I navigate the development landscape with skills in  Html ,Css, React, and JavaScript. Beyond the client-side magic, my toolkit extends to the server realm with Node.js. Driven by a passion for problem-solving and a commitment to continuous learning, I'm on a journey to turn concepts into captivating digital experiences. Let's collaborate and create something extraordinary
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
