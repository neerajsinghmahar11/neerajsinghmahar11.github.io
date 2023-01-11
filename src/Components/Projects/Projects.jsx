import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3
} from "react-icons/si";
import Reliance from "../../Assets/images/Reliance.png";
import Overstock from "../../Assets/images/Overstock.png";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Reliance}
                  alt="Nordstrom"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Reliance Digital</h2>
              <p>
                Clone of the Reliance Digital Online Shopping Store. We have tried to build the perfect clone of the website.. It's a team project Developed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://leafy-sunshine-c4ab0f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/GauravShirkeGS/ordinary-finger-7814"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Overstock}
                  alt="
                  CloneUrbanOutfitters"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Overstock</h2>
              <p>
                Overstock.com, Inc. is an American internet retailer selling primarily furniture, designer brands & home goods at the lowest prices online
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://leafy-sunshine-c4ab0f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/GauravShirkeGS/ordinary-finger-7814"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
