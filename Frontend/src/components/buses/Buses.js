import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BusItem from "./BusItem";
import ClipLoader from "react-spinners/ClipLoader";
import { getbuses } from "../../actions/bus";
import { Link } from "react-router-dom";

const Buses = ({
  getbuses,
  bus: {
    buses: { Buses },
    loading,
  },
}) => {
  useEffect(() => {
    getbuses();
    console.log("checking");
  }, []);
  console.log(Buses);
  return (
    <div>
      {loading ? (
        <ClipLoader />
      ) : (
        <section className="landing">
          <div className="landing-inner">
            <Link className="btn btn-light my-1" to="/addbus">
              Add Bus
            </Link>
            <h1>Buses</h1>
            <div>
              {Buses.length > 0 ? (
                Buses.map((bus) => <BusItem key={bus.id} bus={bus} />)
              ) : (
                <h4> No buses Added</h4>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

Buses.propTypes = {
  getbuses: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bus: state.bus,
});

export default connect(mapStateToProps, { getbuses })(Buses);
