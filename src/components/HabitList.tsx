
import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortOrder, setSortOrder] = useState("az");

  const categories = [
    "Semua",
    ...new Set(habits.map((habit) => habit.category)),
  ];

  const filteredHabits =
    selectedCategory === "Semua"
      ? habits
      : habits.filter((habit) => habit.category === selectedCategory);

  const sortedHabits = [...filteredHabits].sort((a, b) => {
    return sortOrder === "az"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

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
    <>
      <div className="category-filter">
        <label htmlFor="category-select">Filter kategori: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="sort-select">Urutkan: </label>
        <select
          id="sort-select"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="az">Nama A–Z</option>
          <option value="za">Nama Z–A</option>
        </select>
      </div>

      {sortedHabits.length === 0 ? (
        <div className="empty-state">
          <h3>Kebiasaan tidak ditemukan</h3>
          <p>Belum ada kebiasaan dalam kategori ini.</p>
        </div>
      ) : (
        <div className="habit-list">
          {sortedHabits.map((habit) => (
            <HabitCard
              key={habit.id}
              {...habit}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default HabitList;
