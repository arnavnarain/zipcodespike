import React, { useState } from "react";
import "./App.css";

function App() {
  const initialCityState = { city: "", state: "" };
  const [cityState] = useState(initialCityState);
  const [zipcode] = useState("");
  return (
    <div className="App">
      <h1>City/State Lookup Tool</h1>
      <form action="" className="form-data">
        <label htmlFor="zip">Type Zip Code Here</label>
        <input
          className="zip"
          value={zipcode}
          placeholder="XXXXX"
          type="text"
          name="zip"
          id="zip"
        />
        <label htmlFor="city">City</label>
        <input
          className={`city`}
          value={cityState.city}
          type="text"
          name="city"
          disabled
          id="city"
        />
        <label htmlFor="state">State</label>
        <input
          className={`state`}
          value={cityState.state}
          type="text"
          name="state"
          disabled
          id="state"
        />
      </form>
      <pre>
        <code>
          {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })}
        </code>
      </pre>
    </div>
  );
}

export default App;