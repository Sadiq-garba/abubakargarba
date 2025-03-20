import { Nav } from "../models/index";
import sound from "../sounds/modern.wav";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//import { useLocation } from "react-router-dom";

const Navbar = ({ logo, links }: Nav) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleRoute = (link: string) => {
    if (link === "/contact") {
      navigate(link);
      new Audio(sound).play();
    } else if (link === "/") {
      navigate(link);
      new Audio(sound).play();
    } else if (link === "/projects") {
      navigate(link);
      new Audio(sound).play();
    }
  };

  const handleNavigate = () => {
    new Audio(sound).play();
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top p-3"
      style={{ backgroundColor: "rgb(105, 148, 234)" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            handleNavigate();
          }}
        >
          {logo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <div className={`bar top-bar ${isOpen ? "rotate-down" : ""}`}></div>
            <div
              className={`bar bottom-bar ${isOpen ? "rotate-up" : ""}`}
            ></div>
          </button>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${
                    location.pathname === link.path ? "active-link" : "nav-link"
                  }`}
                  onClick={() => handleRoute(link.path)}
                  aria-current="page"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
