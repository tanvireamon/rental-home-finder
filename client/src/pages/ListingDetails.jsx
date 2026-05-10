import { useParams, Link } from "react-router-dom";

export default function ListingDetails() {
  const { id } = useParams();

  const listing = {
    title: "Modern Family Apartment",
    area: "Mirpur DOHS",
    price: "৳ 22,000/month",
    rooms: "3 Beds",
    bath: "2 Baths",
    owner: "Ahmed Khan",
    phone: "+880 1712345678",
    description: "Beautiful modern apartment with all amenities. Safe location near hospitals and transport.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-emerald-700">BashaFinder BD</Link>
          <Link to="/login" className="bg-emerald-600 px-5 py-2 rounded-full text-white font-semibold inline-block">Login</Link>
        </div>
      </nav>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <Link to="/browse" className="text-emerald-600 font-semibold mb-5 inline-block">← Back to Listings</Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img src={listing.image} alt={listing.title} className="w-full h-96 object-cover rounded-3xl" />
            <div className="bg-white rounded-3xl p-8 mt-8">
              <h1 className="text-4xl font-black">{listing.title}</h1>
              <p className="text-slate-500 mt-2 text-lg">{listing.area}</p>
              <p className="text-emerald-700 font-black text-3xl mt-5">{listing.price}</p>
              <div className="flex gap-6 mt-6 text-lg font-semibold">
                <span>🛏 {listing.rooms}</span>
                <span>🛁 {listing.bath}</span>
              </div>
              <p className="mt-8 text-slate-600 leading-relaxed">{listing.description}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 h-fit shadow-lg">
            <h3 className="text-2xl font-black mb-6">Owner Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-sm">Name</p>
                <p className="font-bold">{listing.owner}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Phone</p>
                <p className="font-bold">{listing.phone}</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold mt-8">
                Contact Owner
              </button>
              <button className="w-full bg-white border-2 border-emerald-600 text-emerald-600 py-4 rounded-2xl font-bold">
                Message Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}