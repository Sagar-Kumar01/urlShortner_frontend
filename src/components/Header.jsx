import styles from "../styles/header.module.css";
import { FiArrowRight, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  const handleLogout = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {
      method: "POST",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem('isLogin');
          localStorage.removeItem('user');
          setUser(null);
          navigate("/login");
        }
      })
      .catch((err) => console.error("Logout failed:", err));
  };

  return (
    <header className={styles.containerHeader}>
      <div className={styles.logoSection}>
        <h2>SortSortLink</h2>
      </div>

      <div className={styles.authSection}>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Hello, {user.name}</span>
            <button
              onClick={handleLogout}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 15px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#ff4d4d",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              <span>Logout</span>
              <FiLogOut />
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => navigate("/login")}>
              <span>Login</span>
              <FiArrowRight />
            </button>
            <button className={styles.signup} onClick={() => navigate("/signup")}>
              Register Now!
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
