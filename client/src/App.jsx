import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseListings from "./pages/BrowseListings";
import ListingDetails from "./pages/ListingDetails";
import Profile from "./pages/Profile";

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