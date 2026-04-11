// Home page - hero, stats, how it works, workshop cards
import { useState } from "react";
import { Link } from "react-router-dom";
import WorkshopCard from "../components/WorkshopCard";
import "./Home.css";

// initial workshop data (now includes seats)
const initialWorkshops = [
  {
    title: "Python Basics",
    description: "Learn Python step by step with real examples.",
    instructor: "Dr. Ramesh Kumar",
    date: "April 20, 2026",
    status: "Available",
    seats: 5
  },
  {
    title: "Web Development",
    description: "Build websites using HTML, CSS and JavaScript.",
    instructor: "Prof. Anita Sharma",
    date: "April 25, 2026",
    status: "Full",
    seats: 0
  },
  {
    title: "AI & Machine Learning",
    description: "Understand the basics of AI and simple ML models.",
    instructor: "Dr. Vikram Nair",
    date: "May 5, 2026",
    status: "Pending",
    seats: 3
  },
  {
    title: "React for Beginners",
    description: "Build UIs with React components and state.",
    instructor: "Ms. Priya Iyer",
    date: "May 12, 2026",
    status: "Available",
    seats: 4
  }
];

function Home() {

  // ✅ convert to state
  const [workshops, setWorkshops] = useState(initialWorkshops);

  // ✅ booking function (ADD YOUR LOGIC HERE)
  const handleBooking = (selectedTitle) => {
    setWorkshops((prev) =>
      prev.map((w) =>
        w.title === selectedTitle && w.seats > 0
          ? { ...w, seats: w.seats - 1 }
          : w
      )
    );
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1> Book a Workshop for Your College</h1>
        <p>
          FOSSEE brings expert workshops to your campus.
          Python, AI, Web Development and more — completely free.
        </p>

        <Link to="/register" className="hero-cta">
          Get Started
        </Link>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>120+</h2>
          <p>Workshops Done</p>
        </div>

        <div className="stat-item">
          <h2>50+</h2>
          <p>Instructors</p>
        </div>

        <div className="stat-item">
          <h2>300+</h2>
          <p>Students Trained</p>
        </div>

        <div className="stat-item">
          <h2>25+</h2>
          <p>Colleges</p>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="cards-section">
        <h2>Available Workshops</h2>

        <div className="cards-row">
          {workshops.map((item, index) => (
            <WorkshopCard
              key={index}
              title={item.title}
              description={item.description}
              instructor={item.instructor}
              date={item.date}
              status={item.status}
              seats={item.seats}
              onBook={handleBooking}   // 🔥 PASS FUNCTION
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home; 
