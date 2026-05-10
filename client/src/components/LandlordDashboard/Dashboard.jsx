import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");

  const [landlordData, setLandlordData] = useState({
    id: 1,
    name: "Eamon Ahmed",

    properties: [
      {
        id: 1,
        title: "Modern Family Apartment",
        location: "Mirpur DOHS",
        price: "৳ 22,000/month",
        isActive: true,
      },

      {
        id: 2,
        title: "Bachelor Studio",
        location: "Uttara Sector 7",
        price: "৳ 15,000/month",
        isActive: true,
      },
    ],

    inquiries: [
      {
        id: 1,
        name: "Rahim",
        message: "Is this property available?",
        isRead: false,
      },

      {
        id: 2,
        name: "Karim",
        message: "Can I visit tomorrow?",
        isRead: true,
      },
    ],

    payments: [
      {
        id: 1,
        amount: 22000,
      },

      {
        id: 2,
        amount: 15000,
      },
    ],
  });

  const [stats, setStats] = useState({
    totalProperties: 0,
    activeListings: 0,
    pendingInquiries: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    calculateStats();
  }, []);

  const calculateStats = () => {
    setStats({
      totalProperties: landlordData.properties.length,

      activeListings:
        landlordData.properties.filter((p) => p.isActive).length,

      pendingInquiries:
        landlordData.inquiries.filter((i) => !i.isRead).length,

      totalRevenue:
        landlordData.payments.reduce((sum, p) => sum + p.amount, 0),
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-black text-slate-800">
          Welcome back, {landlordData.name} 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your properties and tenants easily
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-4xl mb-3">🏢</div>

          <h2 className="text-3xl font-black">
            {stats.totalProperties}
          </h2>

          <p className="text-slate-500">
            Total Properties
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-4xl mb-3">📋</div>

          <h2 className="text-3xl font-black">
            {stats.activeListings}
          </h2>

          <p className="text-slate-500">
            Active Listings
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-4xl mb-3">📧</div>

          <h2 className="text-3xl font-black">
            {stats.pendingInquiries}
          </h2>

          <p className="text-slate-500">
            Pending Inquiries
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-4xl mb-3">💰</div>

          <h2 className="text-3xl font-black">
            ৳ {stats.totalRevenue.toLocaleString()}
          </h2>

          <p className="text-slate-500">
            Total Revenue
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveTab("properties")}
          className={`px-6 py-3 rounded-2xl font-bold transition ${
            activeTab === "properties"
              ? "bg-emerald-600 text-white"
              : "bg-white text-slate-700"
          }`}
        >
          Properties
        </button>

        <button
          onClick={() => setActiveTab("inquiries")}
          className={`px-6 py-3 rounded-2xl font-bold transition ${
            activeTab === "inquiries"
              ? "bg-emerald-600 text-white"
              : "bg-white text-slate-700"
          }`}
        >
          Inquiries
        </button>

        <button
          onClick={() => setActiveTab("payments")}
          className={`px-6 py-3 rounded-2xl font-bold transition ${
            activeTab === "payments"
              ? "bg-emerald-600 text-white"
              : "bg-white text-slate-700"
          }`}
        >
          Payments
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        {activeTab === "properties" && (
          <PropertyList
            properties={landlordData.properties}
          />
        )}

        {activeTab === "inquiries" && (
          <div>
            <h2 className="text-3xl font-black mb-6">
              Tenant Inquiries
            </h2>

            <div className="space-y-4">
              {landlordData.inquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="bg-slate-50 p-5 rounded-2xl"
                >
                  <h3 className="font-bold text-xl">
                    {inquiry.name}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    {inquiry.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "payments" && (
          <div>
            <h2 className="text-3xl font-black mb-6">
              Payment History
            </h2>

            <div className="space-y-4">
              {landlordData.payments.map((payment) => (
                <div
                  key={payment.id}
                  className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center"
                >
                  <p className="font-bold">
                    Payment #{payment.id}
                  </p>

                  <p className="text-emerald-700 font-black">
                    ৳ {payment.amount.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;