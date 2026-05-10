export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <div className="flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-28 h-28 rounded-full"
          />

          <div>
            <h1 className="text-4xl font-black">
              Eamon Ahmed
            </h1>

            <p className="text-slate-500 mt-2">
              Rental Home Owner
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl">
            <p className="font-semibold">Email</p>
            <p className="text-slate-600">
              eamon@gmail.com
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl">
            <p className="font-semibold">Phone</p>
            <p className="text-slate-600">
              +8801XXXXXXXXX
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl">
            <p className="font-semibold">Address</p>
            <p className="text-slate-600">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}