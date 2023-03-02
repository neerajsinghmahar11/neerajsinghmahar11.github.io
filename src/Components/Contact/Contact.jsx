import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div id="contact" className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
          id="contact-linkedin"
            href="https://www.linkedin.com/in/neeraj-singh-mahar-a81b78210/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            id="contact-github"
            href="https://github.com/neerajsinghmahar11"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
             
            href="mailto:neeraj.singh.mahar11@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail />
            <p id="contact-email" style={{display:"none"}}>neeraj.singh.mahar11@gmail.com</p>
          </a>
          <a

            href="https://www.instagram.com/the_neeraj_mahar/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a>
          <a  href="tel:+918860789405" target="_blank" rel="noreferrer">
          <div  style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)",justifyContent:"center",alignItems:"center"}}>  <BsFillTelephoneFill   />
            </div>
          </a>
            <p style={{display:"none"}} id="contact-phone">+918860789405</p>
        </div>
      </div>
    </>
  );
};
