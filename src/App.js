import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing components 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Importing pages i made
import Home from "./pages/Home";
import Login from  "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
  // BrowserRouter lets us move between pages without reloading
  return (
    <BrowserRouter>
      <Navbar />

      {/* this is where the page content changes based on URL */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
