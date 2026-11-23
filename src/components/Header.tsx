
type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="top-header">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="header-right">
        <span className="header-date">✦ Tetap semangat!</span>
        <div className="header-avatar">NZS</div>
      </div>
    </header>
  );
}

export default Header;
