import React, { useState } from "react";
import "./App.css";
import NewExpenseItem from "./components/NewExpenseItem";
import ExpenseFormDisplay from "./components/NewExpenseInputForm/ExpenseFormDisplay";

function App() {
  let backgroundStyle = {
    background: "white",
  };
  const [background, setBackground] = useState(backgroundStyle);
  const clickBackgroundChange = () => {
    setBackground(
      (backgroundStyle = {
        background: "linear-gradient(to bottom, #ffffff 0%, #66ffff 40%)",
      })
    );
    console.log("background");
  };

  const [expenseArray, setexpenseArray] = useState([
    {
      id: "e1",
      title: "Vegetables,Fruits",
      amount: 200,
      date: new Date(2021, 5, 23),
    },
    {
      id: "e2",
      title: "Papers,Pens,Books",
      amount: 100,
      date: new Date(2021, 5, 23),
    },
    {
      id: "e3",
      title: "Dresses,Hijabs",
      amount: 100,
      date: new Date(2020, 5, 23),
    },
    {
      id: "e4",
      title: "Burger,Coke,Coffee",
      amount: 200,
      date: new Date(2021, 5, 23),
    },
    {
      id: "e5",
      title: "Burger,Coke,Coffee",
      amount: 200,
      date: new Date(2019, 4, 23),
    },
    {
      id: "e6",
      title: "Burger,Coke,Coffee",
      amount: 200,
      date: new Date(2020, 4, 23),
    },
  ]);
  const ExpenseDataSaveInApp = (enteredExpenseFormDisplayData) => {
    setexpenseArray((expenseArray) => {
      const newList = [
        enteredExpenseFormDisplayData,
        ...expenseArray,

        //id: Math.random().toString()
      ];
      console.log("ExpenseData in App Component", newList);
      return newList;
    });
  };
  return (
    <div className="App" style={background}>
      <h1>Expense Tracker</h1>
      <div className="">
        <button onClick={clickBackgroundChange} className="themeButton">
          Theme
        </button>
      </div>
      <ExpenseFormDisplay onExpenseDataSaveInApp={ExpenseDataSaveInApp} />
      <NewExpenseItem newExpense={expenseArray} />
    </div>
  );
}

export default App;
