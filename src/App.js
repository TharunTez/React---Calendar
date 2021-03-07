import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [prevValue, setPrevValue] = useState(0);
  const [value, setValue] = useState(0);
  const [action, setAction] = useState(null);

  const setTotalValue = e => {
    if ((!value && !action) || (prevValue && !value && action)) {
      setValue(e);
      return;
    }
    if (value) {
      setValue(`${value}${e}`);
      return;
    }
  };

  const setCalcAction = e => {
    setPrevValue(prevValue ? prevValue + value : value);
    setValue(0);
    setAction(e);
  };

  const getResult = () => {
    if (value && prevValue && action) {
      if (action === "add") {
        console.log(prevValue, value);
        setValue(parseInt(prevValue) + parseInt(value));
        setPrevValue(0);
      } else if (action === "subtract") {
        console.log(prevValue, value);
        setValue(prevValue - value);
        setPrevValue(0);
      } else if (action === "multiply") {
        setValue(prevValue * value);
        setPrevValue(0);
      } else if (action === "divide") {
        setValue(prevValue / value);
        setPrevValue(0);
      } else if (action === "Clear") {
        setPrevValue(0);
        setValue(0);
        setAction(null);
      }
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <p>{value}</p>
      <div>
        <div className="row">
          <span>
            <button onClick={e => setCalcAction("Clear")}>C</button>
            <button />
            <button onClick={e => setCalcAction("%")}>%</button>
            <button onClick={e => setCalcAction("divide")}>/</button>
          </span>
        </div>
        <div>
          <span>
            <button onClick={e => setTotalValue(7)}>7</button>
            <button onClick={e => setTotalValue(8)}>8</button>
            <button onClick={e => setTotalValue(9)}>9</button>
            <button onClick={e => setCalcAction("multiply")}>*</button>
          </span>
        </div>
        <div>
          <span>
            <button onClick={e => setTotalValue(4)}>4</button>
            <button onClick={e => setTotalValue(5)}>5</button>
            <button onClick={e => setTotalValue(6)}>6</button>
            <button onClick={e => setCalcAction("subtract")}>-</button>
          </span>
        </div>
        <div>
          <span>
            <button onClick={e => setTotalValue(1)}>1</button>
            <button onClick={e => setTotalValue(2)}>2</button>
            <button onClick={e => setTotalValue(3)}>3</button>
            <button onClick={e => setCalcAction("add")}>+</button>
          </span>
        </div>
        <div>
          <span>
            <button onClick={e => setTotalValue(0)}>0</button>
            <button />
            <button onClick={e => setTotalValue(".")}>.</button>
            <button onClick={getResult}>=</button>
          </span>
        </div>
      </div>
    </div>
  );
}
