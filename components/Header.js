import styles from "../styles/Home.module.css";
import Image from "next/image";
import heroImage from "../assets/chace.svg";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.container}>
          <Image src={heroImage} alt="chance" />
        </div>
        <div className={styles.navbarBtn}>
          <button className={styles.btn}>fellowship program</button>
        </div>
      </nav>
    </div>
  );
};
