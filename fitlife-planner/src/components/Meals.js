import { useSummary } from "../features/summary/SummaryContext";
import { useState, useRef, useEffect } from "react";
import Section from "./Section";
function Meals() {
  const { totalCalories, setTotalCalories } = useSummary();

  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem("meals");
    return saved ? JSON.parse(saved) : [];
  });

  // Write meals to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  // const totalCalories = meals.reduce((s, m) => s + m.calories, 0);
  setTotalCalories(meals.reduce((s, m) => s + m.calories, 0));

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

  const handleDeleteMeals = (id) => {
    setMeals(meals.filter((m) => m.id !== id));
  };

  return (
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
  );
}
export default Meals;
