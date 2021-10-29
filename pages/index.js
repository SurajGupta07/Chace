import styles from "../styles/Home.module.css"
import { Header } from "../components/Header";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
}
