import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiNetlify,
  SiJavascript,
  SiChakraui,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript} from "react-icons/tb";

export const Techstacks = () => {
  return (
    <>
      <div id="skills" className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="skills-card">
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
            <SiRedux class="skills-card-img" />
            <h5 class="skills-card-name">Redux</h5>
          </div>
          <div>
            <TbBrandTypescript class="skills-card-img" />
            <h5 class="skills-card-name">Typescript</h5>
          </div>
          <div>
            <TbBrandNextjs class="skills-card-img" />
            <h5 class="skills-card-name">Next.js</h5>
          </div>
          <div>
            <h2 class="skills-card-img" >MI</h2>
            <h5 class="skills-card-name">Material Ui</h5>
          </div>
          <div>
            <SiChakraui class="skills-card-img" />
            <h5 class="skills-card-name">Chakra Ui</h5>
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
