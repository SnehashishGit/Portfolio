import ProBox from "./ProBox";
import AmhiMarathi from"../images/amhimarathi.png"
import AgroFarm from "../images/agro-farm.png"

function Projects(){
    return(
        <>
          <section id="projects" className="project">
            <div className="conatiner">
                <div className="project-content">
                    <p className="TitlePro">Work</p>
                    <h3 className="TitlePro">PROJECTS </h3>
                    <div className="projects-grid">
                        <ProBox
                        title="Agrofarm"
                        img={AgroFarm}
                        date="(Jan 2024)"
                        description="AgroFarms website is your gateway to precision tools and sustainable solutions, redefining modern agriculture for optimal yield and growth"
                        techno1="React Js"
                        techno2="Tailwind Css"
                        code="https://github.com/SnehashishGit"
                        demo="https://final-agro-farms.vercel.app/"
                        scrollY="-83%"
                        icon=""
                        />  
                    </div>



                    <div className="projects-grid">
                        <ProBox
                        title="Amhi-Marathi"
                        img={AmhiMarathi}
                        date="(May 2023)"
                        description="Explore the rich cultural tapestry of Maharashtra on the Amhi Marathi Club website, where tradition meets modernity in a celebration of all things Marathi"
                        techno1="Html, Css"
                        techno2="Javascript"
                        code="#"
                        demo="https://amhimarathiin.netlify.app/"
                        scrollY="-83%"
                        icon=""
                        cName="reversed-proj"
                        />  
                    </div>
                </div>
            </div>
          </section> 
        </>
    );
}

export default Projects;
