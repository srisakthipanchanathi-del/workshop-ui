import "./WorkshopCard.css";
import { useNavigate } from "react-router-dom";

// each card shows one workshop's details
function WorkshopCard({ title, description, instructor, date, status, seats, onBook }) {

  const navigate = useNavigate();

  // badge color
  let badgeClass = "badge-orange";
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
      {instructor && <p className="w-meta">{instructor}</p>}
      {date && <p className="w-meta">{date}</p>}

      {/*  NEW: seats display */}
      <p className="w-meta">Seats left: {seats}</p>

      <button
        className="primary-btn w-btn"
        disabled={seats === 0 || status === "Full"}
        onClick={() => {
          if (seats > 0 && status !== "Full") {
            
            //  reduce seat (call parent function)
            onBook(title);

            // navigate after booking
            navigate("/booking-confirmed");
          }
        }}
      >
        {seats === 0 || status === "Full" ? "Full" : "Book Now"}
      </button>

    </div>
  );
}

export default WorkshopCard;
