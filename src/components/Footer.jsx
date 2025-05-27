import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 mt-5 border-top footer">
        {" "}
        <div className="col mb-3">
          {" "}
          <Link
            to="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            aria-label="Bootstrap"
          >
            <img
              src={require(`../image/Screenshot 2025-05-27 154923.png`)}
              alt="ILCE Logo"
              style={{
                width: "77%",
                aspectRatio: "inherit",
              }}
            />
          </Link>{" "}
          <h2>ILCC 2025</h2> <p>Indian Lean Construction Conference 2025</p>
        </div>{" "}
        <div className="col mb-3"></div>{" "}
        <div className="col mb-3">
          {" "}
          <h5>Quick Link</h5>{" "}
          <ul className="nav flex-column">
            {" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Home
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/aboutUs" className="nav-link p-0 text-body-secondary">
                About Us
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/registration" className="nav-link p-0 text-body-secondary">
                Registration
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/contactUs" className="nav-link p-0 text-body-secondary">
                Contact Us
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                IIT Tirupati
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Civil and Environmental Engineering Department, IIT Tirupati
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="col mb-3">
            {" "}
        </div>
        <div className="col mb-3">
          {" "}
          <h5>Social Links</h5>{" "}
          <ul className="nav flex-column">
            {" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                <Instagram /> Instagram
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                <Youtube /> YouTube
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                <Facebook /> Facebook
              </Link>
            </li>{" "}
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                <Linkedin /> LinkedIn
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </footer>
    </>
  );
};

export default Footer;
