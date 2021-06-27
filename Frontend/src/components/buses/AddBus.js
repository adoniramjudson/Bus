import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addbus } from "../../actions/bus";
import { setAlert } from "../../actions/alert";

const AddBus = ({ addbus, alert }) => {
  console.log(alert);
  const [formData, setFormData] = useState({
    busNumber: "",
    name: "",
    from: "",
    to: "",
    busModel: "",
    seats: "",
    departureTime: "",
    arrivalTime: "",
    fare: "",
  });
  const {
    busNumber,
    name,
    from,
    to,
    busModel,
    seats,
    departureTime,
    arrivalTime,
    fare,
  } = formData;

  const data = alert[0];
  const { alertType } = data || {};
  // console.log(alertType, "hell");
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addbus(formData);
    // setAlert("Bus Added", "success");
  };

  React.useEffect(() => {
    if (alertType == "success") {
      return (window.location.href = "/travelsPage");
    }
  }, [alertType]);

  return (
    <Fragment>
      <div className="section-head">
        <section className="container">
          <h1 className="large text-primary">Bus Details</h1>
          <p className="lead">
            <i className="medium text-primary"></i> Add Your Bus
          </p>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Bus Number"
                name="busNumber"
                value={busNumber}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name of Travels"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter From City"
                name="from"
                value={from}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter To City"
                name="to"
                value={to}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Bus Model"
                name="busModel"
                value={busModel}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Seat Capacity"
                name="seats"
                value={seats}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Departure Time"
                name="departureTime"
                value={departureTime}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Arrival Time"
                name="arrivalTime"
                value={arrivalTime}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Fare"
                name="fare"
                value={fare}
                onChange={(e) => onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
            <Link className="btn btn-light my-1" to="/travelsPage">
              Go Back
            </Link>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

AddBus.propTypes = {
  addbus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // bus: state.bus,
  alert: state.alert,
});

export default connect(mapStateToProps, { addbus })(AddBus);
