
import developer from "../assets/developer.png"; 
import "../css/hero.css"
import herobg from "../assets/herobg.png";
import { FiDownload } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedin } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext";
import { GoProject } from "react-icons/go";
import { PiCertificateFill } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";



function Hero(){

    const { github, linkedin, email } = useContext(PortfolioContext);

    const contactpage=()=>{
         document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
         });
    }

    const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/certificates/jawaResume.pdf";
    link.download = "Jawahira_Sanofar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   };


    return(
        <>
       <div className="hero">
        <div className="hero-body">
            <div className="hero-left">
                <h3>Hi,I'm</h3>
                <h1>Jawahira Sanofar</h1>
                <h2> MERN Stack developer</h2>
                <p>
                    I build responsive and user-friendly web applications

                    using React, Node.js, Express.js, and MongoDB. Passionate about creating modern, efficient, and intuitive web experiences..
                </p>
            </div>
            <div className="hero-right">
                <img src={developer} alt="Programmer Girl" />
            </div>
           

                
        </div>
     <div className="hero-btn">
                <button id="btn1" onClick={downloadResume}>Download Resume <FiDownload size={19}/></button>
                <button id="btn2" onClick={contactpage}>Contact <GoArrowRight size={30}/> </button>
     </div>
     <div className="hero-icon">
        <button onClick={github}><VscGithub size={40} color="white" /></button>
        <button onClick={linkedin}><TbBrandLinkedin size={40} color="white"/></button>
        <button onClick={email}><CiMail size={40} color="white"/></button>
     </div>
     <div className="hero-card">

          <div className="hero-card1">
           
            <h2>4+</h2>
            <p>Completed Projects</p>
        </div>

        <div className="hero-card1">
            
            <h2>7+</h2>
            <p>Professional Certifications</p>
        </div>

        <div className="hero-card1">
            
            <h2>10+</h2>
            <p>Technologies</p>
        </div>

        <div className="hero-card1">
            <h2>Open</h2>
            <p>To Work</p>
        </div>

        </div>
    </div> 

    
     </>
    )
}

export default Hero;