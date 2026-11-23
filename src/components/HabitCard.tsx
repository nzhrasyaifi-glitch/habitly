
type HabitCardProps = {
  id: number;
  name: string;
  category: string;
  icon: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function HabitCard({
  id,
  name,
  category,
  completed,
  onToggle,
  onDelete,
}: HabitCardProps) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Apakah kamu yakin ingin menghapus kebiasaan "${name}"?`
    );

    if (confirmed) {
      onDelete(id);
    }
  };

  return (
    <div className={`habit-card ${completed ? "completed" : ""}`}>
      <div className="habit-icon">
        {category.slice(0, 2).toUpperCase()}
      </div>

      <div className="habit-info">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>

      <button
        className="habit-status"
        onClick={() => onToggle(id)}
      >
        {completed ? "✓ Selesai" : "Tandai selesai"}
      </button>

      <button
        className="delete-button"
        onClick={handleDelete}
        aria-label={`Hapus ${name}`}
      >
        ×
      </button>
    </div>
  );
}

export default HabitCard;
