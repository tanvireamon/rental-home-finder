import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BrowseListings from './pages/BrowseListings';
import ListingDetails from './pages/ListingDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<BrowseListings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;