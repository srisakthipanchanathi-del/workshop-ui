import "./WorkshopCard.css";
import { useNavigate } from "react-router-dom";

// each card shows one workshop's details
function WorkshopCard({ title, description, instructor, date, status }) {

  // navigation
  const navigate = useNavigate();

  // pick badge color based on availability
  let badgeClass = "badge-orange"; // default – pending
  if (status === "Available") badgeClass = "badge-green";
  if (status === "Full") badgeClass = "badge-red";

  return (
    <div className="w-card">

      {/* badge */}
      {status && (
        <span className={`w-badge ${badgeClass}`}>{status}</span>
      )}

      <h3 className="w-title">{title}</h3>
      <p className="w-desc">{description}</p>

      {/* metadata */}
      {instructor && <p className="w-meta"> {instructor}</p>}
      {date && <p className="w-meta"> {date}</p>}

      <button
        className="primary-btn w-btn"
        disabled={status === "Full"}
        
        // THIS IS THE FIX
        onClick={() => {
          if (status !== "Full") {
            navigate("/booking-confirmed");
          }
        }}
      >
        {status === "Full" ? "Full" : "Book Now"}
      </button>

    </div>
  );
}

export default WorkshopCard;
