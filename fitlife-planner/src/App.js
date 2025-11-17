import "./App.css";
import { useState, useRef, useEffect } from "react";
import Section from "./components/Section";
import SummaryStat from "./components/SummaryStat";

import Meals from "./components/Meals";

import { SummaryContext } from "./features/summary/SummaryContext";
import HeaderSummary from "./components/HeaderSummary"; // new
import Workouts from "./components/Workouts";
import Todos from "./components/Todos";

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

        <Section title="Today’s Summary">
          <div style={{ display: "flex", gap: 8 }}>
            <SummaryStat label="Calories" value={totalCalories} />
            <SummaryStat label="Workout (min)" value={totalWorkoutMin} />
            <SummaryStat label="Todos Pending" value={pendingTodos} />
          </div>
        </Section>

        <Meals />
        <Workouts />
        <Todos />
      </div>
    </SummaryContext.Provider>
  );
}

export default App;
