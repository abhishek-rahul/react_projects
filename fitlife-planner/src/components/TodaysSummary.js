import { useSummary } from "../features/summary/SummaryContext";
import Section from "./Section";
import SummaryStat from "./SummaryStat";
function TodaysSummary() {
  const { totalCalories, totalWorkoutMin, pendingTodos } = useSummary();

  return (
    <Section title="Today’s Summary">
      <div style={{ display: "flex", gap: 8 }}>
        <SummaryStat label="Calories" value={totalCalories} />
        <SummaryStat label="Workout (min)" value={totalWorkoutMin} />
        <SummaryStat label="Todos Pending" value={pendingTodos} />
      </div>
    </Section>
  );
}
export default TodaysSummary;
