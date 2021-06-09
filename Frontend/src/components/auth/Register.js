import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import facebook from "./../../img/facebook.png";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    password2: "",
    travels: "",
    gst: "",
  });
  const [person, setPerson] = useState(null);
  const { name, email, number, password, password2, travels, gst } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.getAttribute("name")]: e.target.value,
    });
  const handleChange = (e) => {
    // {[e.target.checked] : e.target.value}
    setPerson(e.target.value);
    //console.log({ [e.target.checked]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, number, travels, gst });
    }
  };

  return (
    <Fragment>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>

      <h1 className="large text-primary">Sign Up</h1>
      <label for="cust">Customer</label>
      <br></br>
      <input
        type="radio"
        id="cust"
        name="type"
        value="cust"
        onChange={handleChange}
      ></input>
      <label for="travels">Travel Agency</label>
      <br></br>

      <input
        type="radio"
        id="travels"
        name="type"
        value="travels"
        onChange={handleChange}
      ></input>
      <div>
        {person == "cust" ? (
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
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Mobile Number"
                name="number"
                value={number}
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
            <input type="submit" className="btn btn-primary" value="Register" />{" "}
            <br />
            <div>
              {" "}
              Login with <br />
              <button className="btn social-acc-box" id="newFbId">
                <div className="facebook-logo">
                  <img src={facebook} width="5" />
                </div>
                <div className="facebook-text">Facebook</div>
              </button>
              {/* <input type="submit" className="btn btn-primary" value="Facebook" /> */}
            </div>
          </form>
        ) : (
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
                name="gst"
                value={gst}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Mobile Number"
                name="number"
                value={number}
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
          </form>
        )}
      </div>

      <p className="my-1">
        Already have an account? <Link to="login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
