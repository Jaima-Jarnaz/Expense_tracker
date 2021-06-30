import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [currentTile, setTitle] = useState(props.title);
  let colorStyle = { color: "black" };
  const [currentColor, setColor] = useState(colorStyle);

  const clickHandler = () => {
    setTitle("updated");
    console.log("Clicked");
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const colorHandler = () => {
    setColor((colorStyle = { color: "green" }));
  };

  return (
    <div className="middle-div">
      <ExpenseDate date={props.date} />
      <div className="inner-div">
        <h4 className="h2-title" style={currentColor}>
          {currentTile}
        </h4>
        <div className="div-amount">${props.amount}</div>
      </div>
      <button onClick={clickHandler} className="clickButton">
        Update
      </button>
      <button onClick={colorHandler} className="clickButton">
        Color
      </button>
      <input type="text" onChange={changeHandler} className="input-onchange" />
    </div>
  );
}
export default ExpenseItem;
