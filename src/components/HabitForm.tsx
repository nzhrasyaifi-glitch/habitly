
import { useState, type FormEvent } from "react";

type HabitFormProps = {
  onAdd: (name: string, category: string) => void;
};

function HabitForm({ onAdd }: HabitFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Kesehatan");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) return;

    onAdd(name.trim(), category);
    setName("");
    setCategory("Kesehatan");
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukkan kebiasaan baru..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Kesehatan</option>
        <option>Pendidikan</option>
        <option>Pribadi</option>
        <option>Produktivitas</option>
      </select>

      <button type="submit">+ Tambah</button>
    </form>
  );
}

export default HabitForm;
