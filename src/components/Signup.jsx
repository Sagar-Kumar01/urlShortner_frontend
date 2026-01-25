import { useState, useRef } from "react";
import styles from "../styles/Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  let [error, setError] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = formRef.current[0].value;
    let email = formRef.current[1].value;
    let password = formRef.current[2].value;
    let confirmPassword = formRef.current[3].value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!name || !email) {
      setError("Name and Email are required");
      return;
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Signup Response:", data);
        if (data.success) {
          localStorage.setItem('isLogin', 'true');
          navigate("/");
        } else {
          console.error("Signup failed:", data.message);
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
          <h2>Create Account</h2>
          <p>Join us today</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.signupBtn}>
            Create Account
          </button>
        </form>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <div className={styles.footer}>
          <p>Already have an account?</p>
          <button
            className={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className={styles.homeBtn} onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
