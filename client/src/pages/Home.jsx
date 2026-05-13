import { Link } from "react-router-dom";


export default function Home() {
  const featuredAreas = [
    {
      name: 'Mirpur',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
      listings: '1,250+ Listings',
    },
    {
      name: 'Uttara',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
      listings: '980+ Listings',
    },
    {
      name: 'Dhanmondi',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      listings: '850+ Listings',
    },
    {
      name: 'Mohammadpur',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      listings: '720+ Listings',
    },
  ];

  const featuredHomes = [
    {
      id: 1,
      title: 'Modern Family Apartment',
      area: 'Mirpur DOHS',
      price: '৳ 22,000/month',
      rooms: '3 Beds',
      bath: '2 Baths',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Luxury Bachelor Studio',
      area: 'Uttara Sector 7',
      price: '৳ 15,000/month',
      rooms: '1 Bed',
      bath: '1 Bath',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Cozy Furnished Flat',
      area: 'Dhanmondi 27',
      price: '৳ 30,000/month',
      rooms: '2 Beds',
      bath: '2 Baths',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl md:text-3xl font-black text-emerald-700">
              BashaFinder BD
            </Link>
          </div>

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

  <Link to="/profile" className="hover:text-emerald-600 transition">
    Profile
  </Link>

  <Link to="/about" className="hover:text-emerald-600 transition">
  About
</Link>

<Link to="/contact" className="hover:text-emerald-600 transition">
  Contact
</Link>
</div>

          <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-full text-white font-semibold shadow-lg shadow-emerald-300 inline-block">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
            alt="Dhaka Rental Homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-white mb-6">
              <span>🏠</span>
              <span>Find Homes Easily Across Dhaka</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Find Your
              <span className="block text-emerald-400">Perfect Rental</span>
              Home in Dhaka
            </h1>

            <p className="mt-6 text-slate-200 text-lg md:text-xl max-w-xl leading-relaxed">
              Browse verified rental homes, apartments, bachelor rooms,
              and family flats without walking around neighborhoods.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/browse" className="bg-emerald-600 hover:bg-emerald-700 transition px-7 py-4 rounded-2xl text-white font-bold shadow-2xl shadow-emerald-500/30 inline-block">
                Browse Homes
              </Link>

             <Link
  to="/landlord/dashboard"
  className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-lg transition px-7 py-4 rounded-2xl text-white font-bold inline-block"
>
  Become Landlord
</Link>
            </div>
          </div>

          {/* Search Card */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Search Your Dream Home
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search area (Mirpur, Uttara...)"
                className="w-full px-5 py-4 rounded-2xl bg-white/90 outline-none focus:ring-4 focus:ring-emerald-400"
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="px-4 py-4 rounded-2xl bg-white/90 outline-none">
                  <option>Price Range</option>
                  <option>৳ 5k - 10k</option>
                  <option>৳ 10k - 20k</option>
                  <option>৳ 20k - 40k</option>
                </select>

                <select className="px-4 py-4 rounded-2xl bg-white/90 outline-none">
                  <option>Rooms</option>
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                  <option>3 Rooms</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="px-4 py-4 rounded-2xl bg-white/90 outline-none">
                  <option>Family/Bachelor</option>
                  <option>Family</option>
                  <option>Bachelor</option>
                </select>

                <select className="px-4 py-4 rounded-2xl bg-white/90 outline-none">
  <option>Property Type</option>
  <option>Family</option>
  <option>Bachelor</option>
  <option>Office</option>
  <option>Sublet</option>
  <option>Hostel</option>
  <option>Shop</option>
</select>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition py-4 rounded-2xl text-white text-lg font-bold shadow-lg shadow-emerald-500/40">
                Search Homes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-amber-100 border-y border-amber-300 py-4 px-5 text-center">
        <p className="font-semibold text-amber-900 text-sm md:text-base">
          ⚠ Never pay money before visiting the property physically.
        </p>
      </section>

      {/* Featured Areas */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black">Popular Areas</h2>
            <p className="text-slate-500 mt-2">
              Explore the most searched locations in Dhaka.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={area.image}
                alt={area.name}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-black">{area.name}</h3>
                <p className="mt-1 text-slate-200">{area.listings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
            <div>
              <h2 className="text-4xl font-black">Featured Listings</h2>
              <p className="text-slate-500 mt-2">
                Verified and trending rental homes.
              </p>
            </div>

            <Link to="/browse" className="bg-slate-900 hover:bg-black transition px-6 py-3 rounded-2xl text-white font-semibold w-fit inline-block">
              View All Listings
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredHomes.map((home) => (
              <div
                key={home.id}
                className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="relative">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-emerald-600 px-4 py-2 rounded-full text-white text-sm font-bold">
                    Available
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{home.title}</h3>
                      <p className="text-slate-500 mt-1">{home.area}</p>
                    </div>

                    <div className="text-emerald-700 font-black text-lg">
                      {home.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-5 text-slate-600 font-medium">
                    <span>🛏 {home.rooms}</span>
                    <span>🛁 {home.bath}</span>
                  </div>

                  <div className="flex items-center justify-between mt-7">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <span>✅</span>
                      <span>Verified Owner</span>
                    </div>

                    <Link to={`/listing/${home.id}`} className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-3 rounded-xl text-white font-semibold inline-block">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">Why Choose Us?</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            We make house hunting faster, safer, and smarter for people in
            Bangladesh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <div className="text-5xl mb-5">🏠</div>
            <h3 className="text-2xl font-bold mb-3">Verified Listings</h3>
            <p className="text-slate-600 leading-relaxed">
              Browse trusted and verified rental homes with real owner
              information.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <div className="text-5xl mb-5">📍</div>
            <h3 className="text-2xl font-bold mb-3">Google Maps Support</h3>
            <p className="text-slate-600 leading-relaxed">
              Easily locate nearby hospitals, police stations, and transport.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Fast Search</h3>
            <p className="text-slate-600 leading-relaxed">
              Powerful filtering helps users quickly find suitable rental homes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-[40px] overflow-hidden p-10 md:p-16 text-white relative">
          <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Ready to Find Your Next Home?
            </h2>

            <p className="mt-5 text-emerald-50 text-lg leading-relaxed">
              Join thousands of people searching for verified rental homes
              across Dhaka city.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/browse" className="bg-white text-emerald-700 hover:bg-slate-100 transition px-7 py-4 rounded-2xl font-bold inline-block">
                Get Started
              </Link>

              <button className="border border-white/30 hover:bg-white/10 transition px-7 py-4 rounded-2xl font-bold">
                Learn More
              </button>
            </div>
          </div>
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
              Bangladesh's smart rental home finding platform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/browse" className="hover:text-white transition">Listings</Link></li>
              <li>
  <Link to="/about" className="hover:text-white transition">
    About
  </Link>
</li>

<li>
  <Link to="/contact" className="hover:text-white transition">
    Contact
  </Link>
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