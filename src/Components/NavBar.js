import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Our Features
              </a>
              <a className="nav-link" href="#">
                Games
              </a>
              <a className="nav-link" href="#">
                Tools
              </a>
              <a className="nav-link" href="#">
                Contact Us
              </a>
              <a className="nav-link" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
