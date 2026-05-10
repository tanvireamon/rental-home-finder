import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden py-10">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-emerald-500 rounded-full blur-3xl opacity-20 bottom-[-150px] right-[-100px]"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 bg-white/70 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border border-slate-200">

        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-emerald-700 to-emerald-500 text-white relative">
          <div className="absolute w-60 h-60 bg-white/10 rounded-full blur-2xl top-[-40px] left-[-40px]"></div>

          <h1 className="text-4xl font-black mb-4">
            Join Us Today 🎉
          </h1>

          <p className="text-emerald-50 text-lg leading-relaxed">
            Create an account to list your rental homes or find your perfect place across Dhaka.
          </p>

          <div className="mt-10 space-y-3 text-sm text-emerald-50">
            <p>🏠 List Your Properties</p>
            <p>🔒 Secure & Verified</p>
            <p>⚡ Quick Setup</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 md:p-14 max-h-[90vh] overflow-y-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-2">
            Sign Up
          </h2>
          <p className="text-slate-500 mb-8">
            Create your account to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1XXXXXXXXX"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address in Dhaka"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
                required
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded cursor-pointer"
                required
              />
              <label className="text-sm text-slate-600">
                I agree to the{" "}
                <a href="#" className="text-emerald-600 font-semibold hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-emerald-600 font-semibold hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-400/30 mt-6"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-slate-400 text-sm">OR</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* Social */}
            <button
              type="button"
              className="w-full bg-white border border-slate-200 hover:bg-slate-50 transition py-4 rounded-2xl font-semibold"
            >
              Sign up with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-slate-500 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}