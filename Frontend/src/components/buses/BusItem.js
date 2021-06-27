import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BusItem = ({
  bus: {
    postedBy: { id },
    name,
    busNumber,
    from,
    to,
    busModel,
    departureTime,
    arrivalTime,
    fare,
  },
}) => {
  return (
    <div className="bus bg-dark">
      <div>
        <h2>
          {" "}
          <strong>{name}</strong>
        </h2>
        <h3>{busNumber} </h3>
        <h4>{busModel}</h4>
      </div>
      <div>
        <p>
          {from && (
            <span>
              {" "}
              From <br /> {from}{" "}
            </span>
          )}
        </p>
      </div>
      <div>
        <p>
          {to && (
            <span>
              {" "}
              To <br /> {to}{" "}
            </span>
          )}
        </p>
      </div>
      <div>
        <p>
          {departureTime && (
            <span>
              {" "}
              Departure Time <br /> {departureTime}{" "}
            </span>
          )}
        </p>
      </div>
      <div>
        <p>
          {arrivalTime && (
            <span>
              {" "}
              Arrival Time <br /> {arrivalTime}{" "}
            </span>
          )}
        </p>
      </div>
      <div>
        <p>
          {fare && (
            <span>
              {" "}
              Fare <br /> {fare}{" "}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

BusItem.propTypes = {
  bus: PropTypes.object.isRequired,
};

export default BusItem;
