// src/components/HeaderSummary.js
import { useSummary } from "../features/summary/SummaryContext";

export default function HeaderSummary() {
  const { totalCalories, totalWorkoutMin, pendingTodos } = useSummary();

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "16px",
        padding: "8px 12px",
        background: "#f3f4f6",
        borderRadius: "8px",
        fontSize: "14px",
      }}
    >
      <span>🔥 Calories: <strong>{totalCalories}</strong></span>
      <span>🏋️‍♂️ Workout: <strong>{totalWorkoutMin} min</strong></span>
      <span>
        ✅ Todos left:{" "}
        <strong style={{ color: pendingTodos === 0 ? "green" : "inherit" }}>
          {pendingTodos === 0 ? "All done 🎉" : pendingTodos}
        </strong>
      </span>
    </div>
  );
}
