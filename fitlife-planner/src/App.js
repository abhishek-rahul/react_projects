import "./App.css";
import { useState, useRef } from "react";
import Section from "./components/Section";
import SummaryStat from "./components/SummaryStat";

function App() {
  const [meals, setMeals] = useState([]);

  const [workouts, setWorkouts] = useState([]);
  const [todos, setTodos] = useState([]);

  const totalCalories = meals.reduce((s, m) => s + m.calories, 0);
  const totalWorkoutMin = workouts.reduce((s, w) => s + w.minutes, 0);
  const pendingTodos = todos.filter((t) => !t.done).length;

  let tempName = useRef("");
  let tempCalories = useRef("");

  let workName = useRef("");
  let workTime = useRef("");

  let todoName = useRef("");

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

  const handleWorkNameChange = (e) => {
    workName.current.value = e.target.value; // do NOT update state
  };

  const handleWorkTimeChange = (e) => {
    workTime.current.value = Number(e.target.value); // do NOT update state
  };

  const handleWorkout = () => {
    const workNameValue = workName.current.value;
    const workTimeValue = Number(workTime.current.value);
    // Add pair to list
    setWorkouts([
      ...workouts,
      {
        id: Date.now(),
        name: workNameValue,
        minutes: workTimeValue,
      },
    ]);
    // CLEAR INPUT BOXES after clicking Add
    workName.current.value = "";
    workTime.current.value = "";
  };

  const handleTodoNameChange = (e) => {
    todoName.current.value = e.target.value; // do NOT update state
  };

  const handleTodos = () => {
    const todoNameValue = todoName.current.value;
    // Add pair to list
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoNameValue,
        done: false,
      },
    ]);
    // CLEAR INPUT BOXES after clicking Add
    todoName.current.value = "";
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  const handleDeleteMeals = (id) => {
    setMeals(meals.filter((m) => m.id !== id));
  };

  const handleDeleteTodos = (id) => {
    setWorkouts(todos.filter((t) => t.id !== id));
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
          {meals.length === 0 ? (
            <>
              <p>No items yet. Add your first one!</p>
            </>
          ) : (
            <>
              {meals.map((m) => (
                <li key={m.id}>
                  {m.name} — {m.calories} kcal
                  <button
                    onClick={() => handleDeleteMeals(m.id)}
                    style={{ marginLeft: 8 }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </>
          )}
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
          {workouts.length === 0 ? (
            <>
              <p>No workouts items yet. Add your first one!</p>
            </>
          ) : (
            <>
              {workouts.map((w) => (
                <li key={w.id}>
                  {w.name} — {w.minutes} min
                  <button
                    onClick={() => handleDeleteWorkout(w.id)}
                    style={{ marginLeft: 8 }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
        <input
          type="text"
          placeholder="Enter workout name"
          ref={workName}
          onChange={handleWorkNameChange}
        />

        <input
          type="number"
          placeholder="Enter workout time"
          ref={workTime}
          onChange={handleWorkTimeChange}
        />

        <button onClick={handleWorkout}>Quick Add</button>
      </Section>

      <Section title="Todos">
        <ul>
          {todos.length === 0 ? (
            <>
              <p>All tasks done 🎉</p>
            </>
          ) : (
            <>
              {todos.map((t) => (
                <li key={t.id}>
                  {t.text}
                  <button
                    onClick={() => handleDeleteTodos(t.id)}
                    style={{ marginLeft: 8 }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>

        <input
          type="text"
          placeholder="Enter todos"
          ref={todoName}
          onChange={handleTodoNameChange}
        />

        <button onClick={handleTodos}>Quick Add</button>
      </Section>
    </div>
  );
}

export default App;
