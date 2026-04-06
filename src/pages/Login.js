// Login page - email and password form with validation
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  // storing what user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for showing error messages
  const [errorMsg, setErrorMsg] = useState("");

  function handleLogin(e) {
    // stop page from refreshing on submit
    e.preventDefault();

    // simple checks before submitting
    if (email === "" || password === "") {
      setErrorMsg("Please fill in both fields.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMsg("That doesn't look like a valid email.");
      return;
    }

    // clear error if everything looks fine
    setErrorMsg("");
    alert("Login works! Will connect to backend later.");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2>Welcome Back</h2>
        <p className="auth-tagline">Login to manage your bookings</p>

        {/* show error only when there is one */}
        {errorMsg && (
          <div className="error-box">{errorMsg}</div>
        )}

        <form onSubmit={handleLogin}>

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="yourname@college.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Login
          </button>

        </form>

        <p className="switch-link">
          New here? <Link to="/register">Create an account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;