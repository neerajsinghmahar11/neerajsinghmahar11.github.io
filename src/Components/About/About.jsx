import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import MR from "../../Assets/pdf/Neeraj.singh.mahar.CV.pdf";
export const About = () => {
  return (
    <>
      <div id="about" className="about section">
        <h1>About</h1>
        <h1 data-aos="fade-right">
          Hi, I am <span id="user-detail-name" className="about__name">Neeraj Singh Mahar</span>
        </h1>
        <Type />
        <p id="user-detail-intro" className="about__desc" data-aos="fade-right">
        Adaptable and accountable team player, driven to deliver the best in any situation. A passionate Full Stack Developer with proficiency in HTML, CSS, MongoDB, React, Data Structures and Algorithms. Looking forward to utilizing current skillset and experience of working on projects to create a mark in the software industry and achieve organizational goals.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/neerajsinghmahar11"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            id="contact-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:neeraj.singh.mahar11@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-email"
            
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918860789405"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-phone"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/neeraj-singh-mahar-a81b78210/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href={MR}
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="resume-button-2"
            download={MR}
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.google.com/maps/place/Bhajanpura,+Shahdara,+Delhi/@28.70005,77.2560945,16.03z/data=!4m5!3m4!1s0x390cfc3e6e1a2eaf:0x6e7d55f9d5d972d!8m2!3d28.7004534!4d77.2591938"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
