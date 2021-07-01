import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ isAuthenticated, loading }) => {
  const customer = (
    <ul>
      <li>
        <Link to="/addbus">Developers</Link>
      </li>
      {/* <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li> */}
    </ul>
  );

  const travel = (
    <ul>
      <li>
        <Link to="/addbus">Developers Travels</Link>
      </li>
      {/* <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li> */}
    </ul>
  );
  const authLinks = { customer, travel };
  console.log("gdfd");
  const guestLinks = (
    <ul>
      {/* <li>
        <Link to="/profiles">Developers</Link>
      </li> */}
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        {" "}
        Hello
        {/* <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link> */}
      </h1>
      {!loading && (
        <Fragment>
          {" "}
          {!isAuthenticated
            ? window.location.href.split("/").slice(-1) == "login"
              ? authLinks.customer
              : authLinks.travel
            : guestLinks}
        </Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
