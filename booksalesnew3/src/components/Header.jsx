// src/components/Header.jsx
import { NavLink } from "react-router-dom";

const Header = () => {
  const getNavClass = ({ isActive }) =>
    `nav-link px-2 ${isActive ? "text-primary fw-bold" : "text-dark"}`;

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {/* Logo */}
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink
            to="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4">Book Store</span>
          </NavLink>
        </div>

        {/* Navigation */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" className={getNavClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className={getNavClass}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={getNavClass}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
