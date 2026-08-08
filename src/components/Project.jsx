import "../css/project.css";
import lib from "../assets/lib.png"
import projectbg from "../assets/projectbg.png";
import portfolio from "../assets/portfolio.png";
import attendance from "../assets/attendance.png";
import dashboard from "../assets/dashboard.png";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext";

function Project(){

     const { github} = useContext(PortfolioContext);

     const tableau=()=>{
        window.open("https://public.tableau.com/app/profile/jawahira.sanofar.j/viz/salesdashboard_17776948783690/Dashboard1","-blank");
     };


    return(
        <div className="project">
            <div className="project-body">
                <div className="project-head">
                <h1>Projects</h1>
                </div>
                <div className="project-container">
                    <div className="project-list">
                        <img src={lib} alt="img"/>
                        <h4>Library Management System</h4>
                        <p>A full-stack MERN application designed to simplify library operations by
                             managing books, students, and issue/return records.
                             It features secure authentication, efficient search
                              functionality, and an intuitive dashboard for seamless library management.</p>
                        <div className="techs">
                            <p id="react">React</p>
                            <p id="node">node.js</p>
                            <p id="express">Express.js</p>
                            <p id="mongo">MongoDB</p>
                        </div>
                         <div className="project-btn">
                            <button onClick={github}>
                               <FaGithub className="git-icon" />
                                  GitHub
                            </button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                     <div className="project-list">
                        <img src={portfolio} alt="img"/>
                        <h4>Personal Portfolio Website</h4>
                        <p>A modern and responsive portfolio website built with React to showcase my skills, projects, education, certifications, and contact information. Designed with an interactive 
                            user interface, smooth animations, and a clean layout to deliver an engaging user experience.</p>
                        <div className="techs">
                            <p id="react">React</p>
                            <p id="html"> HTML</p>
                            <p id="css">CSS</p>
                        </div>
                         <div className="project-btn">
                           <button onClick={github}>
                               <FaGithub className="git-icon" />
                                  GitHub
                            </button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                     <div className="project-list">
                        <img src={attendance} alt="img"/>
                        <h4>Attendance Tracker Pro </h4>
                        <p>A modern React-based attendance management application designed to 
                            help students track subject-wise attendance, calculate attendance percentages, 
                            and monitor overall attendance through an interactive dashboard with a clean, responsive
                            , and user-friendly interface.</p>
                            <div className="techs">
                            <p id="react">React</p>
                            <p id="node">JavaScript</p>
                            <p id="html">HTML</p>
                            <p id="css">CSS</p>
                        </div>
                        <div className="project-btn">
                           <button onClick={github}>
                               <FaGithub className="git-icon" />
                                  GitHub
                            </button>
                            <button >Live Demo</button>
                        </div>
                    </div>
                    
                </div>
                <div className="project-container">
                    <div className="project-list">
                        <img id="dash" src={dashboard} alt="img"/>
                        <h4>Sales Dashboard</h4>
                        <p>Developed an interactive Tableau dashboard to analyze sales performance across regions,
                             categories, and customer segments. The dashboard provides insights into revenue trends, 
                             profit distribution,and key business metrics using dynamic charts and filters.</p>
                            <div className="techs">
                            <p id="react">Tableau</p>
                            <p id="node">Analytics</p>
                            <p id="html">Dashboard</p>
                            </div>
                        <div className="project-btn">
                           <button onClick={github}>
                               <FaGithub className="git-icon" />
                                  GitHub
                            </button>
                            <button onClick={tableau}>Live Demo</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Project;