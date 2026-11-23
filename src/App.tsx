
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import HabitForm from "./components/HabitForm";
import HabitList, { type Habit } from "./components/HabitList";
import "./App.css";

const initialHabits: Habit[] = [
  { id: 1, name: "Olahraga Pagi", category: "Kesehatan", icon: "🏃", completed: true },
  { id: 2, name: "Membaca 10 Halaman", category: "Pendidikan", icon: "📚", completed: false },
  { id: 3, name: "Minum 8 Gelas Air", category: "Kesehatan", icon: "💧", completed: true },
  { id: 4, name: "Belajar Pemrograman", category: "Produktivitas", icon: "💻", completed: false },
];

function App() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    try {
      const savedHabits = localStorage.getItem("habitly-habits");
      return savedHabits ? JSON.parse(savedHabits) as Habit[] : initialHabits;
    } catch {
      return initialHabits;
    }
  });

  const [activePage, setActivePage] = useState("Beranda");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("habitly-habits", JSON.stringify(habits));
  }, [habits]);

  const completedCount = habits.filter((habit) => habit.completed).length;
  const totalCount = habits.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  function addHabit(name: string, category: string) {
    const icons: Record<string, string> = {
      Kesehatan: "💪",
      Pendidikan: "📚",
      Pribadi: "🌱",
      Produktivitas: "⚡",
    };

    const newHabit: Habit = {
      id: Date.now(),
      name,
      category,
      icon: icons[category] || "🌱",
      completed: false,
    };

    setHabits((current) => [...current, newHabit]);
  }

  function toggleHabit(id: number) {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  }

  function deleteHabit(id: number) {
    setHabits((current) => current.filter((habit) => habit.id !== id));
  }

  const filteredHabits = habits.filter((habit) => {
    const matchesSearch = habit.name.toLowerCase().includes(search.toLowerCase());
    const matchesPage = activePage === "Statistik" ? habit.completed : true;

    return matchesSearch && matchesPage;
  });

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      <main className="main-content">
        <Header
          title={activePage === "Beranda" ? "Ringkasan Aktivitas" : activePage}
          subtitle="Bangun kebiasaan baik, mulai dari hari ini."
        />

        <section className="welcome-section">
          <div>
            <p className="welcome-label">SEMANGAT HARI INI !!!</p>
            <h2>Langkah kecil, perubahan besar!</h2>
            <p>Setiap kebiasaan baik membawamu lebih dekat dengan versi terbaik dirimu.</p>
          </div>
          <div className="welcome-illustration"></div>
        </section>

        <section className="progress-grid">
          <ProgressCard
            title="Total Kebiasaan"
            value={totalCount}
            description="Kebiasaan dalam rutinitasmu"
            icon="✦"
          />
          <ProgressCard
            title="Sudah Selesai"
            value={completedCount}
            description="Kebiasaan selesai hari ini"
            icon="✓"
          />
          <ProgressCard
            title="Progres Harian"
            value={`${progress}%`}
            description="Pencapaian harianmu"
            icon="↗"
          />
        </section>

        <section className="habits-section">
          <div className="section-heading">
            <div>
              <h2>
                {activePage === "Statistik"
                  ? "Kebiasaan yang Selesai"
                  : "Daftar Kebiasaan"}
              </h2>
              <p>Jaga rutinitasmu agar tetap konsisten.</p>
            </div>
            <span className="today-badge">Hari ini</span>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Cari kebiasaan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <HabitList
            habits={filteredHabits}
            onToggle={toggleHabit}
            onDelete={deleteHabit}
          />

          {activePage !== "Statistik" && (
            <>
              <h3 className="add-title">Tambah Kebiasaan Baru</h3>
              <HabitForm onAdd={addHabit} />
            </>
          )}
        </section>

        <footer className="app-footer">
          <p>© 2026 Habitly · Dibuat oleh Nadhifa Zahra Syaifi</p>
          <p>Mahasiswa SMT 5</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
