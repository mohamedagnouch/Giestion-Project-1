import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link id="Logo" className="navbar-brand " to="/">
            <i className="fa-solid fa-database"></i> Contact Stagiare
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-house"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  <i className="fa-sharp fa-solid fa-circle-info"></i> Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                >
                  <i className="fa-solid fa-address-book"></i> Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/Filières "
                >
                  <i className="fa-solid fa-book"></i>
                  {" "}
                  Filières
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-outline-dark w-25" to="/user/add">
          <i className="fa-solid fa-plus"></i> Add Stagaire
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
