import { Link } from "react-router-dom";

function LoginSuccess() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* success icon */}
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}></div>

        <h2>Login Successful!</h2>
        <p className="auth-tagline">Welcome back! You're now logged in.</p>

        {/* take user to home or bookings */}
        <Link to="/">
          <button className="submit-btn" style={{ marginTop: "1.5rem" }}>
            Go to Home
          </button>
        </Link>

      </div>
    </div>
  );
}

export default LoginSuccess;