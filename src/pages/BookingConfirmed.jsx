// BookingConfirmed.jsx
// Show this page after the user successfully books a workshop

import React from "react";

function BookingConfirmed() {
  return (
    // Full page wrapper - centers the card vertically and horizontally
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* The white card */}
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {/* Green circle with checkmark */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#e8f5e9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          {/* SVG checkmark icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polyline
              points="20 6 9 17 4 12"
              stroke="#2e7d32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#1a1a1a",
            margin: "0 0 0.5rem",
          }}
        >
          Booking confirmed!
        </h2>

        {/* Message telling user to check their email */}
        <p
          style={{
            fontSize: "15px",
            color: "#555555",
            lineHeight: "1.6",
            margin: "0 0 1.5rem",
          }}
        >
          Thank you for registering. Please check your email for further
          updates and details about your workshop.
        </p>

        {/* Small note about spam folder */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            padding: "0.75rem 1rem",
            fontSize: "13px",
            color: "#777777",
          }}
        >
          Didn't receive an email? Check your spam folder.
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmed;