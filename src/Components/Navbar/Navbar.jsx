import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MR from "../../Assets/pdf/Neeraj.singh.mahar.CV.pdf";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav" >
        <ul
        id="nav-menu"
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              className="nav-link home"
              href="#home"
              onClick={() => toggleNavList("#home")}
              // className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
            className="nav-link about"
              href="#about"
              onClick={() => toggleNavList("#about")}
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className="nav-link skills"
              href="#skills"
              onClick={() => toggleNavList("#skills")}
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className="nav-link projects"
              href="#projects"
              onClick={() => toggleNavList("#projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className="nav-link contact"
              href="#contact"
              onClick={() => toggleNavList("#contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className="nav-link resume"
              href={MR}
              onClick={toggleNavList}
              target="_blank"
              rel="noreferrer"
              id="resume-button-1"
              download={MR}
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          className="btn btn--icon nav__hamburger"
          type="button"
          onClick={toggleNavList}
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
