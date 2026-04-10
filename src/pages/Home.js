// Home page - hero, stats, how it works, workshop cards
 
import { Link } from "react-router-dom";
import WorkshopCard from "../components/WorkshopCard";
import "./Home.css";
 
// static workshop data (can be replaced with API later)
const workshopData = [
  {
    title: "Python Basics",
    description: "Learn Python step by step with real examples.",
    instructor: "Dr. Ramesh Kumar",
    date: "April 20, 2026",
    status: "Available"
  },
  {
    title: "Web Development",
    description: "Build websites using HTML, CSS and JavaScript.",
    instructor: "Prof. Anita Sharma",
    date: "April 25, 2026",
    status: "Full"
  },
  {
    title: "AI & Machine Learning",
    description: "Understand the basics of AI and simple ML models.",
    instructor: "Dr. Vikram Nair",
    date: "May 5, 2026",
    status: "Pending"
  },
  {
    title: "React for Beginners",
    description: "Build UIs with React components and state.",
    instructor: "Ms. Priya Iyer",
    date: "May 12, 2026",
    status: "Available"
  }
];
 
function Home() {
  return (
    <div>
 
      {/* Hero Section */}
      <section className="hero-section">
        <h1> Book a Workshop for Your College</h1>
        <p>
          FOSSEE brings expert workshops to your campus.
          Python, AI, Web Development and more — completely free.
        </p>
 
        {/* CTA button */}
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
 
      {/* How It Works */}
      <section className="steps-section">
        <h2>How It Works</h2>
 
        <div className="steps-row">
          <div className="step-box">
            <div className="step-circle">1</div>
            <h4>Register</h4>
            <p>Create a coordinator account</p>
          </div>
 
          <div className="step-box">
            <div className="step-circle">2</div>
            <h4>Browse</h4>
            <p>Explore available workshops</p>
          </div>
 
          <div className="step-box">
            <div className="step-circle">3</div>
            <h4>Book</h4>
            <p>Request a workshop for your college</p>
          </div>
 
          <div className="step-box">
            <div className="step-circle">4</div>
            <h4>Learn</h4>
            <p>Attend sessions conducted by experts</p>
          </div>
        </div>
      </section>
 
      {/* Workshop Cards */}
      <section className="cards-section">
        <h2>Available Workshops</h2>
 
        <div className="cards-row">
          {workshopData.map((item, index) => (
            <WorkshopCard
              key={index}
              title={item.title}
              description={item.description}
              instructor={item.instructor}
              date={item.date}
              status={item.status}
            />
          ))}
        </div>
      </section>
 
    </div>
  );
}
 
export default Home;