import "./App.css";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [kg, setKg] = useState(0);
  const [lbs, setLbs] = useState("");

  let calLbs = (event) => {
    event.preventDefault();
    if (kg === 0) {
      alert("Please enter kg");
    } else {
      let lbs = kg * 2.20462;
      setLbs(lbs.toFixed(1));
    }
  };

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
  
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type="number"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>

      <div className="container2">
        <h2 className="right">kg to lbs</h2>
        <form onSubmit={calLbs}>
          <div>
            <label>kg</label>
            <input
              type="number"
              value={kg}
              onChange={(e) => setKg(e.target.value)}
            />
          </div>
          <div>
            <button className="btnK" type="submit">
              Submit
            </button>
            <button className="btnK btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
        </form>
        <div className="right">
          <h3>{kg} kg is {lbs} lbs</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
