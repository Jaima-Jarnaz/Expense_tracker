import React, { useState } from "react";
import "./ExpenseInputForm.css";
export default function ExpenseInputForm(props) {
  const [currentTitle, setTitle] = useState("");
  const [currentAmount, setAmount] = useState("");
  const [currentDate, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: currentTitle,
      amount: currentAmount,
      date: new Date(currentDate),
    };
    console.log("Data From ExpenseInputForm", expenseData);
    props.onSaveDataFromExpenseInput(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };
  const myFuncForAlert = () => {
    if (currentTitle === "" || currentAmount === "" || currentDate === "") {
      alert("Please enter required data");
    } else {
      alert(
        `Product Title is ${currentTitle}\n
      Product Amount is ${currentAmount}\n
      Product Date is ${currentDate.toLocaleString("bn-BD", {
        day: "2-digit",
        month: "long",
      })}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label className="">Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-01-01"
              onChange={dateChangeHandler}
              value={currentDate}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={myFuncForAlert} type="submit">
              Add Expense
            </button>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onClickCancelButton}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
