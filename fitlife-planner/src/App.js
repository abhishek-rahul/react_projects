import "./App.css";
import { useState, useRef, useEffect } from "react";

import Meals from "./components/Meals";

import { SummaryContext } from "./features/summary/SummaryContext";
import HeaderSummary from "./components/HeaderSummary"; // new
import Workouts from "./components/Workouts";
import Todos from "./components/Todos";
import TodaysSummary from "./components/TodaysSummary";

function App() {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalWorkoutMin, setTotalWorkoutMin] = useState(0);
  const [pendingTodos, setPendingTodos] = useState(0);

  return (
    <SummaryContext.Provider
      value={{
        totalCalories,
        setTotalCalories,
        totalWorkoutMin,
        setTotalWorkoutMin,
        pendingTodos,
        setPendingTodos,
      }}
    >
      <div
        style={{ maxWidth: 900, margin: "24px auto", fontFamily: "sans-serif" }}
      >
        <h1>FitLife Planner</h1>
        <HeaderSummary />
        <TodaysSummary />
        <Meals />
        <Workouts />
        <Todos />
      </div>
    </SummaryContext.Provider>
  );
}

export default App;
