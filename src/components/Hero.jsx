import "../dist/styles.css";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Title from "./Title";


const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,react",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,scss",
    id: 3,
  },
  
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <Title />
                
                <p>
                Namaskar! 🙏 I'm Snehashish Gaikwad—a second-year Computer Science student at VIT AP University 📍. Passionate about shaping futuristic digital experiences with React. Let's dive into the world of code and creativity! 
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/snehashish-gaikwad-32b6a324a/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Snehashish24"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
