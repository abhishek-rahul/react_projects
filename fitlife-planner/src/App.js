import "./App.css";
import { useState } from "react";

import Meals from "./components/Meals";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

import { SummaryContext } from "./features/summary/SummaryContext";
import HeaderSummary from "./components/HeaderSummary"; // new
import Workouts from "./components/Workouts";
import Todos from "./components/Todos";
import TodaysSummary from "./components/TodaysSummary";

import { lazy, Suspense } from "react";
//import BreakMe from "./components/BreakMe";

const WeeklyCharts = lazy(() => import("./features/charts/WeeklyCharts"));

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
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Optional: Reset app state when retry is clicked
          window.location.reload();
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "24px auto",
            fontFamily: "sans-serif",
          }}
        >
          <h1>FitLife Planner</h1>
          {/*<BreakMe />*/}
          <HeaderSummary />
          <TodaysSummary />
          <Meals />
          <Workouts />
          <Todos />
          <Suspense fallback={<div>Loading charts…</div>}>
            <WeeklyCharts calories={totalCalories} workouts={totalWorkoutMin} />
          </Suspense>
        </div>
      </ErrorBoundary>
    </SummaryContext.Provider>
  );
}

export default App;
