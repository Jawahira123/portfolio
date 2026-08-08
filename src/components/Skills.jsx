import "../css/skill.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa6";

import tableau from "../assets/tableau.png";
import powerbi from "../assets/powerbi.png";
import skillbg from "../assets/skillbg.png";

function Skill() {
  return (
    <section className="skill">

      <div className="skill-body">

        <h1>My Tech Stack</h1>

        <div className="skill-list">

          {/* Frontend */}
          <div className="skill-content">
            <h2>Frontend</h2>

            <div className="item">

              <div className="item-s">
                <FaHtml5 className="icon html" size={50}/>
                <span>HTML</span>
              </div>

              <div className="item-s">
                <FaCss3Alt className="icon css" size={50}/>
                <span>CSS</span>
              </div>

              <div className="item-s">
                <IoLogoJavascript className="icon js" size={50} />
                <span>JavaScript</span>
              </div>

              <div className="item-s">
                <FaReact className="icon react" size={50}/>
                <span>React</span>
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="skill-content">
            <h2>Tools & Others</h2>

            <div className="item">

              <div className="item-s">
                <FaGithub className="icon github" size={50}/>
                <span>GitHub</span>
              </div>

              <div className="item-s">
                <VscVscode className="icon vscode" size={50} />
                <span>VS Code</span>
              </div>

              <div className="item-s">
                <FaFigma className="icon figma" size={50}/>
                <span>Figma</span>
              </div>

              <div className="item-s">
                <img
                  src={tableau}
                  alt="Tableau"
                  className="icon-img"
                />
                <span>Tableau</span>
              </div>

              <div className="item-s">
                <img
                  src={powerbi}
                  alt="Power BI"
                  className="icon-img" height="300px" width="300px"
                />
                <span>Power BI</span>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="skill-content">
            <h2>Backend</h2>

            <div className="item">

              <div className="item-s">
                <FaNodeJs className="icon node" size={50}/>
                <span>Node.js</span>
              </div>

              <div className="item-s">
                <SiExpress className="icon express" size={50}/>
                <span>Express.js</span>
              </div>

            </div>
          </div>

          {/* Database */}
          <div className="skill-content">
            <h2>Database</h2>

            <div className="item">

              <div className="item-s">
                <SiMongodb className="icon mongo" size={50} />
                <span>MongoDB</span>
              </div>

              <div className="item-s">
                <SiMysql className="icon mysql" size={50}/>
                <span>MySQL</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skill;