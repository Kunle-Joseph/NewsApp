// Components/NavBar2.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar2.css";

function NavBar2() {

  const location = useLocation(); // Get the current route path

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : ""; // Add 'active-link' class if path matches
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg 
				bg-body-tertiary"
      >
        <div className="container-fluid ">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/")}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/entertainment")}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/technology")}`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/sports")}`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/business")}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/health")}`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/science")}`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/Gaming")}`}
                  to={`/Gaming`}
                >
                  Gaming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;
