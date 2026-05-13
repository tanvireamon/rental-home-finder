import { Link } from "react-router-dom";
import listingsData from '../data/home.json';
import { useState } from "react";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaStar,
  FaPhone,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function BrowseListings() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("Newest");

  const listings = [
    {
      id: 1,
      title: "Modern Family Apartment",
      area: "Mirpur DOHS",
      price: 22000,
      displayPrice: "৳ 22,000/month",
      rooms: "3 Beds",
      bath: "2 Baths",
      rating: 4.8,
      reviews: 120,
      type: "Family",
      furnished: "Furnished",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      verified: true,
      featured: true,
      new: true,
    },
    {
      id: 2,
      title: "Luxury Bachelor Studio",
      area: "Uttara Sector 7",
      price: 15000,
      displayPrice: "৳ 15,000/month",
      rooms: "1 Bed",
      bath: "1 Bath",
      rating: 4.6,
      reviews: 85,
      type: "Bachelor",
      furnished: "Semi Furnished",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      verified: true,
      featured: false,
      new: true,
    },
    {
      id: 3,
      title: "Cozy Furnished Flat",
      area: "Dhanmondi 27",
      price: 30000,
      displayPrice: "৳ 30,000/month",
      rooms: "2 Beds",
      bath: "2 Baths",
      rating: 4.9,
      reviews: 200,
      type: "Family",
      furnished: "Fully Furnished",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      verified: true,
      featured: true,
      new: false,
    },
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredListings = listings
    .filter((listing) =>
      listing.area.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Lowest Price") return a.price - b.price;
      if (sortOption === "Highest Price") return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <div
      className={`${
        darkMode ? "dark bg-slate-950 text-white" : "bg-slate-50"
      } min-h-screen transition-all duration-300`}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-black text-emerald-700"
          >
            BashaFinder BD
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-emerald-600 transition">
              Home
            </Link>

            <Link
              to="/browse"
              className="hover:text-emerald-600 transition font-bold text-emerald-600"
            >
              Listings
            </Link>

            <Link
              to="/about"
              className="hover:text-emerald-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-emerald-600 transition"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-slate-200 p-3 rounded-full"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <Link
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-full text-white font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-5">
            Find Your Dream Rental Home
          </h1>

          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Browse verified apartments, bachelor rooms, and family flats across
            Dhaka.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-4xl font-black">2500+</h2>
              <p className="mt-2">Listings</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-4xl font-black">1200+</h2>
              <p className="mt-2">Verified Owners</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-4xl font-black">50+</h2>
              <p className="mt-2">Popular Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <div className="bg-amber-100 border-y border-amber-300 py-4 text-center text-amber-900 font-semibold">
        ⚠ Meet owner physically before sending any payment.
      </div>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="bg-white rounded-[30px] p-8 shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Search area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-4 rounded-2xl bg-slate-100 outline-none"
            />

            <select className="px-4 py-4 rounded-2xl bg-slate-100 outline-none">
              <option>Price Range</option>
              <option>৳ 5k - 10k</option>
              <option>৳ 10k - 20k</option>
              <option>৳ 20k - 40k</option>
            </select>

            <select className="px-4 py-4 rounded-2xl bg-slate-100 outline-none">
              <option>Rooms</option>
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-4 rounded-2xl bg-slate-100 outline-none"
            >
              <option>Newest</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        {filteredListings.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-black">No homes found 😔</h2>
            <p className="text-slate-500 mt-3">
              Try changing search filters.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-72 w-full object-cover hover:scale-110 transition duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {listing.verified && (
                      <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                        Verified
                      </span>
                    )}

                    {listing.featured && (
                      <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                        Featured
                      </span>
                    )}

                    {listing.new && (
                      <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        New
                      </span>
                    )}
                  </div>

                  {/* Favorite */}
                  <button
                    onClick={() => toggleFavorite(listing.id)}
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition"
                  >
                    <FaHeart
                      className={`${
                        favorites.includes(listing.id)
                          ? "text-red-500"
                          : "text-slate-500"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">
                        {listing.title}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-500 mt-2">
                        <FaMapMarkerAlt />
                        <span>{listing.area}</span>
                      </div>
                    </div>

                    <div className="text-emerald-700 font-black text-xl">
                      {listing.displayPrice}
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="flex items-center gap-2 mt-4">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{listing.rating}</span>
                    <span className="text-slate-500 text-sm">
                      ({listing.reviews} Reviews)
                    </span>
                  </div>

                  {/* Property Info */}
                  <div className="flex items-center gap-6 mt-5 text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <FaBed />
                      <span>{listing.rooms}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaBath />
                      <span>{listing.bath}</span>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                      {listing.type}
                    </span>

                    <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                      {listing.furnished}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2">
                      <FaPhone /> Call
                    </button>

                    <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2">
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <button className="border border-emerald-600 text-emerald-700 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition">
                      View on Map
                    </button>

                    <Link
                      to={`/listing/${listing.id}`}
                      className="bg-slate-900 hover:bg-black text-white py-3 rounded-2xl font-semibold text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      <section className="pb-20">
        <div className="flex items-center justify-center gap-3">
          <button className="px-5 py-3 rounded-2xl bg-slate-200 font-semibold">
            Previous
          </button>

          <button className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold">
            1
          </button>

          <button className="px-5 py-3 rounded-2xl bg-slate-200 font-semibold">
            2
          </button>

          <button className="px-5 py-3 rounded-2xl bg-slate-200 font-semibold">
            3
          </button>

          <button className="px-5 py-3 rounded-2xl bg-slate-200 font-semibold">
            Next
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-14 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black text-white mb-4">
              BashaFinder BD
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Bangladesh's modern rental home finding platform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/browse">Listings</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Popular Areas</h3>

            <ul className="space-y-2 text-slate-400">
              <li>Mirpur</li>
              <li>Uttara</li>
              <li>Dhanmondi</li>
              <li>Mohammadpur</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>

            <ul className="space-y-2 text-slate-400">
              <li>Dhaka, Bangladesh</li>
              <li>support@bashafinder.com</li>
              <li>+8801XXXXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          © 2026 BashaFinder BD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}