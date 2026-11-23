
import HabitCard from "./HabitCard";

export type Habit = {
  id: number;
  name: string;
  category: string;
  icon: string;
  completed: boolean;
};

type HabitListProps = {
  habits: Habit[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function HabitList({ habits, onToggle, onDelete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="empty-state">
        <span>🌱</span>
        <h3>Kebiasaan tidak ditemukan</h3>
        <p>Yuk, mulai bangun rutinitas baikmu!</p>
      </div>
    );
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          {...habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default HabitList;
