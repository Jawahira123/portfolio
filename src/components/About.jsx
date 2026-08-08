import "../css/about.css"
import profile from "../assets/profile.png"
import profilebg from "../assets/profilebg.png";
import { GoPersonFill } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function About()
{
    return(
        <>
        <div className="about-body">
            <div className="about-container">
                <div className="about-left">
                    <h1>Profile</h1>
                    <h4>Passionate about building responsive, user-centric, and
                         innovative digital solutions.</h4><br/>
                    <p>Hi, I'm Jawahira Sanofar — a MERN Stack Developer passionate about building modern, scalable, and user-centric web applications using React, Node.js, Express.js, MongoDB, and Tableau. I enjoy creating responsive solutions that combine clean architecture, intuitive user experiences, and maintainable code.</p><br/>

                    <p>My work includes projects such as a Library Management System, Attendance Tracker Pro, Tableau Sales Dashboard, and a Personal Portfolio Website. I continuously explore new technologies, solve real-world problems, and strive to build digital solutions that create meaningful value for users and businesses.</p>
                 </div>
                 <div className="about-right">
                    <img src={profile} atl="profile"/>
                 
                </div>
            </div>
              <div className="about-cards">

    <div className="card">
        <div className="card-title">
            <GoPersonFill className="card-icon" />
            <h5>Name</h5>
        </div>
        <p>Jawahira Sanofar</p>
    </div>

    <div className="card">
        <div className="card-title">
            <FaGraduationCap className="card-icon" />
            <h5>Degree</h5>
        </div>
        <p>MCA</p>
    </div>

    <div className="card">
        <div className="card-title">
            <IoLocationSharp className="card-icon" />
            <h5>Location</h5>
        </div>
        <p>Mayiladuthurai,<br />Tamil Nadu</p>
    </div>

    <div className="card">
        <div className="card-title">
            <MdEmail className="card-icon" />
            <h5>E-Mail</h5>
        </div>
        <p>jawahirasanofar@gmail.com</p>
    </div>

</div>
        </div>
        </>
    )
}

export default About;