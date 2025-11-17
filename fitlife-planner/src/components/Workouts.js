import { useSummary } from "../features/summary/SummaryContext";
import { useState, useRef, useEffect } from "react";
import Section from "./Section";
function Workouts() {
  const { totalWorkoutMin, setTotalWorkoutMin } = useSummary();

  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  // Write workouts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  setTotalWorkoutMin(workouts.reduce((s, w) => s + w.minutes, 0));

  let workName = useRef("");
  let workTime = useRef("");

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

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
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
  );
}
export default Workouts;
