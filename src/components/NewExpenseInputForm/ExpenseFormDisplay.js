import React, { useState } from "react";
import "./StyleExpenseFormDisplay.css";
import ExpenseInputForm from "./ExpenseInputForm";

export default function ExpenseFormDisplay(props) {
  const [buttonStatus, setButtonStatus] = useState(false);
  const getDataFromExpenseInput = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("ExpenseData in ExpenseFormDisplay", expenseData);
    props.onExpenseDataSaveInApp(expenseData);
    // setCancelButtonForm(false);
  };

  /// form display function start here

  const clickOnCancelButton = () => {
    setButtonStatus(false);
  };

  const formDisplay = () => {
    setButtonStatus(true);
  };

  return (
    <div>
      <div className="new-expense">
        {!buttonStatus && <button onClick={formDisplay}>Add Expense</button>}
        {buttonStatus == true && (
          <ExpenseInputForm
            onSaveDataFromExpenseInput={getDataFromExpenseInput}
            onClickCancelButton={clickOnCancelButton}
          />
        )}
      </div>
    </div>
  );
}
