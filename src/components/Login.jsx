import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Login Response:", data);
      if(data.success) {
        localStorage.setItem('isLogin', 'true');
        navigate("/");
      } else {
        console.error("Login failed:", data.message);
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <div className={styles.footer}>
          <p>Don't have an account?</p>
          <button
            className={styles.signupLink}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <button
            className={styles.homeBtn}
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
