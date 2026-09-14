
import "../css/project.css";
import lib from "../assets/lib.png";
import portfolio from "../assets/portfolio.png";
import attendance from "../assets/attendance.png";
import dashboard from "../assets/dashboard.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext";

function Project() {

    const { github } = useContext(PortfolioContext);

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const tableau =
        "https://public.tableau.com/app/profile/jawahira.sanofar.j/viz/salesdashboard_17776948783690/Dashboard1";

    return (
        <div className="project">
            <div className="project-body">

                <div className="project-head">
                    <h1>Projects</h1>
                </div>

                <div className="project-container">

                    {/* Library Management System */}
                    <div className="project-list">
                        <img src={lib} alt="Library Management System" />

                        <h4>Library Management System</h4>

                        <p>
                            A full-stack MERN application designed to simplify library
                            operations by managing books, students, and issue/return
                            records. It features secure authentication, efficient search
                            functionality, and an intuitive dashboard for seamless
                            library management.
                        </p>

                        <div className="techs">
                            <p id="react">React</p>
                            <p id="node">Node.js</p>
                            <p id="express">Express.js</p>
                            <p id="mongo">MongoDB</p>
                        </div>

                        <div className="project-btn">
                            <button onClick={github}>
                                <FaGithub className="git-icon" />
                                GitHub
                            </button>

                            <button
                                onClick={() =>
                                    openLink(
                                        "https://library-management-system-jziq.vercel.app/"
                                    )
                                }
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </button>
                        </div>
                    </div>


                    {/* Personal Portfolio */}
                    <div className="project-list">
                        <img src={portfolio} alt="Personal Portfolio Website" />

                        <h4>Personal Portfolio Website</h4>

                        <p>
                            A modern and responsive portfolio website built with React
                            to showcase my skills, projects, education, certifications,
                            and contact information. Designed with an interactive user
                            interface, smooth animations, and a clean layout to deliver
                            an engaging user experience.
                        </p>

                        <div className="techs">
                            <p id="react">React</p>
                            <p id="html">HTML</p>
                            <p id="css">CSS</p>
                        </div>

                        <div className="project-btn">
                            <button onClick={github}>
                                <FaGithub className="git-icon" />
                                GitHub
                            </button>

                            <button
                                onClick={() =>
                                    openLink("https://jawahira123.vercel.app/")
                                }
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </button>
                        </div>
                    </div>


                    {/* Attendance Tracker Pro */}
                    <div className="project-list">
                        <img src={attendance} alt="Attendance Tracker Pro" />

                        <h4>Attendance Tracker Pro</h4>

                        <p>
                            A modern React-based attendance management application
                            developed with the help of Antigravity. It helps students
                            track subject-wise attendance, calculate attendance
                            percentages, and monitor overall attendance through an
                            interactive dashboard with a clean, responsive, and
                            user-friendly interface.
                        </p>

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

                            <button
                                onClick={() =>
                                    openLink(
                                        "https://attendance-tracker-pro-two.vercel.app/"
                                    )
                                }
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </button>
                        </div>
                    </div>

                </div>


                <div className="project-container">

                    {/* Sales Dashboard */}
                    <div className="project-list">
                        <img
                            id="dash"
                            src={dashboard}
                            alt="Sales Dashboard"
                        />

                        <h4>Sales Dashboard</h4>

                        <p>
                            Developed an interactive Tableau dashboard to analyze sales
                            performance across regions, categories, and customer
                            segments. The dashboard provides insights into revenue
                            trends, profit distribution, and key business metrics using
                            dynamic charts and filters.
                        </p>

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

                            <button onClick={() => openLink(tableau)}>
                                <FaExternalLinkAlt />
                                Live Demo
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Project;
