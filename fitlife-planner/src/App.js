import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import SummaryStat from "./components/SummaryStat";

function App() {
  const [meals, setMeals] = useState([
    { id: 1, name: "Oats", calories: 250 },
    { id: 2, name: "Eggs", calories: 300 },
  ]);

  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Cardio", minutes: 30 },
  ]);
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy spinach", done: false },
  ]);

  const totalCalories = meals.reduce((s, m) => s + m.calories, 0);
  const totalWorkoutMin = workouts.reduce((s, w) => s + w.minutes, 0);
  const pendingTodos = todos.filter((t) => !t.done).length;

  return (
    <div
      style={{ maxWidth: 900, margin: "24px auto", fontFamily: "sans-serif" }}
    >
      <h1>FitLife Planner</h1>

      <Section title="Today’s Summary">
        <div style={{ display: "flex", gap: 8 }}>
          <SummaryStat label="Calories" value={totalCalories} />
          <SummaryStat label="Workout (min)" value={totalWorkoutMin} />
          <SummaryStat label="Todos Pending" value={pendingTodos} />
        </div>
      </Section>

      <Section title="Meals">
        <ul>
          {meals.map((m) => (
            <li key={m.id}>
              {m.name} — {m.calories} kcal
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Workouts">
        <ul>
          {workouts.map((w) => (
            <li key={w.id}>
              {w.name} — {w.minutes} min
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Todos">
        <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.text}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

export default App;
