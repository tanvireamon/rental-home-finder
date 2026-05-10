import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-emerald-500 rounded-full blur-3xl opacity-20 bottom-[-150px] right-[-100px]"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 bg-white/70 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border border-slate-200">

        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-emerald-700 to-emerald-500 text-white relative">
          <div className="absolute w-60 h-60 bg-white/10 rounded-full blur-2xl top-[-40px] left-[-40px]"></div>

          <h1 className="text-4xl font-black mb-4">
            Welcome Back 👋
          </h1>

          <p className="text-emerald-50 text-lg leading-relaxed">
            Login to continue exploring verified rental homes across Dhaka.
            Find your perfect place faster, safer, and smarter.
          </p>

          <div className="mt-10 space-y-3 text-sm text-emerald-50">
            <p>🏠 Verified Listings Only</p>
            <p>📍 Google Map Integration</p>
            <p>⚡ Fast & Smart Search</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 md:p-14">
          <h2 className="text-3xl font-black text-slate-800 mb-2">
            Login
          </h2>
          <p className="text-slate-500 mb-8">
            Enter your details to access your account
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 px-5 py-4 rounded-2xl bg-slate-100 outline-none focus:ring-4 focus:ring-emerald-300 transition"
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot" className="text-emerald-600 font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-400/30"
            >
              Login
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
              Continue with Google
            </button>

            {/* Signup */}
            <p className="text-center text-slate-500 mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-emerald-600 font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}