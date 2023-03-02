import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div  id="skills" className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div  className="skills-card">
          <div>
            <SiJavascript class="skills-card-img" />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div>
            <SiHtml5 class="skills-card-img" />
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div>
            <DiCss3 class="skills-card-img" />
            <h5 class="skills-card-name">CSS</h5>
          </div>
          <div>
            <FaReact class="skills-card-img" />
            <h5 class="skills-card-name">React</h5>
          </div>
          <div>
            <FaNodeJs class="skills-card-img" />
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div>
            <DiMongodb class="skills-card-img" />
            <h5 class="skills-card-name">MongoDb</h5>
          </div>

          <div>
            <SiExpress class="skills-card-img" />
            <h5 class="skills-card-name">Express</h5>
          </div>

          <div>
            <SiMaterialui class="skills-card-img" />
            <h5 class="skills-card-name">Material Ui</h5>
          </div>
          <div>
            <BsBootstrap class="skills-card-img" />
            <h5 class="skills-card-name">Bootstrap</h5>
          </div>
          <div>
            <SiTailwindcss class="skills-card-img" />
            <h5 class="skills-card-name">Tailwind CSS</h5>
          </div>
          <div>
            <SiNetlify class="skills-card-img" />
            <h5 class="skills-card-name">Netlify</h5>
          </div>
          <div>
            <VscGithub class="skills-card-img" />
            <h5 class="skills-card-name">Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
