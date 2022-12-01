import styles from "./Header.module.css";
import igniteImgLogo from "../assets/ignite-feed-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteImgLogo} alt="ignite feed logo" />
      <strong> Ignite Feed</strong>
    </header>
  );
}
