/*Added concepts :
JSX
Components
Prop
States
Rendering
*/
import "./App.css";
import { useState, useRef } from "react";
import Section from "./components/Section";
import SummaryStat from "./components/SummaryStat";

function App() {
  /*
  const [meals, setMeals] = useState([
    { id: 1, name: "Oats", calories: 250 },
    { id: 2, name: "Eggs", calories: 300 },
  ]);
  */

  const [meals, setMeals] = useState([]);

  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Cardio", minutes: 30 },
  ]);
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy spinach", done: false },
  ]);

  const totalCalories = meals.reduce((s, m) => s + m.calories, 0);
  const totalWorkoutMin = workouts.reduce((s, w) => s + w.minutes, 0);
  const pendingTodos = todos.filter((t) => !t.done).length;

  let tempName = useRef("");
  let tempCalories = useRef("");

  const handleNameChange = (e) => {
    tempName.current.value = e.target.value; // do NOT update state
  };

  const handleCaloriesChange = (e) => {
    tempCalories.current.value = Number(e.target.value); // do NOT update state
  };

  const handleMeals = () => {
    const nameValue = tempName.current.value;
    const caloriesValue = Number(tempCalories.current.value);
    // Add pair to list
    setMeals([
      ...meals,
      {
        id: Date.now(),
        name: nameValue,
        calories: caloriesValue,
      },
    ]);
    // CLEAR INPUT BOXES after clicking Add
    tempName.current.value = "";
    tempCalories.current.value = "";
  };

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

        <input
          type="text"
          placeholder="Enter name"
          ref={tempName}
          onChange={handleNameChange}
        />

        <input
          type="number"
          placeholder="Enter Calories"
          ref={tempCalories}
          onChange={handleCaloriesChange}
        />

        <button onClick={handleMeals}>Quick Add</button>
      </Section>

      <Section title="Workouts">
        <ul>
          {workouts.map((w) => (
            <li key={w.id}>
              {w.name} — {w.minutes} min
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter name"
          ref={tempWorkoutName}
          onChange={handleWorkoutNameChange}
        />

        <input
          type="number"
          placeholder="Enter Calories"
          ref={tempCalories}
          onChange={handleCaloriesChange}
        />

        <button onClick={handleMeals}>Quick Add</button>
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
