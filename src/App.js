import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
return ( <BrowserRouter>

```
  {/* top navigation */}
  <Navbar />

  {/* main content area */}
  <main className="maincontent">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </main>

  {/* footer */}
  <Footer />

</BrowserRouter>


);
}

export default App;

