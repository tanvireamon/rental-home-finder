import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseListings from "./pages/BrowseListings";
import ListingDetails from "./pages/ListingDetails";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Dashboard Import
import Dashboard from "./components/LandlordDashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<BrowseListings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/profile" element={<Profile />} />
  <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Landlord Dashboard */}
        <Route
          path="/landlord/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;