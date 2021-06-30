import React, { useState } from "react";
import "./NewExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
function NewExpenseItem(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filerChangeHandler = (selectedYearComeFromExpense) => {
    console.log("NewExpenseItem.js");
    setfilteredYear(selectedYearComeFromExpense);
    console.log(selectedYearComeFromExpense);
  };
  //filterd data by date
  const filteredExpense = props.newExpense.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="container-div">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filerChangeHandler}
      />
      <ExpenseChart expense={filteredExpense} />
      <ExpenseList filteredExpense={filteredExpense} />
    </div>
  );
}
export default NewExpenseItem;
