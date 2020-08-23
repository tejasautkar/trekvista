import React from "react";

import "../Components/SocialMedia.css";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import whatsapp from "../Images/whatsapp.png";

function SocialMedia() {
  return (
    <div class="icon-bar">


      <a
        href="https://wa.me/917021479220?text=Hello%20I%20wanted%20to%20enquire%20about%20treks"
        
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
        
      >
        <img className=" icon" src={whatsapp} alt="trekvista whatsapp" />
      </a>

      <a
        href="https://facebook.com/trekvista"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
       
      >
        <img className=" icon " src={facebook} alt="trekvista facebook" />
      </a>

      <a
        href="https://www.linkedin.com/company/trekvista"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
    
      >
        <img className=" icon " src={linkedin} alt="trekvista linkedin" />
      </a>

      <a
        href="https://twitter.com/trekvista"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
      
      >
        <img className=" icon " src={twitter} alt="trekvista twitter" />
      </a>

      <a
        href="https://instagram.com/trekvista"
        target="_blank"
        rel="noopener noreferrer"
        class="instagram"
        
      >
        <img className=" icon" src={instagram} alt="trekvista instagram" />
      </a>

  
    </div>
  );
}

export default SocialMedia;
