import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  // navigation
  const navigate = useNavigate();

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handling
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    // basic validation
    if (!email || !password) {
      setErrorMsg("Please fill in both fields.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // simulate loading state
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // REMOVED: alert("Login successful!") -- no longer needed

      // CHANGED: redirect to the new login success page
      navigate("/login-success");

    }, 800);
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2>Welcome Back</h2>
        <p className="auth-tagline">Login to manage your bookings</p>

        {/* error message */}
        {errorMsg && <div className="error-box">{errorMsg}</div>}

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

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
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
