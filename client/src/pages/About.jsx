// About.jsx

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help people find rental homes easily across Bangladesh without
            walking door to door. Our platform connects tenants and property
            owners in one simple place.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-7">
              Rental Home Finder is a modern web platform designed to simplify
              the house renting process. Users can browse verified listings,
              check property details, contact owners, and explore nearby
              facilities.
            </p>

            <p className="text-gray-600 mb-4 leading-7">
              Our mission is to make home searching faster, easier, and more
              reliable for students, families, and working professionals.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="text-2xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-600">Properties Listed</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="text-2xl font-bold text-indigo-600">1000+</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}