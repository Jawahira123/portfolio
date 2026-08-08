import "../css/contact.css";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PortfolioContext } from "../context/portfolioContext";


function Contact(){


     const { github, linkedin, email } = useContext(PortfolioContext);

     const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs.sendForm(
        "service_4dr29ss",
        "template_ji4aggh",
        form.current,
        "ul3RlUwX0DGFPTykM"
    )

    .then(() => {

        setLoading(false);
        setStatus("success");

        form.current.reset();

    })

    .catch(() => {

        setLoading(false);
        setStatus("error");

    });

};


    return(
        <div className="contact-body">
            <h1>Get In Touch</h1>
            <p>Actively looking for Frontend and MERN Stack roles. <br/>Have a project or role in mind? Drop me a message and I'll reply within 24 hours</p>
            <div className="contact">
                <div className="icons">
                    <button className="icon2" onClick={email}><CiMail size={40} /></button>
                    <IoLocationSharp className="icon2" size={50}/>
                    <button className="icon2" onClick={linkedin}><TbBrandLinkedin size={40} /></button>
                    <button className="icon2" onClick={github}><FaGithub size={40} /></button>
        
       

                </div>
                <div className="contact-info">
                <p>jawahirasanofar@gmail.com</p>
                <p>Mayiladythurai,Tamil Nadu,India</p>
                <p>linkedin.com/in/jawahira-sanofar-20b08539b/</p>
                <p>github.com/Jawahira123</p>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your Name" required/>
                        <input type="email" name="user_email" placeholder="Your Email" required/>
                        <textarea  name="message"  placeholder="Your Message"  maxLength={200}  required></textarea>
                        <button type="submit"> {loading ? "Sending..." : "Send Message"} </button>
                            {status === "success" && (
                                 <p style={{ color: "#22C55E", marginTop: "10px" }}>
                                ✔ Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p style={{ color: "#EF4444", marginTop: "10px" }}>
                                 ✖ Failed to send message. Please try again.
                                 </p>
                            )}                
                        </form>

                </div>

            </div>
            <div className="available">
                <h5>Available for work</h5>
                <p>Actively looking for junior frontend / full-stack roles and internships. open to remote.</p>
            </div>
        </div>
    )
}

export default Contact;