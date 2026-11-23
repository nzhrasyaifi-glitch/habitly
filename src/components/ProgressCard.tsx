
type ProgressCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: string;
};

function ProgressCard({
  title,
  value,
  description,
  icon,
}: ProgressCardProps) {
  return (
    <div className="progress-card">
      <div className="progress-card-top">
        <span className="progress-icon">{icon}</span>
        <span className="progress-indicator">↗</span>
      </div>

      <h3>{title}</h3>
      <strong className="progress-value">{value}</strong>
      <p>{description}</p>
    </div>
  );
}

export default ProgressCard;
