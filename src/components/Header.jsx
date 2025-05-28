import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ width: "25%" }}>
              <img
                src={require(`../image/Screenshot 2025-05-27 154923.png`)}
                alt="ILCE Logo"
                style={{
                  width: "77%",
                  aspectRatio: "inherit",
                }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse links" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/about">
                    About ILCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/organizers">
                    Organizers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/schedule">
                    Schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/submission">
                    Submission
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/registration">
                    Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/sponsors">
                    Sponsors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLinks active" to="/contactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
