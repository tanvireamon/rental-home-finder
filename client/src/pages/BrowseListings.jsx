import { Link } from "react-router-dom";
import { useState } from "react";

export default function BrowseListings() {
  const [searchParams, setSearchParams] = useState({
    area: "",
    priceRange: "",
    rooms: "",
    type: "",
    furnished: "",
  });

  const listings = [
    {
      id: 1,
      title: "Modern Family Apartment",
      area: "Mirpur DOHS",
      price: "৳ 22,000/month",
      rooms: "3 Beds",
      bath: "2 Baths",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Luxury Bachelor Studio",
      area: "Uttara Sector 7",
      price: "৳ 15,000/month",
      rooms: "1 Bed",
      bath: "1 Bath",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Cozy Furnished Flat",
      area: "Dhanmondi 27",
      price: "৳ 30,000/month",
      rooms: "2 Beds",
      bath: "2 Baths",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-black text-emerald-700">
            BashaFinder BD
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-emerald-600 transition">Home</Link>
            <Link to="/browse" className="hover:text-emerald-600 transition font-bold text-emerald-600">Listings</Link>
            <a href="#" className="hover:text-emerald-600 transition">About</a>
            <a href="#" className="hover:text-emerald-600 transition">Contact</a>
          </div>
          <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-full text-white font-semibold shadow-lg shadow-emerald-300 inline-block">
            Login
          </Link>
        </div>
      </nav>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-black mb-8">Browse All Listings</h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
          <div className="grid md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Search area..."
              className="px-4 py-3 rounded-xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300"
            />
            <select className="px-4 py-3 rounded-xl bg-slate-100 outline-none">
              <option>Price Range</option>
              <option>৳ 5k - 10k</option>
              <option>৳ 10k - 20k</option>
              <option>৳ 20k - 40k</option>
            </select>
            <select className="px-4 py-3 rounded-xl bg-slate-100 outline-none">
              <option>Rooms</option>
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
            <select className="px-4 py-3 rounded-xl bg-slate-100 outline-none">
              <option>Type</option>
              <option>Family</option>
              <option>Bachelor</option>
            </select>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
              <img src={listing.image} alt={listing.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{listing.title}</h3>
                <p className="text-slate-500 mt-1">{listing.area}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-emerald-700 font-black text-lg">{listing.price}</div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-slate-600 font-medium">
                  <span>🛏 {listing.rooms}</span>
                  <span>🛁 {listing.bath}</span>
                </div>
                <Link to={`/listing/${listing.id}`} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold mt-5 block text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}