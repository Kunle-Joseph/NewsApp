// Components/NavBar1.js
import React from "react";
import "./NavBar1.css"

function NavBar1() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            News
          </a>
          <footer>
            -made by{" "}
            <a href="https://olakunle-joseph-portfolio.netlify.app" target="_blank">
              Olakunle Joseph
            </a>
          </footer>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
