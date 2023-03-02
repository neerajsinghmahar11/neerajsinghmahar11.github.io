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
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div  id="projects" className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div  className="project-card">
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
              <h2 class="project-title" >Reliance Digital</h2>
              <p class="project-description">
                Clone of the Reliance Digital Online Shopping Store. We have tried to build the perfect clone of the website.. It's a team project Developed in 5 days.
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                  className="project-deployed-link"
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
                  <span type="button" className="project-github-link">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  className="project-card">
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
              <h2 class="project-title">Reliance Digital</h2>
              <p class="project-description">
                Clone of the Reliance Digital Online Shopping Store. We have tried to build the perfect clone of the website.. It's a team project Developed in 5 days.
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                  className="project-deployed-link"
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
                  <span type="button" className="project-github-link">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  className="project-card">
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
              <h2 class="project-title">Reliance Digital</h2>
              <p class="project-description">
                Clone of the Reliance Digital Online Shopping Store. We have tried to build the perfect clone of the website.. It's a team project Developed in 5 days.
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                className="project-deployed-link"
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
                  <span type="button" className="project-github-link">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  className="project-card">
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
              <h2 class="project-title">Overstock</h2>
              <p class="project-description">
                Overstock.com, Inc. is an American internet retailer selling primarily furniture, designer brands & home goods at the lowest prices online
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3/>
              </div>
              <div>
                <a
                className="project-deployed-link"
                  href="https://magnificent-salmiakki-223e6a.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/neerajsinghmahar11/-novel-salt-5032"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="project-github-link">
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
