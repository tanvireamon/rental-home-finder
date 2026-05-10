import React from 'react';

const Step2Amenities = ({ data, updateData, errors }) => {
  const amenitiesList = [
    { id: 'wifi', label: 'WiFi', icon: '📡' },
    { id: 'parking', label: 'Parking', icon: '🅿️' },
    { id: 'gym', label: 'Gym/Fitness', icon: '💪' },
    { id: 'pool', label: 'Swimming Pool', icon: '🏊' },
    { id: 'ac', label: 'Air Conditioning', icon: '❄️' },
    { id: 'heating', label: 'Heating', icon: '🔥' },
    { id: 'dishwasher', label: 'Dishwasher', icon: '🍽️' },
    { id: 'washer', label: 'Washer/Dryer', icon: '🧺' },
    { id: 'microwave', label: 'Microwave', icon: '🔬' },
    { id: 'refrigerator', label: 'Refrigerator', icon: '❄️' },
    { id: 'balcony', label: 'Balcony/Patio', icon: '🌳' },
    { id: 'garden', label: 'Garden', icon: '🌺' },
    { id: 'security', label: '24/7 Security', icon: '🔒' },
    { id: 'elevator', label: 'Elevator', icon: '⬆️' },
    { id: 'furnished', label: 'Furnished', icon: '🛋️' },
    { id: 'hardwood', label: 'Hardwood Floors', icon: '🪵' },
    { id: 'closet', label: 'Walk-in Closet', icon: '👗' },
    { id: 'fireplace', label: 'Fireplace', icon: '🔥' },
  ];

  return (
    <div className="step-form">
      <h2>✨ Amenities & Features</h2>
      <p className="step-description">Select all amenities available at your property</p>

      <div className="amenities-grid">
        {amenitiesList.map((amenity) => (
          <div key={amenity.id} className="amenity-option">
            <input
              type="checkbox"
              id={amenity.id}
              checked={data.amenities.includes(amenity.id)}
              onChange={() => updateData('amenities', amenity.id)}
            />
            <label htmlFor={amenity.id}>
              <span className="amenity-icon">{amenity.icon}</span>
              <span className="amenity-label">{amenity.label}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="selected-amenities">
        <h3>Selected Amenities ({data.amenities.length})</h3>
        <div className="amenity-tags">
          {data.amenities.length > 0 ? (
            data.amenities.map((amenity) => {
              const amenityObj = amenitiesList.find(a => a.id === amenity);
              return (
                <span key={amenity} className="tag">
                  {amenityObj?.icon} {amenityObj?.label}
                </span>
              );
            })
          ) : (
            <p className="no-selection">No amenities selected yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2Amenities;