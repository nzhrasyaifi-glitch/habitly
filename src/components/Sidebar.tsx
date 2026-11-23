
type SidebarProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

const menuItems = [
  { name: "Beranda", icon: "⌂" },
  { name: "Kebiasaan Saya", icon: "✓" },
  { name: "Statistik", icon: "▥" },
];

function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">✦</span>
        <h2>habitly</h2>
      </div>

      <p className="menu-label">MENU UTAMA</p>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`menu-item ${activePage === item.name ? "active" : ""}`}
            onClick={() => onPageChange(item.name)}
          >
            <span>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      <div className="sidebar-profile">
        <div className="profile-avatar">N</div>
        <div>
          <strong>Nadhifa Zahra Syaifi</strong>
          <small>1247050020</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
