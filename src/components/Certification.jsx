import { PiMedalDuotone } from "react-icons/pi";
import agenticAI from "../assets/agenticAI.png";
import excel from "../assets/excel.png";
import ibm from "../assets/ibm.png";
import php from "../assets/php.png";
import openai from "../assets/openai.png";
import shield from "../assets/shield.png";
import tableau1 from "../assets/tableau1.png";
import powerbi1 from "../assets/powerbi1.png"
import intern from "../assets/intern.png";
import certibg from "../assets/certibg.png";
import "../css/certifiction.css";

function Certification(){

    const agenticCertificate = () => {
    window.open("/certificates/agentic.pdf", "_blank");
    };

    const promptCertificate = () => {
    window.open("/certificates/prompt.pdf", "_blank");
    };

    const excelCertificate = () => {
    window.open("/certificates/excel.pdf", "_blank");
    };

    const phpCertificate = () => {
    window.open("/certificates/php.pdf", "_blank");
    };

    const openaiCertificate = () => {
    window.open("/certificates/openai.pdf", "_blank");
    };




    return(
       
       
        <div className="certi" >
           
              <div className="certi-head">
                <h1> <PiMedalDuotone /> Certifications</h1>
              </div>
              <p>A collection of certifications and training programs <br/> that demonstrate my continuous learning and professional growth</p>
               <h3>Online Certifications</h3>
            <div className="certi-content">
                 <div className="online-certi">
                    <img src={agenticAI} alt="img"/>
                    <h4>Introduction to Generative AI and Agents </h4>
                     <p>02 July 2026</p>
                            <div className="certi-btn">
                             <button onClick={agenticCertificate}>
                                   View Certificate
                            </button>
                            </div>
                </div>
                <div className="online-certi">
                     <img src={ibm} alt="img"/>
                    <h4>Prompt Engineering:Shaping Better AI Responses </h4>
                     <p>10 Dec 2025</p>
                            <div className="certi-btn">
                             <button onClick={promptCertificate}>
                                   View Certificate
                            </button>
                            </div>
                </div>
                <div className="online-certi">
                     <img src={excel} alt="img"/>
                    <h4>Introduction to MS Excel </h4>
                     <p>29 June 2026</p>
                            <div className="certi-btn">
                             <button onClick={excelCertificate}>
                                   View Certificate
                            </button>
                            </div>
                </div>
                <div className="online-certi">
                     <img src={php} alt="img"/>
                    <h4>PHP and MYSQL Training </h4>
                     <p>06 April 2026</p>
                            <div className="certi-btn">
                             <button onClick={phpCertificate}>
                                   View Certificate
                            </button>
                            </div>
                </div>
                <div className="online-certi">
                     <img src={openai} alt="img"/>
                    <h4>AI Foundation </h4>
                     <p>02 July 2026</p>
                            <div className="certi-btn">
                             <button onClick={openaiCertificate}>
                                   View Certificate
                            </button>
                            </div>
                </div>

            </div>

            


             <h3>Professional Training & Internship</h3>
             <div className="certi-content">
                 <div className="offline-certi">
                     <img src={tableau1} alt="img"/>
                     <h4>Tableau Data Visualization </h4>
                     <p>2025</p>
                     <h6>offline Training</h6>
                 </div>
                 <div className="offline-certi">
                     <img src={powerbi1} alt="img"/>
                    <h4>Power BI Data Visualizaion </h4>
                     <p>2025</p>
                     <h6>offline Training</h6>
                </div>
                <div className="offline-certi">
                     <img src={intern} alt="img"/>
                    <h4>Web Development Internship(Full Stack)</h4>
                     <p>06 April 2026</p>
                     <h6>Internship</h6>
                </div>
              </div>

            </div>
   

    )
}

export default Certification;