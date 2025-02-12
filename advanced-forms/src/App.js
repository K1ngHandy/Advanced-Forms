import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    country: "",
    language: "",
    accept: false,
    spam: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Sending data to server...", values);
  };

  const handleChange = (evt) => {
    let { type, checked, name, value } = evt.target;
    if (type === "checkbox") value = checked;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <h2>Dropdowns, Checkboxes, & Radio Buttons</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Country
          <select name="country" onChange={handleChange} value={values.country}>
            <option value="">--select country--</option>
            <option value="ES">Spain</option>
            <option value="US">USA</option>
          </select>
        </label>
        <label>
          <input
            checked={values.language === "javascript"}
            onChange={handleChange}
            name="language"
            value="javascript"
            type="radio"
          />
          Javascript
        </label>
        <label>
          <input
            checked={values.language === "rust"}
            onChange={handleChange}
            name="language"
            value="rust"
            type="radio"
          />
          Rust
        </label>
        <label>
          <input
            checked={values.accept}
            onChange={handleChange}
            name="accept"
            type="checkbox"
          />
          Agree terms
        </label>
        <label>
          <input
            checked={values.spam}
            onChange={handleChange}
            name="spam"
            type="checkbox"
          />
          Send me emails
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
