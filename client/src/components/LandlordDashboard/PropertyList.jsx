import React, { useState } from "react";

const PropertyList = ({ properties }) => {
  const [propertyData, setPropertyData] = useState(properties || []);

  const [showAddProperty, setShowAddProperty] = useState(false);

  const [newProperty, setNewProperty] = useState({
    title: "",
    address: "",
    price: "",
    rooms: "",
    bathrooms: "",
    sqft: "",
    description: "",
    isActive: true,
  });

  // Add Property
  const handleAddProperty = (e) => {
    e.preventDefault();

    const property = {
      id: Date.now(),
      ...newProperty,
      images: [],
      views: 0,
      inquiries: [],
    };

    setPropertyData([...propertyData, property]);

    setNewProperty({
      title: "",
      address: "",
      price: "",
      rooms: "",
      bathrooms: "",
      sqft: "",
      description: "",
      isActive: true,
    });

    setShowAddProperty(false);
  };

  // Toggle Active/Inactive
  const togglePropertyStatus = (id) => {
    const updated = propertyData.map((property) =>
      property.id === id
        ? { ...property, isActive: !property.isActive }
        : property
    );

    setPropertyData(updated);
  };

  // Delete Property
  const deleteProperty = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (confirmDelete) {
      const updated = propertyData.filter(
        (property) => property.id !== id
      );

      setPropertyData(updated);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">
          Your Properties
        </h2>

        <button
          onClick={() =>
            setShowAddProperty(!showAddProperty)
          }
          className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-6 py-3 rounded-2xl font-bold"
        >
          + Add Property
        </button>
      </div>

      {/* Add Property Form */}
      {showAddProperty && (
        <form
          onSubmit={handleAddProperty}
          className="bg-slate-100 rounded-3xl p-8 mb-10"
        >
          <h3 className="text-2xl font-black mb-6">
            Add New Property
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Property Title"
              value={newProperty.title}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  title: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
              required
            />

            <input
              type="text"
              placeholder="Address"
              value={newProperty.address}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  address: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
              required
            />

            <input
              type="text"
              placeholder="Monthly Rent"
              value={newProperty.price}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  price: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
            />

            <input
              type="number"
              placeholder="Rooms"
              value={newProperty.rooms}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  rooms: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
            />

            <input
              type="number"
              placeholder="Bathrooms"
              value={newProperty.bathrooms}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  bathrooms: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
            />

            <input
              type="number"
              placeholder="Square Feet"
              value={newProperty.sqft}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  sqft: e.target.value,
                })
              }
              className="p-4 rounded-2xl outline-none"
            />
          </div>

          <textarea
            placeholder="Property Description"
            rows="4"
            value={newProperty.description}
            onChange={(e) =>
              setNewProperty({
                ...newProperty,
                description: e.target.value,
              })
            }
            className="w-full mt-5 p-4 rounded-2xl outline-none"
          />

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-6 py-3 rounded-2xl font-bold"
            >
              Add Property
            </button>

            <button
              type="button"
              onClick={() =>
                setShowAddProperty(false)
              }
              className="bg-slate-300 hover:bg-slate-400 transition px-6 py-3 rounded-2xl font-bold"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Property Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {propertyData.length > 0 ? (
          propertyData.map((property) => (
            <div
              key={property.id}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt={property.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black">
                      {property.title}
                    </h3>

                    <p className="text-slate-500 mt-2">
                      📍 {property.address}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-emerald-700 font-black text-xl">
                      ৳ {property.price}
                    </p>

                    <p
                      className={`mt-2 font-semibold ${
                        property.isActive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {property.isActive
                        ? "Active"
                        : "Inactive"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-5 text-slate-600 font-medium">
                  <span>🛏 {property.rooms} Beds</span>
                  <span>🚿 {property.bathrooms} Baths</span>
                  <span>📐 {property.sqft} sqft</span>
                </div>

                <p className="mt-5 text-slate-600">
                  {property.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  <button
                    onClick={() =>
                      togglePropertyStatus(property.id)
                    }
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl font-semibold"
                  >
                    {property.isActive
                      ? "Deactivate"
                      : "Activate"}
                  </button>

                  <button
                    onClick={() =>
                      deleteProperty(property.id)
                    }
                    className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-3 rounded-xl font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500">
            No properties added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;