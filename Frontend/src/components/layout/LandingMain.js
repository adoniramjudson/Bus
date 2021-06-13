import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const LandingMain = () => {
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
                className="btn btn-primary"
                value="Customer"
              />
            </Link>
            <Link to="/loginTravels">
              <input
                type="button"
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
