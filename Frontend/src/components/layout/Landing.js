import React, { useState } from "react";

const Landing = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const { from, to, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
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
                name="password"
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

export default Landing;
