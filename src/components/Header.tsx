import styles from "./Header.module.css";
import "../global.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong> Ignite Feed</strong>
    </header>
  );
}
