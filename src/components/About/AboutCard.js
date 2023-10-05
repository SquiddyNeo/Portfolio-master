import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Type2 from "./Type";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <div style={{ padding: 20, textAlign: "left" }}>
                <p className="about-activity">
                  My name is Thai-Dion Virginia i have been a self taught Full stack developer and have been doing web development for about 2 years now 
                  i am currently a freelancer capable of Creating a website or webapp that would fit your vision and is conform to modern Standards that will 
                  make your company or store look Professional and clean 
                  if you have any more question feel free to <link href="/contact"contact></link> me  
                
                </p>
                <Type2 /> 
              </div>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </p>
          
              
            
        
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make an impact everywhere!"{" "}
          </p>
          <footer className="blockquote-footer">Thai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
