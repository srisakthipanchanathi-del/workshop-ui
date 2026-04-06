// WorkshopCard - displays a single workshop with status badge
import "./WorkshopCard.css";

// each card shows one whorkshop's details
function WorkshopCard({ title,description,instructor,date,status}){
  //pick badge color based on availability
    let badgeClass = "badge-orange"; // default - pending
  if (status === "Available") badgeClass = "badge-green";
  if (status === "Full") badgeClass = "badge-red";

  return (
    <div className="w-card">

      {/* only show badge if status is passed */}
      {status && (
        <span className={`w-badge ${badgeClass}`}>{status}</span>
      )}

      <h3 className="w-title">{title}</h3>
      <p className="w-desc">{description}</p>

      {/* only show these if data is available */}
      {instructor && <p className="w-meta">👤 {instructor}</p>}
      {date && <p className="w-meta">📅 {date}</p>}

      <button className="w-btn">Book Now</button>
    </div>
  );
}

export default WorkshopCard;
