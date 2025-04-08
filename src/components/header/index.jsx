import styles from "./header.module.css";

const Header = ({ logo, navItens }) => {

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>{logo}</h1>
        <span>🌟</span>
      </div>
      <nav className={styles.nav}>
        {navItens.map((item, index) => (
          <a key={index} href={item.link} className={styles.navItem}>
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            {item.label}</a>
          ))}
      </nav>

      <div className={styles.userActions}>
        <button className={styles.notificationBtn}>🔔</button>
        <button className={styles.userAvatar}>
          <img src="https://i.pravatar.cc/150?img=3" alt="Your profile" />
        </button>
      </div>
    </header>
  );
};

export default Header;
