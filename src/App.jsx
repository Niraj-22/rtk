import "./App.css";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";
const App = () => {
  const { counterVal } = useSelector((state) => state.counter);

  const inputElement = useRef(null);
  // console.log(counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.inc());
  };
  const handleDecrement = () => {
    dispatch(counterActions.dec());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.sub(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <div className="main d-flex justify-content-around  ">
      <p>Counter Value is : {counterVal}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleDecrement}
      >
        -1
      </button>

      <input
        type="text"
        className="btn btn-outline-primary "
        style={{ maxWidth: "150px" }}
        placeholder="Enter a number"
        ref={inputElement}
      ></input>
      <button type="button" className="btn btn-info" onClick={handleAdd}>
        ADD
      </button>
      <button type="button" className="btn btn-light" onClick={handleSub}>
        SUB
      </button>
    </div>
  );
};

export default App;
