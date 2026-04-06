// Register page - sign up form with role selection
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // same styles work fine here

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("coordinator");
  const [errorMsg, setErrorMsg] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password should be at least 6 characters.");
      return;
    }

    setErrorMsg("");
    alert("Registered! Will connect to backend later.");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2>Create Account</h2>
        <p className="auth-tagline">Join as a coordinator or instructor</p>

        {errorMsg && (
          <div className="error-box">{errorMsg}</div>
        )}

        <form onSubmit={handleRegister}>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="reg-email">Email</label>
          <input
            id="reg-email"
            type="email"
            placeholder="yourname@college.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="reg-password">Password</label>
          <input
            id="reg-password"
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* role dropdown */}
          <label htmlFor="role">I am a</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-select"
          >
            <option value="coordinator">College Coordinator</option>
            <option value="instructor">Instructor</option>
          </select>

          <button type="submit" className="submit-btn">
            Register
          </button>

        </form>

        <p className="switch-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;