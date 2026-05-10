import React from 'react';

const Step1Basic = ({ data, updateData, errors }) => {
  return (
    <div className="step-form">
      <h2>📍 Basic Property Information</h2>
      <p className="step-description">Tell us about your property</p>

      <div className="form-group">
        <label htmlFor="title">Property Title *</label>
        <input
          id="title"
          type="text"
          value={data.title}
          onChange={(e) => updateData('title', e.target.value)}
          placeholder="e.g., Cozy 2BR Apartment in Downtown"
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Street Address *</label>
        <input
          id="address"
          type="text"
          value={data.address}
          onChange={(e) => updateData('address', e.target.value)}
          placeholder="e.g., 123 Main Street"
          className={errors.address ? 'error' : ''}
        />
        {errors.address && <span className="error-text">{errors.address}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input
            id="city"
            type="text"
            value={data.city}
            onChange={(e) => updateData('city', e.target.value)}
            placeholder="City"
            className={errors.city ? 'error' : ''}
          />
          {errors.city && <span className="error-text">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="state">State/Province</label>
          <input
            id="state"
            type="text"
            value={data.state}
            onChange={(e) => updateData('state', e.target.value)}
            placeholder="State"
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            id="zipCode"
            type="text"
            value={data.zipCode}
            onChange={(e) => updateData('zipCode', e.target.value)}
            placeholder="ZIP Code"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select
            id="propertyType"
            value={data.propertyType}
            onChange={(e) => updateData('propertyType', e.target.value)}
          >
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condo</option>
            <option value="studio">Studio</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            id="bedrooms"
            type="number"
            min="0"
            value={data.bedrooms}
            onChange={(e) => updateData('bedrooms', parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            id="bathrooms"
            type="number"
            min="0"
            step="0.5"
            value={data.bathrooms}
            onChange={(e) => updateData('bathrooms', parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="squareFeet">Square Feet</label>
        <input
          id="squareFeet"
          type="number"
          value={data.squareFeet}
          onChange={(e) => updateData('squareFeet', e.target.value)}
          placeholder="e.g., 1200"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Property Description *</label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => updateData('description', e.target.value)}
          placeholder="Describe your property: layout, features, condition, etc."
          rows="5"
          className={errors.description ? 'error' : ''}
        ></textarea>
        {errors.description && <span className="error-text">{errors.description}</span>}
      </div>
    </div>
  );
};

export default Step1Basic;