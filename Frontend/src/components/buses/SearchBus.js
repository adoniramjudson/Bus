import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { searchbuses } from "../../actions/bus";
import BusItem from "./BusItem";

const SearchBus = ({
  searchbuses,
  bus: {
    buses: { buses },
    loading,
  },
}) => {
  useEffect(() => {
    let bus = JSON.parse(localStorage.getItem("formData"));
    console.log(bus);
    if (bus) {
      searchbuses(bus.formData);
    } else {
      searchbuses();
    }
  }, [searchbuses]);

  return (
    <div>
      {loading ? (
        <ClipLoader />
      ) : (
        <section className="landing">
          <div className="landing-inner">
            <h1>Available Buses</h1>
            <div>
              {buses && buses.length > 0 ? (
                buses.map((bus) => <BusItem key={bus.id} bus={bus} />)
              ) : (
                <h4> No buses available</h4>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
SearchBus.propTypes = {
  searchbuses: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bus: state.bus,
});

export default connect(mapStateToProps, { searchbuses })(SearchBus);
