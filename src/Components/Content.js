import React from "react";

const Content = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h2>About Us</h2>
            <h5>Our Logo:</h5>
            <div className="imgres">
              <img src="https://allinoneplace.ml/img/logofullt.png" alt="logo" className="imgres" />
            </div>
            <p>
              A Website Which Consists Of Almost All Features Required By An
              User
            </p>
            <h3 className="mt-4">Some Links</h3>
            <p>Our Most Popular Features:</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>LATEST UPLOADS</h2>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>
              Added about.js,content.js,home.js,service.js in src folder
            </p>

            <h2 className="mt-5">TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2020</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
