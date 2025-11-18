// src/features/charts/WeeklyCharts.js
function WeeklyCharts({ calories, workouts }) {
  // Pretend “weekly” is sum of current list × 7
  const weeklyCalories = calories * 7;
  const weeklyWorkout = workouts * 7;

  return (
    <div
      style={{
        marginTop: "16px",
        padding: "12px",
        background: "#f6f6f6",
        borderRadius: "8px",
      }}
    >
      <h3>Weekly Summary (Simulated)</h3>
      <p>
        Weekly Calories: <strong>{weeklyCalories}</strong>
      </p>
      <p>
        Weekly Workout: <strong>{weeklyWorkout} min</strong>
      </p>
    </div>
  );
}
export default WeeklyCharts;
