import { useParams, Link } from "react-router-dom";
import listingsData from '../data/home.json'; // Import the data

export default function ListingDetails() {
  const { id } = useParams();

  // Find the specific listing where FIELD1 matches the ID from the URL
  const listing = listingsData.find((item) => item.FIELD1.toString() === id);

  if (!listing) {
    return <div className="p-20 text-center text-xl font-bold">Listing not found!</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* ... (Keep your existing Navbar code) ... */}
      
      <div className="max-w-7xl mx-auto px-5 py-10">
        <Link to="/browse" className="text-emerald-600 font-semibold mb-5 inline-block">← Back to Listings</Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Note: If you have images in your JSON, use item.image here */}
            <div className="bg-white rounded-3xl p-8 mt-8">
              <h1 className="text-4xl font-black">{listing.Location}</h1>
              <p className="text-slate-500 mt-2 text-lg">{listing.Area}</p>
              <p className="text-emerald-700 font-black text-3xl mt-5">৳ {listing.Price}</p>
              
              <div className="flex gap-6 mt-6 text-lg font-semibold">
                <span>🛏 {listing.Bed} Beds</span>
                <span>🛁 {listing.Bath} Baths</span>
              </div>
            </div>
          </div>

          {/* ... (Rest of your Owner Details section) ... */}
        </div>
      </div>
    </div>
  );
}