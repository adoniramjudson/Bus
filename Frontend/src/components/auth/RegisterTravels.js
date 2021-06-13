import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { registerTravels } from "../../actions/auth";
import PropTypes from "prop-types";
import facebook from "./../../img/facebook.png";

const RegisterTravels = ({ setAlert, registerTravels, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    password2: "",
    travels: "",
    gst: "",
  });
  const { name, email, contact, password, password2, travels, gstin } =
    formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerTravels({ name, email, contact, password, travels, gstin });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/landing" />;
  }
  return (
    <Fragment>
      <div className="section-head">
        <section className="container">
          <p className="lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>

          <h1 className="large text-primary">Sign Up</h1>
          <div>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Travels Name"
                  name="travels"
                  value={travels}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Business Email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="GSTIN"
                  name="gstin"
                  value={gstin}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  name="contact"
                  value={contact}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </form>
          </div>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </section>
      </div>
    </Fragment>
  );
};

RegisterTravels.prototype = {
  setAlert: PropTypes.func.isRequired,
  registerTravels: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerTravels })(RegisterTravels);
