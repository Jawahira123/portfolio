import '../css/edu.css';
import bgImage from "../assets/bg.png";
import { FaGraduationCap } from "react-icons/fa";

function Edu()
{
    return(
        <>
        <div className="edu-body" style={{ backgroundImage: `url(${bgImage})` , height:'100vh' }}>
            <h1>Education</h1>
            <div className="education"  >
                
                <div className="timeline-item">
                         <div className="edu-icon">
                               <FaGraduationCap />
                        </div>
                        <div className="edu-icon">
                               <FaGraduationCap />
                        </div>
                  </div>
                <div className="degree">
                   <div className='mca'> 
                    <h4>2025-2027</h4>
                    <h2>Master of Computer Application</h2>
                    <p>A.V.C College Of Engineering,Mannampandal</p>
                   </div>
                

                  <div className='mca' >
                    <h4>2022-2025</h4>
                    <h2>Bachelor of Computer Application</h2>
                    <p>Vivekenanda College Of Arts and Science for Women, sirkali</p>
                  </div>
               </div>
                
            </div>
        </div>
        </>
    )
}
export default Edu;