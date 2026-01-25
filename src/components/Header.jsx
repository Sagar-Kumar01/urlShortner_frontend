import styles from "../styles/header.module.css";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.containerHeader}>
      <div className={styles.logoSection}>
        <h2>SortSortLink</h2>
      </div>

      <div className={styles.authSection}>
        <button onClick={() => navigate("/login")}>
          <span>Login</span>
          <FiArrowRight />
        </button>
        <button className={styles.signup} onClick={() => navigate("/signup")}>
          Register Now!
        </button>
      </div>
    </header>
  );
};

export default Header;
