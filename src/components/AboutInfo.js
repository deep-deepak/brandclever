import React from "react";
import "../css/tailwind.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className="about_us_section">
      <div className="">
        <div className="two-columns aboutInfo-section">
          <div className="about-content-columns about_project">
            <div className="about-content">
              <Container>
                <h2 class="text-blue-600">
                  Architecting Ingenuity, Forging Futures, Delivering Technological Eminence
                </h2>
                <p>
                  At Brandclever, we're not merely envisioning the future we're actively shaping it alongside our team of over 250+ pioneers committed to digital excellence. Fueled by our deep-rooted expertise in technology and relentless pursuit of innovation, we don't just offer IT solutions we set industry standards.<Link to="https://brandclever.in/manishverma/" style={{textDecoration:"none",fontWeight:"700" ,color:"#509e53"}} target="_blank"> Team Manish Verma</Link> an unwavering dedication to unmatched quality, we don't just provide services we forge transformative partnerships that propel businesses to the forefront. Our aim is not just to meet but to exceed your expectations, driving growth and efficiency with every revolutionary strategy, ensuring your dominance in the digital realm. Opt for Brandclever, where every IT challenge meets an ingenious solution, <Link to="https://brandclever.in/manishverma/" style={{textDecoration:"none",fontWeight:"700",color:"#509e53"}} target="_blank">ceo manish verma </Link>every business milestone marks a leap towards legendary success
                </p>

              </Container>
            </div>
          </div>
          {/* <div className='about-img-columns'>
                    <div className='image-sec'>
                    <div className='experience_crown'>    
                           <img src={imgAbout[1]} alt='' />
                            <h4>5+</h4>
                            <p>Years of Experience</p>
                        </div>
                        <img src={imgAbout[0]} alt='' />  
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  )
};

export default AboutInfo;
