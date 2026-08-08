import { useEffect, useState } from "react";
import "../css/navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="nav-body">

            <div className="logo">
                <span className="initial">JS</span>
                <span className="fullname">Jawahira Sanofar</span>
            </div>

            <div className="navbar">

                <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                >
                    Home
                </a>

                <a
                    href="#profile"
                    className={activeSection === "profile" ? "active" : ""}
                >
                    Profile
                </a>

                <a
                    href="#education"
                    className={activeSection === "education" ? "active" : ""}
                >
                    Education
                </a>

                <a
                    href="#skills"
                    className={activeSection === "skills" ? "active" : ""}
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className={activeSection === "projects" ? "active" : ""}
                >
                    Projects
                </a>

                <a
                    href="#certifications"
                    className={activeSection === "certifications" ? "active" : ""}
                >
                    Certifications
                </a>

                <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                >
                    Contact
                </a>

            </div>

        </div>
    );
}

export default Navbar;