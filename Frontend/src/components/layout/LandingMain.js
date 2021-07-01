import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const LandingMain = () => {
  // onclick = (value) => {
  //   console.log(value);
  //   localStorage.setItem("loginType", value);
  //};
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="large">Welcome to Atlantic Travels</h1>
          <br />
          <h3 className="medium">I'm </h3>
          <form className="form">
            <Link to="/login">
              <input
                type="button"
                // onClick={(e) => onclick("customer")}
                className="btn btn-primary"
                value="Customer"
              />
            </Link>
            <Link to="/loginTravels">
              <input
                type="button"
                // onClick={onclick("travel")}
                className="btn btn-primary"
                value="Travel Agency"
              />
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingMain;
