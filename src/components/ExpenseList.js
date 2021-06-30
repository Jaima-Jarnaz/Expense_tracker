import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  if (props.filteredExpense.length === 0) {
    return <h2>No Expense Data Find</h2>;
  }

  return (
    <div>
      {props.filteredExpense.map((items, index) => {
        return (
          <ExpenseItem
            key={index}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        );
      })}
    </div>
  );
}
