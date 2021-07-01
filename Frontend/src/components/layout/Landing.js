import React, { useState } from "react";
import { searchbuses } from "../../actions/bus";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { withRouter } from "react-router-dom";

const Landing = ({ searchbuses, history }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const { from, to, date } = formData;
  localStorage.setItem("formData", JSON.stringify({ formData }));
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    searchbuses(formData, history);
    console.log("Success");
  };

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="large">Welcome to Atlantic Travels</h1>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter City"
                name="from"
                value={from}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter City"
                name="to"
                value={to}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="Date"
                placeholder="Selct the date"
                name="date"
                value={date}
                onChange={(e) => onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes = {
  setAlert: PropTypes.func.isRequired,
  searchbuses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bus: state.bus,
  // alert: state.alert,
});
export default connect(mapStateToProps, { setAlert, searchbuses })(
  withRouter(Landing)
);
